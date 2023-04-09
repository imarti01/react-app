import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoRecipe } from "../../../../api/utils";
import Skeleton from "react-loading-skeleton";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import "./ContainerDetailPage.scss";

export const ContainerDetailPage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["recipeId"],
    queryFn: () => getInfoRecipe(recipeId),
  });

  const navigatePageBefore = () => {
    navigate(-1);
  };

  return (
    <div className="container-detail-page">
      {error && (
        <h2 className="container-detail-page__error-msg">
          Something happened... {error.message}
        </h2>
      )}
      {!isLoading && data && (
        <>
          <IoArrowBackCircleSharp
            className="container-detail-page__back"
            onClick={navigatePageBefore}
          />
          <h2 className="container-detail-page__title">{data.data.title}</h2>
          <section className="container-detail-page__picture-section">
            <div className="container-detail-page__picture-section--img">
              {data.data.image ? (
                <img src={data.data.image} alt={data.data.title} />
              ) : (
                <Skeleton height={500} />
              )}
            </div>
            <div className="container-detail-page__picture-section--detail">
              <div>
                <h6>SERVINGS</h6>
                <p>{data.data.servings}</p>
              </div>
              <div>
                <h6>TIME</h6>
                <p>{data.data.readyInMinutes} Minutes</p>
              </div>
              <div>
                <h6>PRICE/SERVING</h6>
                <p>{data.data.pricePerServing}$</p>
              </div>
            </div>
          </section>
          <section className="container-detail-page__ingredients-section">
            <h3 className="container-detail-page__ingredients-section--title">
              INGREDIENTS
            </h3>
            <ul className="container-detail-page__ingredients-section--ul">
              {data.data.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </section>
          <section className="container-detail-page__instructions-section">
            <h3 className="container-detail-page__instructions-section--title">
              INSTRUCTIONS
            </h3>
            {data.data.analyzedInstructions[0].steps.map((step) => (
              <p key={step.number}>{step.step}</p>
            ))}
          </section>
        </>
      )}
    </div>
  );
};
