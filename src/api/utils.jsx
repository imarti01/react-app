import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

const API_URL = "https://api.spoonacular.com/recipes";

export const getRandomRecipes = async () => {
  return await axios.get(`${API_URL}/random?number=12&apiKey=${API_KEY}`);
};

export const getRecipesByDiet = async (diet) => {
  return await axios.get(
    `${API_URL}/complexSearch?number=12&apiKey=${API_KEY}&diet=${diet}`
  );
};

export const getRecipesByIngredients = async (ingredient) => {
  return await axios.get(
    `${API_URL}/findByIngredients?number=12&apiKey=${API_KEY}&ingredients=${ingredient}`
  );
};

export const getRecipesByCuisine = async (cuisine) => {
  return await axios.get(
    `${API_URL}/complexSearch?number=3&apiKey=${API_KEY}&cuisine=${cuisine}`
  );
};

export const getInfoRecipe = async (recipeId) => {
  return await axios.get(
    `${API_URL}/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`
  );
};
