import { RecipeCard } from "../../HomePage";

import "./AllRecipesContainer.scss";
import { useContext } from "react";
import { RecipesContext } from "../../../../../context/RecipesContext";

export const AllRecipesContainer = () => {
  const { recipes } = useContext(RecipesContext);

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
