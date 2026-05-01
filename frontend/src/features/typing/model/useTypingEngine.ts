import { useCallback, useEffect, useState } from "react";

interface UseTypingEngineProps {
  chars: string[];
  content: string;
}

export const useTypingEngine = ({ chars, content }: UseTypingEngineProps) => {
  const [enteredText, setEnteredText] = useState<string>("");
  const enteredTextIndex = enteredText.length;
  const contentLength = content.length;

  useEffect(() => {
    setEnteredText("");
  }, [content]);

  const typeInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > contentLength) {
      return;
    }

    setEnteredText(value);
  };

  const charState = useCallback(
    (currentIdx: number) => {
      if (currentIdx >= enteredText.length) {
        return "idle";
      }
      return chars[currentIdx] === enteredText[currentIdx]
        ? "correct"
        : "incorrect";
    },
    [enteredText, chars],
  );

  return {
    enteredText,
    setEnteredText,
    typeInputFunc,
    charState,
    enteredTextIndex,
  };
};
