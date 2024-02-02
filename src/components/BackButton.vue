<script setup lang="ts">
import { useNavigation } from "@helpers/useNavigation";

const { goBack } = useNavigation();
</script>

<template>
  <div
    class="text-orange-500 underline hover:cursor-pointer mb-2"
    @click="goBack"
  >
    Go back
  </div>
</template>
