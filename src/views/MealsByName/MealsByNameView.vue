<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import store from "@store";
import { MealsList } from "@components";
import { MealFullItemDto } from "@model/dto";

const route: RouteLocationNormalizedLoaded = useRoute();
const keyword = ref<string | string[]>("");
const meals = computed<MealFullItemDto[]>(() => store.state.searchedMeals);

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
  <MealsList :meals="meals" />
</template>

<style></style>
