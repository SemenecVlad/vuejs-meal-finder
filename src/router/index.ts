import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByNameVue from "../views/MealsByName.vue";
import MealsByLetterVue from "../views/MealsByLetter.vue";
import MealsByIngredientsVue from "../views/MealsByIngredients.vue";
import DeafultLayoutVue from "../components/DeafultLayout.vue";
import GuestLayoutVue from "../components/GuestLayout.vue";
import MealDetailsVue from "../views/MealDetails.vue";
import IngredientsVue from "../views/Ingredients.vue";
import MealsByCategoryVue from "../views/MealsByCategory.vue";

const routes = [
  {
    path: "/",
    component: DeafultLayoutVue,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByNameVue,
      },
      {
        path: "/by-category/:category?",
        name: "byCategory",
        component: MealsByCategoryVue,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetterVue,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: IngredientsVue,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredientsVue,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetailsVue,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayoutVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
