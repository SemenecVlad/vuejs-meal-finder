<script setup lang="ts">
import { computed, onMounted } from "vue";
import store from "@store";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import { MealsList, BackButton, TitleText } from "@components";
import { MealShortItemDto } from "@model/dto";

const route: RouteLocationNormalizedLoaded = useRoute();
const meals = computed<MealShortItemDto[]>(() => store.state.mealsByCategory);

onMounted(() => {
  store.dispatch("searchMealsByCategory", route.params.category);
});
</script>

<template>
  <div class="p-8 pb-0">
    <BackButton />
    <div class="flex flex-row">
      <TitleText> Meals by selected category: </TitleText>
      <span class="text-4xl text-orange-500 font-bold"
        >&nbsp;{{ route.params.category }}</span
      >
    </div>
  </div>
  <MealsList :meals="meals" />
</template>
