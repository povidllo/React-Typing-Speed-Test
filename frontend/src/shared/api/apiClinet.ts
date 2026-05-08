import { AuthApi, Configuration, ResultsApi, TextsApi } from "./generated";

const SERVER_PORT = 3000;

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:${SERVER_PORT}`,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }

    return Promise.reject(error);
  },
);

const config = new Configuration({
  basePath: `http://localhost:${SERVER_PORT}`,
});

export const textsApi = new TextsApi(config, undefined, axiosInstance);

export const authApi = new AuthApi(config, undefined, axiosInstance);

export const resultsApi = new ResultsApi(config, undefined, axiosInstance);
