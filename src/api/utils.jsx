import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL = "https://api.spoonacular.com/recipes";

export const getRandomRecipes = async () => {
  return await axios.get(`${API_URL}/random?number=20&apiKey=${API_KEY}`);
};
