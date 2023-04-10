import { ChocolateContainer } from "../ChocolateContainer/ChocolateContainer";
import { ExploreRecipes } from "../ExploreRecipes/ExploreRecipes";
import { InspireContainer } from "../InspireContainer/InspireContainer";

import "./MainContainer.scss";

export const MainContainer = () => {
  return (
    <div className="main-container">
      <InspireContainer />
      <ChocolateContainer />
      <ExploreRecipes />
    </div>
  );
};
