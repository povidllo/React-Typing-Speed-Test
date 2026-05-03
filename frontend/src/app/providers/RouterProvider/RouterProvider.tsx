import { AppLayout } from "@/app/layouts/AppLayout";
import { SpeedTestPage } from "@/pages/SpeedTestPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <SpeedTestPage /> }],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
