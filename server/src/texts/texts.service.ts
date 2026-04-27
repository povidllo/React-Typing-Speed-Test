import { TextLanguage, TextLengthType, TextType } from "./texts.types";

interface GetTextProps {
  language?: TextLanguage;
  lengthType?: TextLengthType;
}

export const getText = ({
  language = "ru",
  lengthType = "medium",
}: GetTextProps): TextType | null => {
  if (language === "ru") {
    switch (lengthType) {
      case "short": {
        return {
          id: "1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          language: "ru",
          lengthType: "short",
        };
      }
      case "medium": {
        return {
          id: "2",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          language: "ru",
          lengthType: "medium",
        };
      }
      case "long": {
        return {
          id: "3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          language: "ru",
          lengthType: "long",
        };
      }
    }
  }
  return null;
};
