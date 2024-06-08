(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@arco-design/web-vue"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["@arco-design/web-vue", ], factory);
	else if(typeof exports === 'object')
		exports["acro-build-form"] = factory(require("@arco-design/web-vue"), require("vue"));
	else
		root["acro-build-form"] = factory(root["ArcoDesignVue"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__789__, __WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 789:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__789__;

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

// EXTERNAL MODULE: external {"commonjs":"@arco-design/web-vue","commonjs2":"@arco-design/web-vue","amd":"@arco-design/web-vue","root":"ArcoDesignVue"}
var web_vue_root_ArcoDesignVue_ = __webpack_require__(789);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// CONCATENATED MODULE: ./packages/build-form/use-form.js
// 表单属性
const formProps = {
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
  buttonSpace: Object
};

// 字段参数
const formItemProps = {
  // 表单元素在数据对象中的path（数据项必填）
  field: String,
  // 标签的文本
  label: String,
  // 提示内容
  tooltip: String,
  // 是否显示冒号
  showColon: Boolean,
  // 是否去除样式
  noStyle: Boolean,
  // 是否禁用
  disabled: Boolean,
  // 帮助文案
  help: String,
  // 额外显示的文案
  extra: String,
  // 是否必须填写
  required: Boolean,
  // 可选择将星号置于 label 前/后
  asteriskPosition: String,
  // 表单项校验规则（优先级高于 form 的 rules）
  rules: [Object, Array],
  // 校验状态
  validateStatus: String,
  // 触发校验的事件
  validateTrigger: String,
  // 标签元素布局选项。参数同 `<col>` 组件一致
  labelColProps: Object,
  // 表单控件布局选项。参数同 `<col>` 组件一致
  wrapperColProps: Object,
  // 是否隐藏标签
  hideLabel: Boolean,
  // 是否隐藏星号
  hideAsterisk: Boolean,
  // 标签元素布局组件的 style
  labelColStyle: Object,
  // 表单控件布局组件的 style
  wrapperColStyle: Object,
  // 表单项布局选项。参数同 `<row>` 组件一致
  rowProps: Object,
  // 表单项布局组件的 class
  rowClass: [String, Array, Object],
  // 表单控件包裹层的 class
  contentClass: [String, Array, Object],
  // 内容层是否开启 flex 布局
  contentFlex: Boolean,
  // 设置标签 `Col` 组件的 flex 属性
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

/**
 * 将orgComps中的方法绑定到targetRef，返回方法Map
 * @param {Object}  orgComps 组件对象
 * @param {string}  targetRef 目标组件ref名称
 * @returns 方法Map
 */
function bindMethods(orgComps, targetRef) {
  const methods = {};
  Object.keys(orgComps.methods).forEach(key => {
    methods[key] = function (...args) {
      return this.$refs[targetRef][key](...args);
    };
  });
  return methods;
}
;// CONCATENATED MODULE: ./packages/build-input/build-input.js




/* harmony default export */ var build_input = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "a-build-input",
  props: {
    slots: Object,
    noPlaceholder: Boolean,
    ...formItemProps
  },
  emits: ['update:modelValue'],
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    // 密码是否可见
    const passVisib = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(true);
    return () => {
      let {
        inputSlots,
        fieldSlots
      } = divideSlots(slots, attrs.name);

      /***** 创建输入组件 *****/

      // 输入组件插槽
      inputSlots = Object.assign({}, props.slots, inputSlots);
      const inputType = attrs.type || 'input';
      const {
        label,
        noPlaceholder
      } = props;
      // 输入事件
      function onUpdate(val) {
        emit('update:modelValue', val, {
          label,
          ...attrs
        });
      }
      const inputAttrs = {
        label,
        ...attrs,
        'onUpdate:modelValue': onUpdate
      };
      if (!noPlaceholder && !['range'].includes(inputType) && !inputAttrs.placeholder) {
        inputAttrs.placeholder = `请输入${label}`;
      }
      if (inputType == 'password') {
        inputAttrs.visibility = passVisib.value;
        inputAttrs.type = passVisib.value ? 'password' : 'input';
        inputAttrs.autocomplete = 'current-password';
        inputAttrs['onUpdate:visibility'] = val => passVisib.value = val;
      }
      const inputItem = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(getInputItem(inputType), inputAttrs, inputSlots);

      /***** 表单项组件 *****/

      // 表单项插槽
      fieldSlots = {
        ...fieldSlots,
        default: () => inputItem
      };

      // 表单项属性
      const fieldAttrs = Object.assign({
        field: attrs.name
      }, buildAttrs(props, formItemProps));
      // form-item
      const formItem = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(web_vue_root_ArcoDesignVue_.FormItem, fieldAttrs, fieldSlots);

      // 表单项栅格
      const colAttrs = buildAttrs(attrs, colProps);
      const hasCol = Object.keys(colAttrs).length;
      return hasCol ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(web_vue_root_ArcoDesignVue_.Col, colAttrs, () => formItem) : formItem;
    };
  }
}));

// 获取对应的组件
function getInputItem(type) {
  let inputItem = web_vue_root_ArcoDesignVue_.Input;
  if (type == 'number') {
    inputItem = web_vue_root_ArcoDesignVue_.InputNumber;
  } else if (type == 'tag') {
    inputItem = web_vue_root_ArcoDesignVue_.InputTag;
  } else if (type == 'radio') {
    inputItem = web_vue_root_ArcoDesignVue_.RadioGroup;
  } else if (type == 'checkbox') {
    inputItem = web_vue_root_ArcoDesignVue_.CheckboxGroup;
  } else if (type == 'rate') {
    inputItem = web_vue_root_ArcoDesignVue_.Rate;
  } else if (type == 'select') {
    inputItem = web_vue_root_ArcoDesignVue_.Select;
  } else if (type == 'slider') {
    inputItem = web_vue_root_ArcoDesignVue_.Slider;
  } else if (type == 'switch') {
    inputItem = web_vue_root_ArcoDesignVue_.Switch;
  } else if (type == 'textarea') {
    inputItem = web_vue_root_ArcoDesignVue_.Textarea;
  } else if (type == 'cascader') {
    inputItem = web_vue_root_ArcoDesignVue_.Cascader;
  } else if (type == 'transfer') {
    inputItem = web_vue_root_ArcoDesignVue_.Transfer;
  } else if (['time-range', 'time'].includes(type)) {
    inputItem = web_vue_root_ArcoDesignVue_.TimePicker;
  } else if (type == 'date') {
    inputItem = web_vue_root_ArcoDesignVue_.DatePicker;
  } else if (type == 'range') {
    inputItem = web_vue_root_ArcoDesignVue_.RangePicker;
  } else if (type == 'tree-select') {
    inputItem = web_vue_root_ArcoDesignVue_.TreeSelect;
  } else if (type == 'upload') {
    inputItem = web_vue_root_ArcoDesignVue_.Upload;
  } else if (type == 'color') {
    inputItem = web_vue_root_ArcoDesignVue_.ColorPicker;
  } else if (type == 'auto-complete') {
    inputItem = web_vue_root_ArcoDesignVue_.AutoComplete;
  } else if (type == 'search') {
    inputItem = web_vue_root_ArcoDesignVue_.InputSearch;
  } else if (type == 'password') {
    inputItem = web_vue_root_ArcoDesignVue_.InputPassword;
  }
  return inputItem;
}

/**
 * 区分插槽
 * @param {Object} slots 
 * @param {String} name
 */
function divideSlots(slots, name) {
  const inputSlots = {};
  const fieldSlots = {};
  Object.keys(slots).forEach(key => {
    const slot = slots[key];
    const item = key.match(/(\w+)-(.+)-(.+)/i);
    if (item[1] == 'input' && item[2] == name) {
      inputSlots[item[3]] = slot;
    } else if (item[1] == 'field' && item[2] == name) {
      fieldSlots[item[3]] = slot;
    }
  });
  return {
    inputSlots,
    fieldSlots
  };
}
;// CONCATENATED MODULE: ./packages/build-field/build-field.js


// import { formItemProps, buildAttrs } from './use-form';

/* harmony default export */ var build_field = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "a-build-field",
  props: {
    modelValue: Object,
    fields: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, {
    attrs,
    slots,
    emit
  }) {
    const formValue = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)(props.modelValue || {});
    if (!Array.isArray(props.fields)) {
      console.error('fields is not array');
    }

    // emitValue
    function emitValue(val, attr) {
      formValue[attr.name] = val;
      emit('update:modelValue', formValue, attr);
    }
    return () => {
      const fields = props.fields || [];
      return fields.map(item => {
        // 分隔线
        if (item.type == 'divider') {
          return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(web_vue_root_ArcoDesignVue_.Divider, item, () => item.label);
        }
        const itemAttr = {
          type: item.type || 'input',
          ...attrs,
          ...item,
          modelValue: formValue[item.name],
          'onUpdate:modelValue': emitValue
        };
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(build_input, itemAttr, slots);
      });
    };
  }
}));
;// CONCATENATED MODULE: ./packages/build-form/build-form.js




/* harmony default export */ var build_form = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  name: "a-build-form",
  props: {
    modelValue: Object,
    // 字段列表
    fields: Array,
    // 表单字段
    ...formProps,
    // 表单按扭
    ...buttonProps
  },
  setup(props, {
    attrs,
    slots
  }) {
    // 表单属性
    const formAttrs = buildAttrs(props, formProps);

    // 表单插槽
    function formSlots() {
      // 表单按扭
      const buttons = slots.buttons ? slots.buttons : buildBtns(props, slots);
      return {
        ...slots,
        default: () => [slots.prepend ? slots.prepend() : null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(build_field, {
          ...attrs,
          fields: props.fields,
          modelValue: props.modelValue
        }, slots), slots.append ? slots.append() : null, buttons, slots.default ? slots.default() : null]
      };
    }
    return () => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(web_vue_root_ArcoDesignVue_.Form, {
      ref: 'formRef',
      ...formAttrs,
      model: props.modelValue
    }, formSlots());
  },
  methods: {
    ...bindMethods(web_vue_root_ArcoDesignVue_.Form, 'formRef')
    /*
    resetFields() {
        this.$refs.formRef.resetFields();
        console.log('--resetFields--')
    }
    */
  }
}));
/*
function bindMethods() {
    const methods = {};
    Object.keys(Form.methods).forEach((key) => {
        methods[key] = function (...args) {
            return this.$refs.formRef[key](...args);
        }
    })
    return methods;
}
*/
function buildBtns(props, slots) {
  // 按扭属性
  let {
    buttons,
    buttonSpace
  } = buildAttrs(props, buttonProps);
  if (!buttons || !Array.isArray(buttons)) {
    return null;
  }
  const btns = buttons.map((vo, i) => {
    let btnAttrs = typeof vo == 'string' ? {
      label: vo
    } : vo;
    if (i === 0) {
      btnAttrs = Object.assign({
        type: 'primary',
        htmlType: 'submit'
      }, btnAttrs);
    }
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(web_vue_root_ArcoDesignVue_.Button, btnAttrs, () => btnAttrs.label);
  });
  const btnSpace = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(web_vue_root_ArcoDesignVue_.Space, {
    align: 'center',
    ...buttonSpace
  }, () => [btns, slots.buttonAppend ? slots.buttonAppend() : null]);
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.h)(web_vue_root_ArcoDesignVue_.FormItem, {}, () => btnSpace);
}
;// CONCATENATED MODULE: ./packages/build-form/index.js

build_form.install = function (Vue) {
  console.log(build_form.name);
  Vue.component(build_form.name, build_form);
};
/* harmony default export */ var packages_build_form = (build_form);
;// CONCATENATED MODULE: ./packages/build-field/index.js

build_field.install = function (Vue) {
  console.log(build_field.name);
  Vue.component(build_field.name, build_field);
};
/* harmony default export */ var packages_build_field = (build_field);
;// CONCATENATED MODULE: ./packages/build-input/index.js

build_input.install = function (Vue) {
  console.log(build_input.name);
  Vue.component(build_input.name, build_input);
};
/* harmony default export */ var packages_build_input = (build_input);
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



const __exports__ = a_btnvue_type_script_setup_true_lang_js;

/* harmony default export */ var a_btn = (__exports__);
;// CONCATENATED MODULE: ./packages/btn/index.js

a_btn.install = function (Vue) {
  console.log(a_btn.name);
  Vue.component(a_btn.name, a_btn);
};
/* harmony default export */ var btn = (a_btn);
;// CONCATENATED MODULE: ./packages/index.js





// 把组件保存到一个数组中,可有多个
const components = [btn, packages_build_form, packages_build_field, packages_build_input];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;
  // 遍历组件列表并注册全局组件
  components.map(component => {
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