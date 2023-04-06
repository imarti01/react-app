import { useScreenWidth } from "../../../../hooks/useScreenWidth";
import { useState } from "react";
import { recipesdata } from "../../../../db";
import { useQuery } from "react-query";
import { getRandomRecipes } from "../../../../api/utils";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CarouselRecipes } from "../CarouselRecipes/CarouselRecipes";

import "./InspireContainer.scss";

export const InspireContainer = () => {
  const [recipes, setRecipes] = useState(recipesdata);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["random"],
  //   queryFn: () => getRandomRecipes(),
  // });

  const showAllRecipes = () => {};

  return (
    <div className="inspire-container">
      <h5 className="inspire-container__text">
        Unlock the Flavors of Your Kitchen
      </h5>
      <h4>GET INSPIRED</h4>
      <CarouselRecipes recipes={recipes} />
      <h5 className="inspire-container__show-more" onClick={showAllRecipes}>
        SHOW ME EVERYTHING <IoMdArrowRoundForward />
      </h5>
    </div>
  );
};
