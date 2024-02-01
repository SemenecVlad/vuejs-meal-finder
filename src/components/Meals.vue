<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
    <MealItem :meal="meal" v-for="meal in meals" :key="meal.idMeal" />
    <!-- <pre :meal="meal" v-for="meal in meals" :key="meal.idMeal">{{
      meal.strMeal
    }}</pre> -->
  </div>
  <div v-if="!meals || !meals.length" class="flex justify-center text-gray-600">
    There is no meals
  </div>
</template>

<script setup lang="ts">
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: Object,
});
</script>
