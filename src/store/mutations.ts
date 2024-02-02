import {
  MealCategoryDto,
  MealFullItemDto,
  MealIngredientDto,
  MealShortItemDto,
} from "@model/dto";
import { State } from "./state";

export function setSearchedMeals(state: State, meals: MealFullItemDto[]): void {
  state.searchedMeals = meals;
}

export function setMealsByLetter(state: State, meals: MealFullItemDto[]): void {
  state.mealsByLetter = meals;
}

export function setMealsByIngredient(
  state: State,
  meals: MealShortItemDto[]
): void {
  state.mealsByIngredient = meals;
}

export function setMealsByCategory(
  state: State,
  meals: MealShortItemDto[]
): void {
  state.mealsByCategory = meals;
}

export function setCategories(
  state: State,
  categories: MealCategoryDto[]
): void {
  state.categories = categories;
}

export function setIngredients(
  state: State,
  ingredients: MealIngredientDto[]
): void {
  state.ingredients = ingredients;
}
