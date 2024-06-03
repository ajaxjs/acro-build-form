<template>
    <a-button v-bind="attrs">
      <template v-if="props.icon" #icon>
        <component :is="props.icon" />
      </template>
      {{ props.label }}
      <template v-if="props.icon">
        <component :is="props.icon" />
      </template>
    </a-button>
  </template>
  
  <script setup>
  import { computed, useAttrs, defineProps, defineOptions } from 'vue';
  
  defineOptions({ name: 'a-btn' })
  
  const props = defineProps({
    label: String,
    icon: Object,
    iconRight: Object,
  });
  
  const attrs = computed(() => {
    return {
      ...useAttrs(),
    };
  });
  </script>
  
  <style lang="scss" scoped></style>
  