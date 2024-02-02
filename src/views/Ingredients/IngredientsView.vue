<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { TitleText } from "@components";
import store from "@store";
import { MealIngredientDto } from "@model/dto";

const keyword = ref("");
const ingredients = computed(() => store.state.ingredients);
const computedIngredients = computed(() => {
  if (!computedIngredients) {
    return ingredients;
  }
  return ingredients.value.filter(
    (i: MealIngredientDto) =>
      (i.strDescription || "")
        .toLowerCase()
        .includes(keyword.value.toLowerCase()) ||
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function getIngredients(): void {
  store.dispatch("getIngredients");
}

onMounted(() => {
  getIngredients();
});
</script>

<template>
  <div class="p-8">
    <TitleText>Ingredients:</TitleText>
    <input
      type="text"
      class="rounded border-2 bg-white border-gray-200 w-full mb-3"
      placeholder="Search for Ingredients"
      v-model="keyword"
    />
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <router-link
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow hover:sca transition-all"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>
