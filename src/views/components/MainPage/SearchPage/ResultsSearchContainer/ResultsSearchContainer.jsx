import { RecipeCard } from "../../HomePage";

export const ResultsSearchContainer = ({ searchResults }) => {
  return (
    <div className="allrecipes-container">
      {searchResults.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          className="allrecipes-container__card"
        />
      ))}
    </div>
  );
};
