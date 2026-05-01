import {
  defaultGetTextsQueryParams,
  type TextLanguage,
  type TextLengthType,
} from "@/entity/Text";
import { useState } from "react";

export const useTextSettings = () => {
  const { language, lengthType } = defaultGetTextsQueryParams;
  const [textLanguage, setTextLanguage] = useState<TextLanguage>(language);
  const [textLengthType, setTextLengthType] =
    useState<TextLengthType>(lengthType);

  return { textLanguage, setTextLanguage, textLengthType, setTextLengthType };
};
