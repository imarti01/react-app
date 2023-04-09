import { types } from "./types/types";

export const recipesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SAVE_INSPIRE_RECIPES:
      return { ...state, recipes: payload };

    default:
      return state;
  }
};
