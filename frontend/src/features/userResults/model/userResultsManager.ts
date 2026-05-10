import {
  useGetUserResults,
  type ResultsBestGetByEnum,
  type UserResults,
} from "@/entity/Results";
import { useGetBestUserResults } from "@/entity/Results/model/useGetBestUserResults";
import { useEffect, useState } from "react";

export const userResultsManager = (
  initialLength: number = 10,
  bestResultsBy: ResultsBestGetByEnum = "cpm",
) => {
  const [length, _setLength] = useState<number>(initialLength);
  const [offset, setOffset] = useState<number>(0);
  const [results, setResults] = useState<UserResults[] | null>(null);
  const {
    data: userResults,
    isLoading: userResultsLoading,
    isError: userResultsError,
  } = useGetUserResults(length, offset);
  const {
    data: bestUserResults,
    isLoading: bestUserResultsLoading,
    isError: bestUserResultsError,
  } = useGetBestUserResults(bestResultsBy);

  useEffect(() => {
    if (!userResults) return;

    setResults((prev) => {
      if (offset === 0) {
        return userResults;
      }

      return [...(prev ?? []), ...userResults];
    });
  }, [userResults, offset]);

  const loadMore = () => {
    setOffset((prev) => prev + length);
  };
  return {
    userResults: results,
    userResultsLoading,
    userResultsError,
    bestUserResults,
    bestUserResultsLoading,
    bestUserResultsError,
    loadMore,
  };
};
