<template>
  <header
    class="shadow h-32 md:h-18 lg:h-24 flex justify-between items-stretch bg-orange-500"
  >
    <router-link class="" :to="{ name: 'home' }">
      <div
        class="inline-flex items-center h-full px-8 text-white font-bold text-2xl lg:text-3xl"
      >
        <img :src="food" alt="logo" class="w-12 h-12 object-contain" />
        <span class="ml-4 hidden sm:block">Meal Finder</span>
      </div>
    </router-link>
    <div class="flex items-center gap-1 pr-8">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full text-white transition-colors hover:bg-white hover:text-orange-500"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full text-white transition-colors hover:bg-white hover:text-orange-500"
        >By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full text-white transition-colors hover:bg-white hover:text-orange-500"
        >By Ingredient</router-link
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import food from "../assets/food.png";
</script>
