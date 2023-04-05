import { createBrowserRouter } from "react-router-dom";
import { HomePage, DashboardPage, ErrorPage, DetailPage } from "../views/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
