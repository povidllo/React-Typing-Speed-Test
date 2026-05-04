import { authApi } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import type { AuthLoginPost400Response, AuthResponse } from "./types";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

interface UseLoginMutationProps {
  login: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<
    AuthResponse,
    AxiosError<AuthLoginPost400Response>,
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
      navigate("/");
    },

    onError: (error) => {
      if (error.status === 400) {
        console.log("Не удалось залогиниться");
      }
    },
  });
};
