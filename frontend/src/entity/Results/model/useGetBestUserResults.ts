import { useQuery } from "@tanstack/react-query";
import { getUseBestResultsQueryKeys } from "../lib/getUseBestResultsQueryKeys";
import { resultsApi } from "@/shared/api";
import type { UserResults, ResultsBestGetByEnum } from "./types";

export const useGetBestUserResults = (by: ResultsBestGetByEnum) => {
  return useQuery<UserResults>({
    queryKey: getUseBestResultsQueryKeys(),
    queryFn: async () => {
      const response = await resultsApi.resultsBestGet(by);
      return response.data;
    },
  });
};
