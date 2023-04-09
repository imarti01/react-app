import { useEffect, useState } from "react";
import { SearchContainer } from "../SearchContainer/SearchContainer";
import { RecipeCard } from "../../HomePage";

import "../AllRecipesContainer/AllRecipesContainer.scss";
import { useParams } from "react-router-dom";
import { getRecipesByDiet } from "../../../../../api/utils";
import { useQuery } from "react-query";

export const FilteredRecipesContainer = () => {
  const { filtered } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["diet"],
    queryFn: () => getRecipesByDiet(filtered),
  });

  useEffect(() => {
    refetch();
  }, [filtered]);

  return (
    <div className="allrecipes-container">
      {error && <h2>Something happened...</h2>}
      {!isLoading &&
        data &&
        data.data.results.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            className="allrecipes-container__card"
          />
        ))}
    </div>
  );
};
