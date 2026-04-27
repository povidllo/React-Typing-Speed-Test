import { Configuration, TextsApi } from "./generated";

const SERVER_PORT = 3000;

const config: Configuration = new Configuration({
  basePath: `http://localhost:${SERVER_PORT}`,
});

export const textsApi: TextsApi = new TextsApi(config);
