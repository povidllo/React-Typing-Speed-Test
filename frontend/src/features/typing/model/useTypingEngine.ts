import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TIME, useTypingTimer } from "./useTypingTimer";

interface UseTypingEngineProps {
  chars: string[];
  content: string;
}

export const useTypingEngine = ({ chars, content }: UseTypingEngineProps) => {
  const [enteredText, setEnteredText] = useState<string>("");
  const enteredTextIndex = enteredText.length;
  const contentLength = content.length;

  const generalTyposCount = useRef<number>(0);
  const timeSpent = useRef<number | null>(null);

  const currentTyposCount = useMemo(() => {
    let errors = 0;

    for (let i = 0; i < enteredText.length; i++) {
      if (enteredText[i] !== chars[i]) {
        errors++;
      }
    }

    return errors;
  }, [enteredText, chars]);

  const [isFinished, setIsFinished] = useState<boolean>(false);

  const { time, start, stop, isRunning, reset } = useTypingTimer();

  useEffect(() => {
    setEnteredText("");
  }, [content]);

  useEffect(() => {
    if (
      contentLength > 0 &&
      enteredText.length === contentLength &&
      currentTyposCount === 0
    ) {
      setIsFinished(true);
      timeSpent.current = TIME - time;
      stop();
    }
  }, [content, enteredText]);

  const typeInputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > contentLength) {
      return;
    }

    if (
      value.length > enteredText.length &&
      value[value.length - 1] !== content[value.length - 1]
    ) {
      generalTyposCount.current++;
    }

    if (!isRunning) {
      start();
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

  const resetTyping = () => {
    setIsFinished(false);
    timeSpent.current = null;
    reset();
    generalTyposCount.current = 0;
    setEnteredText("");
  };

  return {
    enteredText,
    setEnteredText,
    typeInputFunc,
    charState,
    enteredTextIndex,
    isFinished,
    resetTyping,
    generalTyposCount: generalTyposCount.current,
    timeSpent: timeSpent.current,
  };
};
