import { components, paths } from "@/shared/generated/types";

export type UserResults = components["schemas"]["UserResults"];
export type UserResultsBody = components["schemas"]["UserResultsBody"];

export type GetResultsResponses = paths["/results"]["get"]["responses"];
export type GetResults200Response =
  GetResultsResponses["200"]["content"]["application/json"];
export type GetResults401Response =
  GetResultsResponses["401"]["content"]["application/json"];
export type GetResultsResponsesType =
  | GetResults200Response
  | GetResults401Response;

export type PostResultsResponses = paths["/results"]["post"]["responses"];
export type PostResults201Response =
  PostResultsResponses["201"]["content"]["application/json"];
export type PostResults401Response =
  PostResultsResponses["401"]["content"]["application/json"];
export type PostResultsResponsesType =
  | PostResults201Response
  | PostResults401Response;
