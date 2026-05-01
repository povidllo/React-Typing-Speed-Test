import type { TextLanguage, TextLengthType } from "../model/types";

export const getTextsQueryKey = (
  language: TextLanguage,
  lengthType: TextLengthType,
) => {
  return ["texts", language, lengthType];
};
