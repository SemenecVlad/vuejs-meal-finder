<template>
  <div class="p-8 pb-0">
    <BackButton />
  </div>
  <Meals :meals="meals" />
</template>

<script setup lang="ts">
import { ComputedRef, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import BackButton from "../components/BackButton.vue";
import { MealShortItem } from "../model";

const route = useRoute();
const meals: ComputedRef<MealShortItem[]> = computed(
  () => store.state.mealsByIngredient
);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style></style>
