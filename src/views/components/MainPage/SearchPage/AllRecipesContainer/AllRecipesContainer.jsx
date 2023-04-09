import { SearchContainer } from "../SearchContainer/SearchContainer";
import { RecipeCard } from "../../HomePage";

import "./AllRecipesContainer.scss";
import { useContext } from "react";
import { RecipesContext } from "../../../../../context/RecipesContext";

export const AllRecipesContainer = () => {
  const { recipesState } = useContext(RecipesContext);
  const { recipes } = recipesState;

  return (
    <div className="allrecipes-container">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          className="allrecipes-container__card"
        />
      ))}
    </div>
  );
};
