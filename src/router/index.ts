import { createRouter, createWebHistory, RouteLocationRaw } from "vue-router";
import { DeafultLayout, GuestLayout } from "@components";
import {
  HomeView,
  MealsByNameView,
  MealsByCategoryView,
  MealsByLetterView,
  IngredientsView,
  MealsByIngredientsView,
  MealDetailsView,
  LoginView,
  RegistrationView,
  ForgotPasswordView,
} from "@views";
import { getCurrentUser } from "vuefire";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/helpers/firebase";

const routes = [
  {
    path: "/",
    component: DeafultLayout,
    meta: { requiresAuth: true },
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
    path: "/auth",
    component: GuestLayout,
    beforeEnter: (
      _: any,
      __: any,
      next: (to?: RouteLocationRaw) => void
    ): void => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // If the user is logged in, redirect to the home page
          next({ name: "home" }); // replace 'Home' with the name of your home route
        } else {
          // If the user is not logged in, allow access to the login page
          console.log("User not logged in");
          next();
        }
      });
    },
    children: [
      {
        path: "login",
        name: "login",
        component: LoginView,
      },
      {
        path: "register",
        name: "register",
        component: RegistrationView,
      },
      {
        path: "forgot-password",
        name: "forgotPassword",
        component: ForgotPasswordView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for
  // the users, others won't
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser();
    console.log("Checking if auth required getting user", currentUser);
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        name: "login",
        query: {
          // we keep the current path in the query so we can
          // redirect to it after login with
          // `router.push(route.query.redirect || '/')`
          redirect: to.fullPath,
        },
      };
    }
  }
});

export default router;
