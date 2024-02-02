import {
  MealCategoryDto,
  MealFullItemDto,
  MealIngredientDto,
  MealShortItemDto,
} from "@model/dto";

export type State = {
  categories: MealCategoryDto[];
  ingredients: MealIngredientDto[];
  searchedMeals: MealFullItemDto[];
  mealsByLetter: MealFullItemDto[];
  mealsByIngredient: MealShortItemDto[];
  mealsByCategory: MealShortItemDto[];
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
