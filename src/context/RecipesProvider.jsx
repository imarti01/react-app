import { useEffect, useMemo, useState } from "react";
import { RecipesContext } from "./RecipesContext";
import { getRandomRecipes } from "../api/utils";

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipes().then((data) => setRecipes(data.data.recipes));
  }, []);

  const value = useMemo(() => ({ recipes }), [recipes]);

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
};
