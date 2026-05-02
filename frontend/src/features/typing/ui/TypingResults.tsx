interface TypingResultsProps {
  generalTyposCount: number;
  textLength: number;
  timeSpent: number;
}

export const TypingResults = ({
  generalTyposCount,
  textLength,
  timeSpent,
}: TypingResultsProps) => {
  const cpm = timeSpent > 0 ? (textLength / timeSpent) * 60 : 0;

  const accuracy =
    textLength > 0 ? ((textLength - generalTyposCount) / textLength) * 100 : 0;

  const wpm = timeSpent > 0 ? (textLength * 60) / (timeSpent * 5) : 0;

  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col flex-1 gap-2 text-3xl justify-between">
        <div className="flex justify-between gap-1">
          <div className="text-gray-700">CPM:</div>{" "}
          <div className="font-bold">{Math.round(cpm)}</div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">WPM:</span>{" "}
          <span className="font-bold">{Math.round(wpm)}</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 text-xl">
        <div>
          accuracy: <span className="text-2xl">{Math.round(accuracy)}%</span>
        </div>
        <div>
          errors: <span className="text-2xl">{generalTyposCount}</span>
        </div>
        <div>
          time: <span className="text-2xl">{timeSpent}s</span>
        </div>
      </div>
    </div>
  );
};
