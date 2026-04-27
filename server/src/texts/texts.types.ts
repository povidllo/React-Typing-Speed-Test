import type { components } from "@/shared/generated/types.js";
import type { paths } from "@/shared/generated/types.js";

export type TextType = components["schemas"]["Text"];
export type TextLanguage = components["schemas"]["Language"];
export type TextLengthType = components["schemas"]["LengthType"];

export type GetTextsQueries = paths["/texts"]["get"]["parameters"]["query"];
export type GetTextsResponses = paths["/texts"]["get"]["responses"];
export type GetText200Response =
  GetTextsResponses["200"]["content"]["application/json"];
export type GetText404Response =
  GetTextsResponses["404"]["content"]["application/json"];
export type GetTextsResponsesType = GetText200Response | GetText404Response;
