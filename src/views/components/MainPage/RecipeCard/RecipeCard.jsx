import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const RecipeCard = ({ recipe, className }) => {
  const { title, image } = recipe;

  return (
    <div className={className}>
      <div>
        {image ? <img src={image} alt={title} /> : <Skeleton height={500} />}
      </div>
      <h4>{title}</h4>
    </div>
  );
};
