import { createBrowserRouter } from "react-router-dom";
import { MainPage, DashboardPage, ErrorPage, DetailPage } from "../views/pages";
import {
  AllRecipesContainer,
  FilteredRecipesContainer,
  LayoutSearchPage,
  MainContainer,
} from "../views/components/MainPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/allRecipes",
        element: <LayoutSearchPage />,
        children: [
          {
            path: "/allRecipes",
            element: (
              <ProtectedRoute>
                {" "}
                <AllRecipesContainer />{" "}
              </ProtectedRoute>
            ),
          },
          {
            path: "/allRecipes/:filtered",
            element: <FilteredRecipesContainer />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/detail/:recipeId",
    element: <DetailPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
