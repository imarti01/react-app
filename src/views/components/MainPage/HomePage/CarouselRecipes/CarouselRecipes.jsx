import { useEffect, useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { RecipeCard } from "../../RecipeCard/RecipeCard";
import { useScreenWidth } from "../../../../../hooks/useScreenWidth";
import "./CarouselRecipes.scss";

export const CarouselRecipes = ({ recipes }) => {
  const [widthImg, setWidthImg] = useState();
  const screenWidth = useScreenWidth();
  const carousel = useRef(null);
  const listEl = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const li = listEl.current;
      if (li) {
        setWidthImg(li.getBoundingClientRect().width);
      }
    }, 2000);
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
      <ul className="carousel-recipes__container-cards" ref={carousel}>
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
