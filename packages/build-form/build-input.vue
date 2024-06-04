<template>
  <template v-if="attrs.type == 'number'">
    <a-input-number v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'tag'">
    <a-input-tag v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'radio'">
    <a-radio-group v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'checkbox'">
    <a-checkbox-group v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'rate'">
    <a-rate v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'select'">
    <a-select v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'slider'">
    <a-slider v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'switch'">
    <a-switch v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'textarea'">
    <a-textarea v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'cascader'">
    <a-cascader v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'transfer'">
    <a-transfer v-bind="attrs" />
  </template>
  <template v-else-if="['time-range', 'time'].includes(attrs.type)">
    <a-time-picker v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'date'">
    <a-date-picker v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'range'">
    <a-range-picker v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'tree-select'">
    <a-tree-select v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'upload'">
    <a-upload v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'color'">
    <a-color-picker v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'auto-complete'">
    <a-auto-complete v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'search'">
    <a-input-search v-bind="attrs" />
  </template>
  <template v-else-if="attrs.type == 'password'">
    <a-input-password v-bind="attrs" />
  </template>
  <template v-else>
    <a-input v-bind="attrs" />
  </template>
</template>

<script setup>
  import { computed, useAttrs, defineEmits } from 'vue';
  import { formatOptions } from './use-form';

  const emit = defineEmits(['input', 'change']);
  // 属性
  const attrsObj = useAttrs();
  // onInput事件
  function onInput(val, ev) {
    const isEvent = val instanceof InputEvent || val instanceof Event;
    if (!isEvent && ev) {
      emit('input', val, attrsObj, ev);
    }
  }
  // onChange事件
  function onChange(val, ev) {
    emit('change', val, attrsObj, ev);
  }
  
  const attrs = computed(() => {
    const { options, type, data } = attrsObj;
    let extSet = {};
    if (['transfer', 'auto-complete'].includes(type)) {
      extSet.data = formatOptions(data || options || []);
    } else if (type === 'tree-select') {
      // 二级JSON
      extSet.data = options;
    } else if (type === 'avatar') {
      // 上传功能
      // const autoUpload = 
      Object.assign(extSet, {
        limit: 1,
        type: 'upload',
        listType: 'picture-card',
        imagePreview: true,
      });
    }else if(type === 'color'){
      extSet = Object.assign({
        showText: true
      }, extSet)
    }else if(type === 'password'){
      extSet = Object.assign({
        autocomplete: 'current-password',
      }, extSet)
    }

    return {
      ...attrsObj,
      ...extSet,
      onInput,
      onChange,
    };
  });
</script>

<style lang="scss" scoped></style>
