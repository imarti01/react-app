import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe, className }) => {
  const { title, image, id } = recipe;

  const navigate = useNavigate();

  const showInfoRecipe = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={className} onClick={showInfoRecipe}>
      <div>
        {image ? <img src={image} alt={title} /> : <Skeleton height={500} />}
      </div>
      <h4>{title}</h4>
    </div>
  );
};
