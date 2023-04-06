import { useEffect, useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

import "./CarouselRecipes.scss";
import { RecipeCard } from "../../MainPage/RecipeCard/RecipeCard";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";

export const CarouselRecipes = ({ recipes }) => {
  const [widthImg, setWidthImg] = useState(0);
  const screenWidth = useScreenWidth();
  const carousel = useRef(null);
  const listEl = useRef(null);

  useEffect(() => {
    const li = listEl.current;
    if (li) {
      setWidthImg(li.getBoundingClientRect().width);
    }
  }, [screenWidth]);

  const prevRecipe = () => {
    carousel.current.scrollBy(-widthImg, 0);
  };

  const nextRecipe = () => {
    carousel.current.scrollBy(widthImg, 0);
  };

  return (
    <div className="carousel-recipes">
      <GrPrevious onClick={prevRecipe} className="carousel-recipes__arrow" />
      <ul ref={carousel} className="carousel-recipes__container-cards">
        {recipes.map((recipe) => (
          <li
            ref={listEl}
            className="carousel-recipes__container-cards--li"
            key={recipe.id}
          >
            <RecipeCard
              recipe={recipe}
              className="carousel-recipes__container-cards--li--card"
            />
          </li>
        ))}
      </ul>
      <GrNext onClick={nextRecipe} className="carousel-recipes__arrow" />
    </div>
  );
};
