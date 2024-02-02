import { createRouter, createWebHistory } from "vue-router";
import { DeafultLayout, GuestLayout } from "@components";
import {
  HomeView,
  MealsByNameView,
  MealsByCategoryView,
  MealsByLetterView,
  IngredientsView,
  MealsByIngredientsView,
  MealDetailsView,
} from "@views";

const routes = [
  {
    path: "/",
    component: DeafultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByNameView,
      },
      {
        path: "/by-category/:category?",
        name: "byCategory",
        component: MealsByCategoryView,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetterView,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: IngredientsView,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredientsView,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetailsView,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
