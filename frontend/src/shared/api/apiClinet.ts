import { AuthApi, Configuration, ResultsApi, TextsApi } from "./generated";

const SERVER_PORT = 3000;

const config: Configuration = new Configuration({
  basePath: `http://localhost:${SERVER_PORT}`,
  accessToken: () => localStorage.getItem("token") ?? "",
});

export const textsApi: TextsApi = new TextsApi(config);
export const authApi: AuthApi = new AuthApi(config);
export const resultsApi: ResultsApi = new ResultsApi(config);