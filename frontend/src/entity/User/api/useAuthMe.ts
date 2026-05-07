import { useQuery } from "@tanstack/react-query";
import { getAuthMeQueryKeys } from "../lib/getAuthMeQueryKeys";
import { authApi } from "@/shared/api";
import type { User } from "../model/types";

export const useAuthMe = () => {
  const token = localStorage.getItem("token");

  return useQuery<User>({
    queryKey: getAuthMeQueryKeys(),
    queryFn: async () => {
      const response = await authApi.authMeGet();
      return response.data;
    },
    enabled: !!token,
  });
};