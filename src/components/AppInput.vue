<template>
  <input
    v-bind="$props"
    class="rounded border-2 bg-white border-gray-200 w-full mb-3 focus:border-gray-200 focus:outline-none focus:ring-0"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
});
</script>
