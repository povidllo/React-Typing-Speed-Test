import { resultsApi } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserResultsBody } from "./types";
import { getUseResultsQueryKeys } from "../lib/getUseResultsQueryKeys";

export const useSetUserResults = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: UserResultsBody) => {
      const response = await resultsApi.resultsPost(body);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getUseResultsQueryKeys(),
      });
    },
  });
};
