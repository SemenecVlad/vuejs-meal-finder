<template>
  <div class="p-8 pb-0">
    <Title>Search Meal By Letter:</Title>
    <div class="flex justify-center gap-4 mt-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="text-xl bg-white rounded-full shadow w-10 h-10 flex justify-center items-center hover:scale-125 hover:text-white hover:bg-orange-500 transition-allr"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <Meals :meals="meals" />
</template>

<script setup lang="ts">
import { ComputedRef, computed, onMounted, watch } from "vue";
import store from "../store";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import Title from "../components/Title.vue";
import { MealFullItem } from "../model";

const route: RouteLocationNormalizedLoaded = useRoute();
const letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals: ComputedRef<MealFullItem[]> = computed(
  () => store.state.mealsByLetter
);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style></style>
