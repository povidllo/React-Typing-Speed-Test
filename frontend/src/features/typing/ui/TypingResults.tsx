interface TypingResultsProps {
  accuracy: number;
  cpm: number;
  wpm: number;
  generalTyposCount: number;
  timeSpent: number;
}

export const TypingResults = ({
  accuracy,
  cpm,
  wpm,
  generalTyposCount,
  timeSpent,
}: TypingResultsProps) => {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col flex-1 gap-2 text-3xl justify-between">
        <div className="flex justify-between gap-1">
          <div className="text-(--sub-color)">CPM:</div>{" "}
          <div className="text-(--main-color) font-bold">{cpm}</div>
        </div>
        <div className="flex justify-between">
          <span className="text-(--sub-color)">WPM:</span>{" "}
          <span className="text-(--main-color) font-bold">{wpm}</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 text-xl">
        <div>
          accuracy:{" "}
          <span className="text-(--main-color) text-2xl">{accuracy}%</span>
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
