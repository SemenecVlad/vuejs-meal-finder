<template>
  <div class="p-8 pb-0">
    <BackButton />
  </div>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-6xl font-bold mb-4">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category: </strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area: </strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags: </strong>{{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(_, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(_, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <YouTubeButton :href="meal.strYoutube"> Watch on YouTube </YouTubeButton>
      <template v-if="meal.strSource">
        <a
          :href="meal.strSource"
          target="_blank noopener noreferrer"
          class="px-3 py-2 ml-3 rounded border-2 text-white border-purple-600 bg-purple-500 hover:bg-purple-600 transition-colors"
          >View Original Source
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";
import { MealFullItem, MealShortItem } from "../model";
import BackButton from "../components/BackButton.vue";

const meal: Ref<MealFullItem | MealShortItem | any> = ref({});
const route: RouteLocationNormalizedLoaded = useRoute();

onMounted(() => {
  console.log("Meal Details Loading", meal);
  axiosClient
    .get("lookup.php?i=" + route.params.id)
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Meal Details Loaded"));
});
</script>

<style></style>
