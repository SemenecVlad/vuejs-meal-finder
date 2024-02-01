<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      class="rounded border-2 bg-white border-gray-200 w-full"
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>

<script setup lang="ts">
import { ComputedRef, Ref, computed, onMounted, ref } from "vue";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";
import { MealFullItem } from "../model";

const route: RouteLocationNormalizedLoaded = useRoute();
const keyword: Ref<string | string[]> = ref("");
const meals: ComputedRef<MealFullItem[]> = computed(
  () => store.state.searchedMeals
);

function searchMeals(): void {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style></style>
