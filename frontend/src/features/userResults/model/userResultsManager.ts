import { useGetUserResults, type UserResults } from "@/entity/Results";
import { useEffect, useState } from "react";

export const userResultsManager = (initialLength: number = 10) => {
  const [length, _setLength] = useState<number>(initialLength);
  const [offset, setOffset] = useState<number>(0);
  const [results, setResults] = useState<UserResults[] | null>(null);
  const { data, isLoading, isError } = useGetUserResults(length, offset);

  useEffect(() => {
    if (!data) return;

    setResults((prev) => {
      if (offset === 0) {
        return data;
      }

      return [...(prev ?? []), ...data];
    });
  }, [data, offset]);

  const loadMore = () => {
    setOffset((prev) => prev + length);
  };
  return { results, isLoading, isError, loadMore };
};
