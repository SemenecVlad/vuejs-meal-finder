import {
  MealCategory,
  MealFullItem,
  MealIngredient,
  MealShortItem,
} from "../model";
import { State } from "./state";

export function setSearchedMeals(state: State, meals: MealFullItem[]): void {
  state.searchedMeals = meals;
}

export function setMealsByLetter(state: State, meals: MealFullItem[]): void {
  state.mealsByLetter = meals;
}

export function setMealsByIngredient(
  state: State,
  meals: MealShortItem[]
): void {
  state.mealsByIngredient = meals;
}

export function setMealsByCategory(state: State, meals: MealShortItem[]): void {
  state.mealsByCategory = meals;
}

export function setCategories(state: State, categories: MealCategory[]): void {
  state.categories = categories;
}

export function setIngredients(
  state: State,
  ingredients: MealIngredient[]
): void {
  state.ingredients = ingredients;
}
