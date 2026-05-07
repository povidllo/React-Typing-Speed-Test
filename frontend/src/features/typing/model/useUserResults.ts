import { useSetUserResults } from "@/entity/Results";
import { useEffect } from "react";

interface UseUserResultsProps {
  generalTyposCount: number;
  enteredTextLength: number;
  timeSpent: number;
  textId: number | undefined;
  isFinished: boolean;
  isAuthorized: boolean;
}

export const useUserResults = ({
  enteredTextLength,
  generalTyposCount,
  textId,
  timeSpent,
  isFinished,
  isAuthorized,
}: UseUserResultsProps) => {
  const { mutate: setUserResults } = useSetUserResults();

  const cpm = Math.round(
    timeSpent > 0 ? (enteredTextLength / timeSpent) * 60 : 0,
  );

  const accuracy = Math.round(
    enteredTextLength > 0
      ? Math.max(
          0,
          ((enteredTextLength - generalTyposCount) / enteredTextLength) * 100,
        )
      : 0,
  );

  const wpm = Math.round(
    timeSpent > 0 ? (enteredTextLength * 60) / (timeSpent * 5) : 0,
  );

  useEffect(() => {
    if (!isFinished || !textId || !isAuthorized) return;

    setUserResults({
      textId,
      cpm,
      wpm,
      accuracy,
      errors: generalTyposCount,
      time: timeSpent,
    });

    console.log("sent");
  }, [isFinished, textId]);

  return { cpm, accuracy, wpm };
};
