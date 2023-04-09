import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { recipes } = useContext(RecipesContext);

  if (recipes.length < 1) return <Navigate to="/" replace />;

  return children;
};
