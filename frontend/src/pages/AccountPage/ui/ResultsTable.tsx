import type { UserResults } from "@/entity/Results";

interface ResultsTableProps {
  results: UserResults[];
}

export const ResultsTable = ({ results }: ResultsTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="text-(--sub-color) text-left">cpm</th>
          <th className="text-(--sub-color) text-left">wpm</th>
          <th className="text-(--sub-color) text-left">accuracy</th>
          <th className="text-(--sub-color) text-left">language</th>
          <th className="text-(--sub-color) text-left">type</th>
        </tr>
      </thead>
      <tbody>
        {results.map((el) => (
          <tr key={el.resultId}>
            <th className="text-(--text-color) text-left">{el.cpm}</th>
            <th className="text-(--text-color) text-left">{el.wpm}</th>
            <th className="text-(--text-color) text-left">{el.accuracy}%</th>
            <th className="text-(--text-color) text-left">
              {el.text.language}
            </th>
            <th className="text-(--text-color) text-left">
              {el.text.lengthType}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
