import { CarouselRecipes, RecipeCard } from "../";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";
import { useState } from "react";
import { recipesdata } from "../../../../db";
import { useQuery } from "react-query";
import { getRandomRecipes } from "../../../../api/utils";
import { HiArrowLongRight } from "react-icons/hi2";

import "./InspireContainer.scss";

export const InspireContainer = () => {
  const screenWidth = useScreenWidth();

  const [recipes, setRecipes] = useState(recipesdata);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["random"],
  //   queryFn: () => getRandomRecipes(),
  // });

  return (
    <div className="inspire-container">
      <h5 className="inspire-container__text">
        Unlock the Flavors of Your Kitchen
      </h5>
      <h4>GET INSPIRED</h4>
      {screenWidth > 768 ? (
        <div>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} className={"class"} />
          ))}
        </div>
      ) : (
        <CarouselRecipes recipes={recipes} />
      )}
      <h5 className="inspire-container__show-more">
        SHOW ME EVERYTHING{" "}
        <span>
          <HiArrowLongRight />
        </span>
      </h5>
    </div>
  );
};
