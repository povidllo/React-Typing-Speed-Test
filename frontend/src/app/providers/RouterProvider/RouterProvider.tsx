import { AppLayout } from "@/app/layouts/AppLayout";
import { AccountPage } from "@/pages/AccountPage";
import { AuthPage } from "@/pages/AuthPage";
import { SpeedTestPage } from "@/pages/SpeedTestPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <SpeedTestPage /> },
      { path: "/auth", element: <AuthPage /> },
      { path: "/account", element: <AccountPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
