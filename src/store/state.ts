import {
  MealCategory,
  MealFullItem,
  MealIngredient,
  MealShortItem,
} from "../model";

export type State = {
  categories: MealCategory[];
  ingredients: MealIngredient[];
  searchedMeals: MealFullItem[];
  mealsByLetter: MealFullItem[];
  mealsByIngredient: MealShortItem[];
  mealsByCategory: MealShortItem[];
};

const state: State = {
  categories: [],
  ingredients: [],
  searchedMeals: [],
  mealsByLetter: [],
  mealsByIngredient: [],
  mealsByCategory: [],
};

export default state;
