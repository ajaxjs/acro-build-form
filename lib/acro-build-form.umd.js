(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["acro-build-form"] = factory(require("vue"));
	else
		root["acro-build-form"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 907:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// CONCATENATED MODULE: ./packages/build-form/use-form.js
// 表单属性
const formProps = {
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
  scrollToFirstError: Boolean
};

// 表单按扭
const buttonProps = {
  // 表单按扭，默认第1个为submit按扭，[{label:'搜索',icon:'search'},'重置','其它按钮']
  buttons: Array,
  // 表单按扭a-space参数
  buttonSpace: Object,
  // 表单row参数
  buttonRow: Object
};

// 字段参数
const fieldProps = {
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
  labelAttrs: Object
};

// grid props
const rowProps = {
  gutter: {
    type: [Number, Object],
    default: 0
  },
  justify: String,
  align: String,
  div: Boolean,
  wrap: {
    type: Boolean,
    default: true
  }
};

// col props
const colProps = {
  span: Number,
  offset: Number,
  order: Number,
  xs: Number,
  sm: Number,
  md: Number,
  lg: Number,
  xl: Number,
  xxl: Number,
  flex: Number
};

// 生成表单属性
function buildAttrs(props, propsConf) {
  const attrs = {};
  Object.keys(propsConf).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(props, key) && props[key] !== undefined) {
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
function formatOptions(options, format) {
  return options.map(vo => {
    const item = typeof vo === 'object' ? vo : {
      label: vo,
      value: vo
    };
    if (format) {
      Object.keys(format).forEach(key => {
        const okey = format[key];
        item[okey] = item[key];
      });
      return item;
    }
    return item;
  });
}
/* harmony default export */ var use_form = (null);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/build-form/build-input.vue?vue&type=script&setup=true&lang=js



/* harmony default export */ var build_inputvue_type_script_setup_true_lang_js = ({
  __name: 'build-input',
  emits: ['input', 'change'],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    // 属性
    const attrsObj = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.useAttrs)();
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
    const attrs = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      const {
        options,
        type,
        data
      } = attrsObj;
      let extSet = {};
      if (['transfer', 'auto-complete'].includes(type)) {
        extSet.data = formatOptions(data || options || []);
      } else if (type === 'tree-select') {
        // 二级JSON
        extSet.data = options;
      } else if (type === 'avatar') {
        Object.assign(extSet, {
          limit: 1,
          type: 'upload',
          listType: 'picture-card',
          imagePreview: true
        });
      } else if (type === 'color') {
        extSet = Object.assign({
          showText: true
        }, extSet);
      }
      return {
        ...attrsObj,
        ...extSet,
        onInput,
        onChange
      };
    });
    return (_ctx, _cache) => {
      const _component_a_input_number = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-input-number");
      const _component_a_input_tag = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-input-tag");
      const _component_a_radio_group = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-radio-group");
      const _component_a_checkbox_group = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-checkbox-group");
      const _component_a_rate = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-rate");
      const _component_a_select = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-select");
      const _component_a_slider = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-slider");
      const _component_a_switch = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-switch");
      const _component_a_textarea = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-textarea");
      const _component_a_cascader = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-cascader");
      const _component_a_transfer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-transfer");
      const _component_a_time_picker = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-time-picker");
      const _component_a_date_picker = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-date-picker");
      const _component_a_range_picker = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-range-picker");
      const _component_a_tree_select = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-tree-select");
      const _component_a_upload = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-upload");
      const _component_a_color_picker = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-color-picker");
      const _component_a_auto_complete = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-auto-complete");
      const _component_a_input_search = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-input-search");
      const _component_a_input_password = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-input-password");
      const _component_a_input = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-input");
      return attrs.value.type == 'number' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_input_number, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 0
      }, attrs.value)), null, 16)) : attrs.value.type == 'tag' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_input_tag, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 1
      }, attrs.value)), null, 16)) : attrs.value.type == 'radio' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_radio_group, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 2
      }, attrs.value)), null, 16)) : attrs.value.type == 'checkbox' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_checkbox_group, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 3
      }, attrs.value)), null, 16)) : attrs.value.type == 'rate' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_rate, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 4
      }, attrs.value)), null, 16)) : attrs.value.type == 'select' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_select, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 5
      }, attrs.value)), null, 16)) : attrs.value.type == 'slider' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_slider, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 6
      }, attrs.value)), null, 16)) : attrs.value.type == 'switch' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_switch, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 7
      }, attrs.value)), null, 16)) : attrs.value.type == 'textarea' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_textarea, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 8
      }, attrs.value)), null, 16)) : attrs.value.type == 'cascader' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_cascader, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 9
      }, attrs.value)), null, 16)) : attrs.value.type == 'transfer' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_transfer, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 10
      }, attrs.value)), null, 16)) : ['time-range', 'time'].includes(attrs.value.type) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_time_picker, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 11
      }, attrs.value)), null, 16)) : attrs.value.type == 'date' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_date_picker, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 12
      }, attrs.value)), null, 16)) : attrs.value.type == 'range' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_range_picker, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 13
      }, attrs.value)), null, 16)) : attrs.value.type == 'tree-select' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_tree_select, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 14
      }, attrs.value)), null, 16)) : attrs.value.type == 'upload' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_upload, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 15
      }, attrs.value)), null, 16)) : attrs.value.type == 'color' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_color_picker, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 16
      }, attrs.value)), null, 16)) : attrs.value.type == 'auto-complete' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_auto_complete, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 17
      }, attrs.value)), null, 16)) : attrs.value.type == 'search' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_input_search, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 18
      }, attrs.value)), null, 16)) : attrs.value.type == 'password' ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_input_password, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 19
      }, attrs.value)), null, 16)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_input, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 20
      }, attrs.value)), null, 16));
    };
  }
});
;// CONCATENATED MODULE: ./packages/build-form/build-input.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./packages/build-form/build-input.vue



const __exports__ = build_inputvue_type_script_setup_true_lang_js;

/* harmony default export */ var build_input = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/build-form/build-field.vue?vue&type=script&setup=true&lang=js




/* harmony default export */ var build_fieldvue_type_script_setup_true_lang_js = ({
  __name: 'build-field',
  props: {
    ...fieldProps,
    ...colProps
  },
  setup(__props) {
    const props = __props;
    // form-item 属性
    const fieldAttrs = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => buildAttrs(props, fieldProps));
    // col 属性
    const colAttrs = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => buildAttrs(props, colProps));
    return (_ctx, _cache) => {
      const _component_a_form_item = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-form-item");
      const _component_a_col = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-col");
      return Object.keys(colAttrs.value).length ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_col, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 0
      }, colAttrs.value)), {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_a_form_item, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(fieldAttrs.value)), {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(build_input, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(_ctx.$attrs)), null, 16)]),
          _: 1
        }, 16)]),
        _: 1
      }, 16)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_form_item, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        key: 1
      }, fieldAttrs.value)), {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(build_input, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(_ctx.$attrs)), null, 16)]),
        _: 1
      }, 16));
    };
  }
});
;// CONCATENATED MODULE: ./packages/build-form/build-field.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./packages/build-form/build-field.vue



const build_field_exports_ = build_fieldvue_type_script_setup_true_lang_js;

/* harmony default export */ var build_field = (build_field_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/btn/a-btn.vue?vue&type=script&setup=true&lang=js


/* harmony default export */ var a_btnvue_type_script_setup_true_lang_js = (/*#__PURE__*/Object.assign({
  name: 'a-btn'
}, {
  __name: 'a-btn',
  props: {
    label: String,
    icon: Object,
    iconRight: Object
  },
  setup(__props) {
    const props = __props;
    const attrs = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      return {
        ...(0,external_commonjs_vue_commonjs2_vue_root_Vue_.useAttrs)()
      };
    });
    return (_ctx, _cache) => {
      const _component_a_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-button");
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_button, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(attrs.value)), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createSlots)({
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(props.label) + " ", 1), props.icon ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)(props.icon), {
          key: 0
        })) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]),
        _: 2
      }, [props.icon ? {
        name: "icon",
        fn: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)(props.icon)))]),
        key: "0"
      } : undefined]), 1040);
    };
  }
}));
;// CONCATENATED MODULE: ./packages/btn/a-btn.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./packages/btn/a-btn.vue



const a_btn_exports_ = a_btnvue_type_script_setup_true_lang_js;

/* harmony default export */ var a_btn = (a_btn_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/build-form/build-form.vue?vue&type=script&setup=true&lang=js





/* harmony default export */ var build_formvue_type_script_setup_true_lang_js = (/*#__PURE__*/Object.assign({
  name: 'a-build-form'
}, {
  __name: 'build-form',
  props: {
    ...formProps,
    ...buttonProps,
    ...rowProps
  },
  emits: ['update:modelValue'],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    // 表单数据
    const form = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)(props.modelValue || {});

    // 表单属性
    const formAttrs = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      const attrs = {};
      Object.keys(formProps).filter(key => !['modelValue', 'fields'].includes(key)).forEach(key => {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
          attrs[key] = props[key];
        }
      });
      return attrs;
    });
    // 行属性
    const rowAttrs = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => buildAttrs(props, rowProps));
    // 提交按扭
    const btns = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      const btnArr = Array.isArray(props.buttons) ? props.buttons : [];
      return btnArr.map((vo, i) => {
        let btn = vo instanceof Object ? vo : {
          label: vo
        };
        if (i === 0) {
          btn = {
            type: 'primary',
            htmlType: 'submit',
            ...btn
          };
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
      const placeholder = attr.type === 'range' || !attr.label ? null : `请输入${attr.label}`;
      return {
        placeholder,
        ...globalAttrs,
        ...attr,
        modelValue: form[attr.name],
        onInput,
        onChange
      };
    }
    return (_ctx, _cache) => {
      const _component_a_row = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-row");
      const _component_a_space = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-space");
      const _component_a_form_item = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-form-item");
      const _component_a_form = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("a-form");
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_form, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        model: form
      }, formAttrs.value), {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [_ctx.$slots.before ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "before", {
          key: 0
        }) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_a_row, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(rowAttrs.value, {
          class: "row-field"
        }), {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(_ctx.fields, (item, i) => {
            return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(build_field, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
              key: i,
              ref_for: true
            }, fieldAttrs(item, _ctx.$attrs)), null, 16);
          }), 128))]),
          _: 1
        }, 16), btns.value.length ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_a_row, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
          key: 1
        }, _ctx.buttonRow)), {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_a_form_item, null, {
            default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_a_space, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeProps)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.guardReactiveProps)(_ctx.buttonSpace)), {
              default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(btns.value, (btn, i) => {
                return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(a_btn, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
                  key: i,
                  ref_for: true
                }, btn), null, 16);
              }), 128))]),
              _: 1
            }, 16)]),
            _: 1
          })]),
          _: 1
        }, 16)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), _ctx.$slots.after ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "after", {
          key: 2
        }) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]),
        _: 3
      }, 16, ["model"]);
    };
  }
}));
;// CONCATENATED MODULE: ./packages/build-form/build-form.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/build-form/build-form.vue?vue&type=style&index=0&id=411dd2ac&lang=css&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/build-form/build-form.vue?vue&type=style&index=0&id=411dd2ac&lang=css&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(907);
;// CONCATENATED MODULE: ./packages/build-form/build-form.vue



;


const build_form_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(build_formvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-411dd2ac"]])

/* harmony default export */ var build_form = (build_form_exports_);
;// CONCATENATED MODULE: ./packages/build-form/index.js

build_form.install = function (Vue) {
  console.log(build_form.name);
  Vue.component(build_form.name, build_form);
};
/* harmony default export */ var packages_build_form = (build_form);
;// CONCATENATED MODULE: ./packages/btn/index.js

a_btn.install = function (Vue) {
  console.log(a_btn.name);
  Vue.component(a_btn.name, a_btn);
};
/* harmony default export */ var btn = (a_btn);
;// CONCATENATED MODULE: ./packages/index.js



// 把组件保存到一个数组中,可有多个
const components = [btn, packages_build_form];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;
  // 遍历组件列表并注册全局组件
  components.map(component => {
    console.log('----', component.name);
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具备一个 install 方法，才能被 Vue.use() 方法安装
  install,
  // 组件列表
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=acro-build-form.umd.js.map