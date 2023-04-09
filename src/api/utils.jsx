import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_KEY2 = import.meta.env.VITE_REACT_APP_API_KEY2;

const API_URL = "https://api.spoonacular.com/recipes";

export const getRandomRecipes = async () => {
  return await axios.get(`${API_URL}/random?number=12&apiKey=${API_KEY2}`);
};

export const getRecipesByDiet = async (diet) => {
  return await axios.get(
    `${API_URL}/complexSearch?number=12&apiKey=${API_KEY2}&diet=${diet}`
  );
};

export const getRecipesByIngredients = async (ingredient) => {
  return await axios.get(
    `${API_URL}/findByIngredients?number=12&apiKey=${API_KEY2}&ingredients=${ingredient}`
  );
};

export const getInfoRecipe = async (recipeId) => {
  return await axios.get(
    `${API_URL}/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY2}`
  );
};
