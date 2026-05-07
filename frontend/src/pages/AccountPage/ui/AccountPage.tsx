import { Loader } from "lucide-react";
import { ResultsTable } from "./ResultsTable";
import { userResultsManager } from "@/features/userResults";

export const AccountPage = () => {
  const { results, isLoading, isError, loadMore } = userResultsManager(10);

  if (isLoading || !results) {
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
    <div className="flex flex-col gap-1">
      <ResultsTable results={results} />
      <button onClick={loadMore}>load more</button>
    </div>
  );
};
