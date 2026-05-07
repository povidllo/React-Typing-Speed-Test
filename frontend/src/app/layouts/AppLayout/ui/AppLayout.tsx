import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import { useAuthMe } from "@/entity/User";

export const AppLayout = () => {
  const { data: user } = useAuthMe();

  return (
    <div className="h-screen flex flex-col">
      <Header user={user} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
