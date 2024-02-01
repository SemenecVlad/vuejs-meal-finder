<template>
  <div class="p-8 pb-0">
    <BackButton />
    <div class="flex flex-row">
      <Title> Meals by selected category: </Title>
      <span class="text-4xl text-orange-500 font-bold"
        >&nbsp;{{ route.params.category }}</span
      >
    </div>
  </div>
  <Meals :meals="meals" />
</template>

<script setup lang="ts">
import { ComputedRef, computed, onMounted } from "vue";
import store from "../store";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import BackButton from "../components/BackButton.vue";
import Title from "../components/Title.vue";
import { MealShortItem } from "../model";

const route: RouteLocationNormalizedLoaded = useRoute();
const meals: ComputedRef<MealShortItem[]> = computed(
  () => store.state.mealsByCategory
);

onMounted(() => {
  store.dispatch("searchMealsByCategory", route.params.category);
});
</script>
