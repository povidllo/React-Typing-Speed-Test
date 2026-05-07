import { useQuery } from "@tanstack/react-query";
import { getUseResultsQueryKeys } from "../lib/getUseResultsQueryKeys";
import { resultsApi } from "@/shared/api";
import type { UserResults } from "./types";

export const useGetUserResults = (length = 10, offset = 0) => {
  return useQuery<UserResults[]>({
    queryKey: getUseResultsQueryKeys(length, offset),
    queryFn: async () => {
      const response = await resultsApi.resultsGet(length, offset);
      console.log(response);
      return response.data;
    },
  });
};
