import type { TextLanguage } from "./types";

export type {
  Text,
  TextLanguage,
  TextLengthType,
} from "@/shared/api/generated";

export const TextLanguageMatching: Record<TextLanguage, string> = {
  en: "English",
  ru: "Russian",
};
