import { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

import "./CarouselRecipes.scss";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export const CarouselRecipes = ({ recipes }) => {
  const [currentRecipe, setCurrentRecipe] = useState(0);

  const prevRecipe = () => {
    setCurrentRecipe(
      currentRecipe !== 0 ? currentRecipe - 1 : recipes.length - 1
    );
  };

  const nextRecipe = () => {
    setCurrentRecipe(
      recipes.length - 1 !== currentRecipe ? currentRecipe + 1 : 0
    );
  };

  useEffect(() => {
    const carousel = setInterval(() => {
      nextRecipe();
    }, 4000);

    return () => clearInterval(carousel);
  }, [currentRecipe]);

  return (
    <div className="carousel-recipes">
      <GrPrevious onClick={prevRecipe} className="carousel-recipes__arrow" />
      <RecipeCard
        recipe={recipes[currentRecipe]}
        className="carousel-recipes__card"
      />
      <GrNext onClick={nextRecipe} className="carousel-recipes__arrow" />
    </div>
  );
};
