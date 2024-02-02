<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import store from "@store";
import { MealsList, TitleText } from "@components";
import { MealFullItemDto } from "@model/dto";

const route: RouteLocationNormalizedLoaded = useRoute();
const letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed<MealFullItemDto[]>(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<template>
  <div class="p-8 pb-0">
    <TitleText>Search Meal By Letter:</TitleText>
    <div
      class="grid grid-cols-5 lg:grid-cols-7 xl:flex justify-center gap-4 sm:gap-2 mt-6"
    >
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="flex justify-center items-center text-xl bg-white rounded-full shadow w-10 h-10 md:w-14 md:h-14 lg:w-10 lg:h-10 hover:scale-125 hover:text-white hover:bg-orange-500 transition-allr"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <MealsList :meals="meals" />
</template>
