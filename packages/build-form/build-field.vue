<template>
  <!-- 栅格布局 -->
  <a-col v-if="Object.keys(colAttrs).length" v-bind="colAttrs">
    <a-form-item v-bind="fieldAttrs">
      <buildInput v-bind="$attrs" />
    </a-form-item>
  </a-col>
  <!-- 无栅格 -->
  <a-form-item v-else v-bind="fieldAttrs">
    <buildInput v-bind="$attrs" />
  </a-form-item>
</template>

<script setup>
  import { computed, defineProps } from 'vue';
  import buildInput from './build-input.vue';
  import { fieldProps, colProps, buildAttrs } from './use-form';

  const props = defineProps({
    ...fieldProps,
    ...colProps,
  });
  // form-item 属性
  const fieldAttrs = computed(() => buildAttrs(props, fieldProps));
  // col 属性
  const colAttrs = computed(() => buildAttrs(props, colProps));
</script>

<style lang="scss" scoped></style>
