export const RecipeCard = ({ recipe, className }) => {
  const { title, image } = recipe;

  return (
    <div className={className}>
      <div>
        <img src={image} alt={title} />
      </div>
      <h4>{title}</h4>
    </div>
  );
};
