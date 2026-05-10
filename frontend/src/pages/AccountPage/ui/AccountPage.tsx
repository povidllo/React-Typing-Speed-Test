import { Loader } from "lucide-react";
import { ResultsTable } from "./ResultsTable";
import { useUserResultsManager } from "@/features/userResults";
import { Button } from "@/shared/ui";
import { BestResults } from "./BestResults";

export const AccountPage = () => {
  const {
    userResults,
    userResultsLoading,
    userResultsError,
    bestUserResults,
    bestUserResultsError,
    loadMore,
  } = useUserResultsManager(10);

  if (!userResults || !bestUserResults) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader className="animate-spin" size={"50px"} />
      </div>
    );
  }
  if (userResultsError || bestUserResultsError) {
    return (
      <div className="w-full h-full text-7xl flex items-center justify-center">
        Error
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="max-w-5xl flex flex-col gap-4 w-full px-10">
        <BestResults bestUserResults={bestUserResults} />
        <div className="flex flex-col gap-2 w-full">
          <ResultsTable results={userResults} />
          <Button
            onClick={loadMore}
            disabled={userResultsLoading}
            className="rounded px-2 py-1 hover:bg-(--color-sub-alt) w-fit mx-auto"
          >
            {userResultsLoading ? (
              <Loader className="animate-spin" />
            ) : (
              "load more"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
