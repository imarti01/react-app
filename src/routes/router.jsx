import { createBrowserRouter } from "react-router-dom";
import { MainPage, DashboardPage, ErrorPage, DetailPage } from "../views/pages";
import {
  AllRecipesContainer,
  MainContainer,
} from "../views/components/MainPage";

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
        path: "allRecipes",
        element: <AllRecipesContainer />,
      },
      {
        path: "allRecipes/:filter",
        // element: < />,
      },
      // {
      //   path: "likelibrary",
      //   element: <ContainerLikeLibrary />,
      // },
      // {
      //   path: "nowplaying",
      //   element: <NowPlaying />,
      // },
    ],
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
