import { authApi } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import type { AuthError, AuthResponse } from "./types";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

interface UseRegistrationMutationProps {
  login: string;
  password: string;
}

export const useRegistration = () => {
  const navigate = useNavigate();

  return useMutation<
    AuthResponse,
    AxiosError<AuthError>,
    UseRegistrationMutationProps
  >({
    mutationFn: async ({ login, password }) => {
      const response = await authApi.authRegistrationPost({
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
      if (error.status === 409) {
        console.log("Пользователь уже существует");
      }
    },
  });
};
