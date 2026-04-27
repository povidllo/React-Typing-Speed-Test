import { SpeedTestPage } from "@/pages/SpeedTestPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <SpeedTestPage /> }]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
