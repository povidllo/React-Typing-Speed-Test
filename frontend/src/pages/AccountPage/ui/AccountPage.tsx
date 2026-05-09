import { Loader } from "lucide-react";
import { ResultsTable } from "./ResultsTable";
import { userResultsManager } from "@/features/userResults";
import { Button } from "@/shared/ui";

export const AccountPage = () => {
  const { results, isLoading, isError, loadMore } = userResultsManager(10);

  if (!results) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader className="animate-spin" size={"50px"} />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full h-full text-7xl flex items-center justify-center">
        Error
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl flex flex-col gap-2 w-full">
        <ResultsTable results={results} />
        <Button
          onClick={loadMore}
          disabled={isLoading}
          className="rounded px-2 py-1 hover:bg-(--color-sub-alt) w-fit mx-auto"
        >
          {isLoading ? <Loader className="animate-spin" /> : "load more"}
        </Button>
      </div>
    </div>
  );
};
