import type { UserResults } from "@/entity/Results";
import { useAuthMe } from "@/entity/User";
import { CircleUserRound } from "lucide-react";

interface BestResultsProps {
  bestUserResults: UserResults;
}

export const BestResults = ({
  bestUserResults,
}: BestResultsProps) => {
  const { data: user } = useAuthMe();

  const stats = [
    {
      label: "WPM",
      value: bestUserResults.wpm,
    },
    {
      label: "CPM",
      value: bestUserResults.cpm,
    },
    {
      label: "Accuracy",
      value: `${bestUserResults.accuracy}%`,
    },
    {
      label: "Errors",
      value: bestUserResults.errors,
    },
    {
      label: "Time",
      value: `${bestUserResults.time}s`,
    },
  ];

  return (
    <div className="rounded-2xl bg-(--color-sub-alt) p-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-4">
          <CircleUserRound
            className="text-(--sub-color)"
            size={72}
          />

          <div className="min-w-0">
            <p className="text-sm text-(--sub-color)">
              Best Results
            </p>

            <h2 className="truncate text-2xl">
              {user?.userLogin}
            </h2>
          </div>
        </div>

        <div className="h-2 w-full bg-(--bg-color) sm:h-30 sm:w-2" />

        <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-(--bg-color) p-3"
            >
              <p className="text-sm text-(--sub-color)">
                {stat.label}
              </p>

              <p className="text-2xl font-semibold">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};