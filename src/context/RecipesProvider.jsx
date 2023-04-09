import { useReducer } from "react";
import { RecipesContext } from "./RecipesContext";
import { recipesReducer } from "./recipesReducer";
import { types } from "./types/types";

const initialState = {
  recipes: [],
  savedRecipes: [],
};

export const RecipesProvider = ({ children }) => {
  const [recipesState, dispatch] = useReducer(recipesReducer, initialState);

  const storeRecipes = (recipes) => {
    dispatch({ type: types.SAVE_INSPIRE_RECIPES, payload: recipes });
  };

  return (
    <RecipesContext.Provider value={{ recipesState, storeRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
