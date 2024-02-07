<script setup lang="ts">
import { auth } from "@/helpers/firebase";
import { foodImg } from "@assets/img";
import { signOut } from "firebase/auth";

const logout = () => {
  console.log("Sign out");
  signOut(auth);
};
</script>

<template>
  <header
    class="shadow h-32 md:h-18 lg:h-24 flex justify-between items-stretch bg-orange-500"
  >
    <router-link class="" :to="{ name: 'home' }">
      <div
        class="inline-flex items-center h-full px-8 text-white font-bold text-2xl lg:text-3xl"
      >
        <img :src="foodImg" alt="logo" class="w-12 h-12 object-contain" />
        <span
          class="ml-4 hidden sm:block"
          style="text-shadow: rgba(0, 0, 0, 0.4) 2px 2px 2px"
          >Meal Finder</span
        >
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
      <div
        @click="logout"
        class="inline-flex items-center px-2 h-full text-white transition-colors hover:bg-red-500 hover:text-white hover:cursor-pointer"
      >
        Logout
      </div>
    </div>
  </header>
</template>
