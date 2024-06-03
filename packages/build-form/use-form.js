// 表单属性
export const formProps = {
  modelValue: Object,
  // 字段列表
  fields: Array,

  layout: String,
  size: String,
  // 标签元素布局选项
  labelColProps: Object,
  // 表单控件布局选项
  wrapperColProps: Object,
  labelAlign: String,
  disabled: Boolean,
  rules: Array,
  autoLabelWidth: Boolean,
  // 验证失败后滚动到第一个错误字段
  scrollToFirstError: Boolean,
};

// 表单按扭
export const buttonProps = {
  // 表单按扭，默认第1个为submit按扭，[{label:'搜索',icon:'search'},'重置','其它按钮']
  buttons: Array,
  // 表单按扭a-space参数
  buttonSpace: Object,
  // 表单row参数
  buttonRow: Object,
};

// 字段参数
export const fieldProps = {
  // 相当于name
  field: String,
  // 标签的文本
  label: String,
  // 提示内容
  tooltip: String,
  // 是否隐藏标签
  hideLabel: Boolean,
  // 是否隐藏星号
  hideAsterisk: Boolean,
  // 标签元素布局组件的 style
  labelColStyle: Object,
  // 表单控件布局组件的 style
  wrapperColStyle: Object,
  // 表单项布局选项。参数同"<row>"组件一致
  rowProps: Object,
  // 表单项布局组件的 class
  rowClass: [String, Array, Object],
  // 表单控件包裹层的 class
  contentClass: [String, Array, Object],
  // 内容层是否开启 flex 布局上的额外属性。2.18.0 版本废除
  contentFlex: Boolean,
  // 设置标签"Col"组件的 flex 属性。设置时表单"Col"组件的 flex 属性会被设置为"auto。
  labelColFlex: [Number, String],
  // 是否显示表单控件的反馈图标
  feedback: Boolean,
  // 表单项标签渲染的元素
  labelComponent: String,
  // 表单项元素的属性
  labelAttrs: Object,
};

// grid props
export const rowProps = {
  gutter: {
    type: [Number, Object],
    default: 0,
  },
  justify: String,
  align: String,
  div: Boolean,
  wrap: {
    type: Boolean,
    default: true,
  },
};

// col props
export const colProps = {
  span: Number,
  offset: Number,
  order: Number,
  xs: Number,
  sm: Number,
  md: Number,
  lg: Number,
  xl: Number,
  xxl: Number,
  flex: Number,
};

// 生成表单属性
export function buildAttrs(props, propsConf) {
  const attrs = {};
  Object.keys(propsConf).forEach((key) => {
    if (
      Object.prototype.hasOwnProperty.call(props, key) &&
      props[key] !== undefined
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
/**
 * 格式化选项
 * @param {Array} 选项数据
 * @param {Object} 格式化模板 = {optionKey: newKey, ...}
 */
export function formatOptions(options, format) {
  return options.map((vo) => {
    const item = typeof vo === 'object' ? vo : { label: vo, value: vo };
    if (format) {
      Object.keys(format).forEach((key) => {
        const okey = format[key];
        item[okey] = item[key];
      });
      return item;
    }
    return item;
  });
}

export default null;
