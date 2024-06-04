<template>
  <a-form :model="form" v-bind="formAttrs">
    <template v-if="$slots.before">
      <slot name="before"></slot>
    </template>
    <!-- 表单项 -->
    <a-row v-bind="rowAttrs" class="row-field">
      <template v-for="(item, i) in fields" :key="i">
        <!-- 分割线 -->
        <template v-if="item.type == 'divider'">
          <a-divider v-bind="item">{{ item.label }}</a-divider>
        </template>
        <!-- 表单字段 -->
        <BuildField v-else-if="item.name && item.label" v-bind="fieldAttrs(item, $attrs)" />
      </template>
    </a-row>
    <!-- 表单按钮 -->
    <a-row v-if="btns.length" v-bind="buttonRow">
      <a-form-item>
        <a-space v-bind="buttonSpace">
          <ABtn v-for="(btn, i) in btns" :key="i" v-bind="btn" />
        </a-space>
      </a-form-item>
    </a-row>
    <template v-if="$slots.after">
      <slot name="after"></slot>
    </template>
  </a-form>
</template>

<script setup>
import { reactive, computed, defineProps, defineEmits, defineOptions } from 'vue';
import BuildField from './build-field.vue';
import ABtn from '../btn/a-btn.vue';
import { buildAttrs, formProps, buttonProps, rowProps } from './use-form';

defineOptions({ name: 'a-build-form' })

const props = defineProps({
  ...formProps,
  ...buttonProps,
  ...rowProps,
});
const emit = defineEmits(['update:modelValue']);
// 表单数据
const form = reactive(props.modelValue || {});

// 表单属性
const formAttrs = computed(() => {
  const attrs = {};
  Object.keys(formProps)
    .filter((key) => !['modelValue', 'fields'].includes(key))
    .forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        attrs[key] = props[key];
      }
    });
  return attrs;
});
// 行属性
const rowAttrs = computed(() => buildAttrs(props, rowProps));
// 提交按扭
const btns = computed(() => {
  const btnArr = Array.isArray(props.buttons) ? props.buttons : [];
  return btnArr.map((vo, i) => {
    let btn = vo instanceof Object ? vo : { label: vo };
    if (i === 0) {
      btn = { type: 'primary', htmlType: 'submit', ...btn };
    }
    return btn;
  });
});

// onInput事件
function onInput(val, attr, ev) {
  if (attr) {
    form[attr.name] = val;
    emit('update:modelValue', form, ev);
  } else {
    // form-item的onInput
    val.preventDefault();
  }
}
// 兼容input-tag等组件
function onChange(val, attr, ev) {
  // console.log('-----', val, attr, ev)
  if (attr && attr.name) {
    form[attr.name] = val;
    emit('update:modelValue', form, ev);
  }
}
// fieldAttrs
function fieldAttrs(attr, globalAttrs) {
  // 无placeholder
  const noph = ['range','divider'].includes(attr.type);
  const placeholder = noph || !attr.label ? null : `请输入${attr.label}`;
  return {
    placeholder,
    ...globalAttrs,
    ...attr,
    modelValue: form[attr.name],
    onInput,
    onChange,
  };
}
</script>

<style lang="css" scoped>
.arco-form-layout-inline {
  flex-wrap: nowrap;
}

.arco-form-layout-inline .row-field {
  flex: 1 1 auto;
}
</style>
