<script setup lang="ts">
import { computed, onMounted } from "vue";
import store from "@store";
import { useRoute } from "vue-router";
import { MealsList, BackButton } from "@components";
import { MealShortItemDto } from "@model/dto";

const route = useRoute();
const meals = computed<MealShortItemDto[]>(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<template>
  <div class="p-8 pb-0">
    <BackButton />
  </div>
  <MealsList :meals="meals" />
</template>
