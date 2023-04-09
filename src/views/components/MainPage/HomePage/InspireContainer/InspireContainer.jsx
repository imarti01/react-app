import { Link } from "react-router-dom";
import { useContext } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CarouselRecipes } from "../CarouselRecipes/CarouselRecipes";
import { RecipesContext } from "../../../../../context/RecipesContext";

import "./InspireContainer.scss";

export const InspireContainer = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="inspire-container">
      <h5 className="inspire-container__text">
        Unlock the Flavors of Your Kitchen
      </h5>
      <h4>GET INSPIRED</h4>
      <>
        <CarouselRecipes recipes={recipes} />
        <Link to="/allRecipes" className="inspire-container__show-more">
          SHOW ME EVERYTHING <IoMdArrowRoundForward />
        </Link>
      </>
    </div>
  );
};
