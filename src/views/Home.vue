<template>
  <div class="p-8">
    <Title>Categories:</Title>
    <div class="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 gap-5">
      <router-link
        :to="{ name: 'byCategory', params: { category: category.strCategory } }"
        v-for="category of categories"
        :key="category.idCategory"
        class="block bg-white rounded p-3 mb-3 shadow hover:scale-105 transition-all"
      >
        <h3 class="text-2xl font-bold mb-2">{{ category.strCategory }}</h3>
        <img
          :src="category.strCategoryThumb"
          :alt="category.strCategory"
          class="rounded-xl w-full object-fit"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, computed, onMounted } from "vue";
import Title from "../components/Title.vue";
import { MealCategory } from "../model";
import store from "../store";

const categories: ComputedRef<MealCategory[]> = computed(
  () => store.state.categories
);

function getCategories(): void {
  store.dispatch("getCategories");
}

onMounted(() => {
  getCategories();
});
</script>
