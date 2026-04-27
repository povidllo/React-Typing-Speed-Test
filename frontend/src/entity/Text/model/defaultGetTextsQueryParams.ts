import type { TextLanguage, TextLengthType } from "./types";
type DefaultGetTextsQueryParamsType = {
  language: TextLanguage;
  lengthType: TextLengthType;
};
export const defaultGetTextsQueryParams: DefaultGetTextsQueryParamsType = {
  language: "ru",
  lengthType: "short",
};
