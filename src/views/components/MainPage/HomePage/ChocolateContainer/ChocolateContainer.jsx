import { useQuery } from "react-query";
import { getInfoRecipe } from "../../../../../api/utils";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "./ChocolateContainer.scss";

export const ChocolateContainer = () => {
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["643901"],
    queryFn: () => getInfoRecipe("643901"),
  });

  const showInfoRecipe = () => {
    navigate(`/detail/${data.data.id}`);
  };

  return (
    <section className="chocolate-container">
      {error && (
        <h2 className="chocolate-container__error-msg">
          Something happened... {error.message}
        </h2>
      )}
      {!isLoading && data && (
        <div className="chocolate-container__card">
          <div>
            <h4>FOR CHOCOLATE LOVERS</h4>
            <h3>{data.data.title}</h3>
            {data.data.glutenFree && <p>GLUTEN FREE</p>}
            <button onClick={showInfoRecipe}>VIEW RECIPE</button>
          </div>
          {data.data.image ? (
            <img src={data.data.image} alt={data.data.title} />
          ) : (
            <Skeleton height={500} />
          )}
        </div>
      )}
    </section>
  );
};
