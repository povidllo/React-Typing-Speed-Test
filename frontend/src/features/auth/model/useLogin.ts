import { authApi } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ErrorResponse, AuthResponse } from "./types";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";
import { getAuthMeQueryKeys } from "@/entity/User/lib/getAuthMeQueryKeys";

interface UseLoginMutationProps {
  login: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<
    AuthResponse,
    AxiosError<ErrorResponse>,
    UseLoginMutationProps
  >({
    mutationFn: async ({ login, password }) => {
      const response = await authApi.authLoginPost({
        login,
        password,
      });

      return response.data;
    },

    onSuccess: (data) => {
      localStorage.setItem("token", data.token!);
      queryClient.invalidateQueries({ queryKey: getAuthMeQueryKeys() });
      navigate("/");
    },

    onError: (error) => {
      if (error.status === 400) {
        console.log("Не удалось залогиниться");
      }
    },
  });
};
