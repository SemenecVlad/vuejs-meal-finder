import { Commit } from "vuex/types/index.js";
import axiosClient from "@/axiosClient";

interface ActionsContext {
  commit: Commit;
}

export async function searchMeals(
  { commit }: ActionsContext,
  keyword: string
): Promise<void> {
  try {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    commit("setSearchedMeals", response.data.meals);
  } catch (error) {
    console.error(`searchMeals - ${error}`);
  }
}

export async function searchMealsByLetter(
  { commit }: ActionsContext,
  letter: string
): Promise<void> {
  try {
    const response = await axiosClient.get(`search.php?f=${letter}`);
    commit("setMealsByLetter", response.data.meals);
  } catch (error) {
    console.error(`searchMealsByLetter - ${error}`);
  }
}

export async function searchMealsByIngredient(
  { commit }: ActionsContext,
  ing: string
): Promise<void> {
  try {
    const response = await axiosClient.get(`filter.php?i=${ing}`);
    commit("setMealsByIngredient", response.data.meals);
  } catch (error) {
    console.error(`searchMealsByIngredient - ${error}`);
  }
}

export async function searchMealsByCategory(
  { commit }: ActionsContext,
  category: string
): Promise<void> {
  try {
    const response = await axiosClient.get(`filter.php?c=${category}`);
    commit("setMealsByCategory", response.data.meals);
  } catch (error) {
    console.error(`searchMealsByCategory - ${error}`);
  }
}

export async function getCategories({ commit }: ActionsContext): Promise<void> {
  try {
    const response = await axiosClient.get("categories.php");
    commit("setCategories", response.data.categories);
  } catch (error) {
    console.error(`getCategories - ${error}`);
  }
}

export async function getIngredients({
  commit,
}: ActionsContext): Promise<void> {
  try {
    const response = await axiosClient.get("list.php?i=list");
    commit("setIngredients", response.data.meals);
  } catch (error) {
    console.error(`getIngredients - ${error}`);
  }
}
