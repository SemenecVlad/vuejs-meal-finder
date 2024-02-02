<script setup lang="ts">
const { href } = defineProps({
  href: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <a
    :href="href"
    class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
    target="_blank noopener noreferrer"
  >
    <slot></slot>
  </a>
</template>
