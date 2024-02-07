<template>
  <input
    :type="type"
    class="rounded border-2 bg-white border-gray-200 w-full mb-3 focus:border-gray-200 focus:outline-none focus:ring-0"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
  },
};
</script>
