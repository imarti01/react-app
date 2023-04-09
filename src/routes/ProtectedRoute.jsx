import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { recipesState } = useContext(RecipesContext);
  const { recipes } = recipesState;

  if (recipes.length < 1) return <Navigate to="/" replace />;

  return children;
};
