interface TypingResultsProps {
  generalTyposCount: number;
  enteredTextLength: number;
  timeSpent: number;
}

export const TypingResults = ({
  generalTyposCount,
  enteredTextLength,
  timeSpent,
}: TypingResultsProps) => {
  const cpm = timeSpent > 0 ? (enteredTextLength / timeSpent) * 60 : 0;

  const accuracy =
    enteredTextLength > 0
      ? Math.max(
          0,
          ((enteredTextLength - generalTyposCount) / enteredTextLength) * 100,
        )
      : 0;

  const wpm = timeSpent > 0 ? (enteredTextLength * 60) / (timeSpent * 5) : 0;

  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col flex-1 gap-2 text-3xl justify-between">
        <div className="flex justify-between gap-1">
          <div className="text-(--sub-color)">CPM:</div>{" "}
          <div className="text-(--main-color) font-bold">{Math.round(cpm)}</div>
        </div>
        <div className="flex justify-between">
          <span className="text-(--sub-color)">WPM:</span>{" "}
          <span className="text-(--main-color) font-bold">
            {Math.round(wpm)}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 text-xl">
        <div>
          accuracy:{" "}
          <span className="text-(--main-color) text-2xl">
            {Math.round(accuracy)}%
          </span>
        </div>
        <div>
          errors:{" "}
          <span className="text-(--main-color) text-2xl">
            {generalTyposCount}
          </span>
        </div>
        <div>
          time:{" "}
          <span className="text-(--main-color) text-2xl">{timeSpent}s</span>
        </div>
      </div>
    </div>
  );
};
