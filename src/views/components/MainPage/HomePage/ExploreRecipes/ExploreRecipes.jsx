import { useEffect, useState } from "react";
import { CarouselRecipes } from "../CarouselRecipes/CarouselRecipes";

import "./ExploreRecipes.scss";
import { useQuery } from "react-query";
import { getRecipesByCuisine } from "../../../../../api/utils";
import { RecipeCard } from "../../RecipeCard/RecipeCard";

export const ExploreRecipes = () => {
  const cuisineArr = [
    "American",
    "Mexican",
    "Chinese",
    "French",
    "Spanish",
    "Italian",
    "Japanese",
    "Thai",
  ];

  const [cuisine, setCuisine] = useState("American");

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [cuisine],
    queryFn: () => getRecipesByCuisine(cuisine),
  });

  useEffect(() => {
    refetch();
  }, [cuisine]);

  return (
    <div className="explore-recipes">
      <h4>EXPLORE RECIPES</h4>
      <div className="explore-recipes__buttons">
        {cuisineArr.map((cuisineEl) => (
          <button
            key={cuisineEl}
            onClick={() => setCuisine(cuisineEl)}
            className={cuisine === cuisineEl ? "active" : ""}
          >
            {cuisineEl.toUpperCase()}
          </button>
        ))}
      </div>
      {error && <h2>Something happened...</h2>}
      <div className="explore-recipes__results">
        {!isLoading &&
          data &&
          data.data.results.map((result) => (
            <RecipeCard
              key={result.id}
              recipe={result}
              className="explore-recipes__results--card"
            />
          ))}
      </div>
    </div>
  );
};
