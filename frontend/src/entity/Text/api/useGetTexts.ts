import { useQuery } from "@tanstack/react-query";
import { getTextsQueryKey } from "../lib/getTextsQueryKey";
import type { Text, TextLanguage, TextLengthType } from "../model/types";
import { textsApi } from "@/shared/api";

export const useGetTexts = (
  textLanguage: TextLanguage,
  textLengthType: TextLengthType,
) => {
  return useQuery<Text>({
    queryKey: getTextsQueryKey(textLanguage, textLengthType),
    queryFn: async () => {
      const response = await textsApi.textsGet(textLanguage, textLengthType);
      return response.data;
    },
  });
};
