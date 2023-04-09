import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getRandomRecipes } from "../../../../../api/utils";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CarouselRecipes } from "../CarouselRecipes/CarouselRecipes";

import "./InspireContainer.scss";
import { RecipesContext } from "../../../../../context/RecipesContext";

export const InspireContainer = () => {
  const { storeRecipes } = useContext(RecipesContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["random"],
    queryFn: () => getRandomRecipes(),
  });

  useEffect(() => {
    !isLoading && storeRecipes(data.data.recipes);
  }, [data]);

  return (
    <div className="inspire-container">
      <h5 className="inspire-container__text">
        Unlock the Flavors of Your Kitchen
      </h5>
      <h4>GET INSPIRED</h4>
      {error && <h2>Something happened...</h2>}
      {!isLoading && data && (
        <>
          <CarouselRecipes recipes={data.data.recipes} />
          <Link to="/allRecipes" className="inspire-container__show-more">
            SHOW ME EVERYTHING <IoMdArrowRoundForward />
          </Link>
        </>
      )}
    </div>
  );
};
