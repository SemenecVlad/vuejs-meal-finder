<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quidem,
        aperiam quia cumque tempora unde aliquid laboriosam
      </p>
      <div
        class="flex flex-col lg:flex-row items-start lg:items-center justify-start"
      >
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
        <a
          :href="meal.strSource"
          target="_blank noopener noreferrer"
          class="px-3 py-2 mt-2 lg:mt-0 lg:ml-2 rounded border-2 text-white border-green-300 bg-green-300 hover:bg-green-300 transition-colors"
          >Source</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import YouTubeButton from "./YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
