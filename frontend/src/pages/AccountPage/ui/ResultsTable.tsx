import type { UserResults } from "@/entity/Results";
import clsx from "clsx";
import { memo } from "react";

interface ResultsTableProps {
  results: UserResults[];
}

export const ResultsTable = memo(
  ({ results }: ResultsTableProps) => {
    return (
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full border-collapse">
          <thead className="bg-(--bg-color)">
            <tr>
              <th className="px-4 py-3 text-left text-(--sub-color)">cpm</th>

              <th className="px-4 py-3 text-left text-(--sub-color)">wpm</th>

              <th className="px-4 py-3 text-left text-(--sub-color)">
                accuracy
              </th>

              <th className="px-4 py-3 text-left text-(--sub-color)">
                language
              </th>

              <th className="px-4 py-3 text-left text-(--sub-color)">type</th>
            </tr>
          </thead>

          <tbody>
            {results.map((el, index) => (
              <tr
                key={el.resultId}
                className={clsx(
                  "transition-colors",
                  index % 2 === 0 && "bg-(--color-sub-alt)",
                )}
              >
                <td className="px-4 py-3 text-(--text-color)">{el.cpm}</td>

                <td className="px-4 py-3 text-(--text-color)">{el.wpm}</td>

                <td className="px-4 py-3 text-(--text-color)">
                  {el.accuracy}%
                </td>

                <td className="px-4 py-3 text-(--text-color)">
                  {el.text.language}
                </td>

                <td className="px-4 py-3 text-(--text-color)">
                  {el.text.lengthType}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.results.length === nextProps.results.length;
  },
);

ResultsTable.displayName = "ResultsTable";
