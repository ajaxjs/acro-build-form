import { h, ref, defineComponent } from "vue";
import { FormItem, InputNumber, InputTag, RadioGroup, CheckboxGroup, Rate, Select, Slider, Switch, Textarea, Cascader, Transfer, TimePicker, DatePicker, RangePicker, TreeSelect, Upload, ColorPicker, AutoComplete, InputSearch, InputPassword, Input } from '@arco-design/web-vue';
import { Col } from '@arco-design/web-vue';
import { formItemProps, colProps, buildAttrs } from '../build-form/use-form';

export default defineComponent({
    name: "a-build-input",
    props: {
        slots: Object,
        noPlaceholder: Boolean,
        ...formItemProps,
    },
    emits: ['update:modelValue'],
    setup(props, { attrs, emit, slots }) {
        // 密码是否可见
        const passVisib = ref(true);

        return () => {
            let { inputSlots, fieldSlots } = divideSlots(slots, attrs.name);

            /***** 创建输入组件 *****/

            // 输入组件插槽
            inputSlots = Object.assign({}, props.slots, inputSlots);
            const inputType = attrs.type || 'input';
            const { label, noPlaceholder } = props;
            // 输入事件
            function onUpdate(val) {
                emit('update:modelValue', val, { label, ...attrs })
            }
            const inputAttrs = { label, ...attrs, 'onUpdate:modelValue': onUpdate };
            if (!noPlaceholder && !['range'].includes(inputType)) {
                inputAttrs.placeholder = `请输入${label}`;
            }
            if (inputType == 'password') {
                inputAttrs.visibility = passVisib.value;
                inputAttrs.type = passVisib.value ? 'password': 'input';
                inputAttrs.autocomplete = 'current-password';
                inputAttrs['onUpdate:visibility'] = (val) => passVisib.value = val
            }
            const inputItem = h(getInputItem(inputType), inputAttrs, inputSlots);

            /***** 表单项组件 *****/

            // 表单项插槽
            fieldSlots = { ...fieldSlots, default: () => inputItem }

            // 表单项属性
            const fieldAttrs = Object.assign({
                field: attrs.name
            }, buildAttrs(props, formItemProps));
            // form-item
            const formItem = h(FormItem, fieldAttrs, fieldSlots);

            // 表单项栅格
            const colAttrs = buildAttrs(attrs, colProps);
            const hasCol = Object.keys(colAttrs).length;

            return hasCol ? h(Col, colAttrs, () => formItem) : formItem;
        }
    }
});

// 获取对应的组件
function getInputItem(type) {
    let inputItem = Input;
    if (type == 'number') {
        inputItem = InputNumber
    } else if (type == 'tag') {
        inputItem = InputTag
    } else if (type == 'radio') {
        inputItem = RadioGroup
    } else if (type == 'checkbox') {
        inputItem = CheckboxGroup
    } else if (type == 'rate') {
        inputItem = Rate
    } else if (type == 'select') {
        inputItem = Select
    } else if (type == 'slider') {
        inputItem = Slider
    } else if (type == 'switch') {
        inputItem = Switch
    } else if (type == 'textarea') {
        inputItem = Textarea
    } else if (type == 'cascader') {
        inputItem = Cascader
    } else if (type == 'transfer') {
        inputItem = Transfer
    } else if (['time-range', 'time'].includes(type)) {
        inputItem = TimePicker
    } else if (type == 'date') {
        inputItem = DatePicker
    } else if (type == 'range') {
        inputItem = RangePicker
    } else if (type == 'tree-select') {
        inputItem = TreeSelect
    } else if (type == 'upload') {
        inputItem = Upload
    } else if (type == 'color') {
        inputItem = ColorPicker
    } else if (type == 'auto-complete') {
        inputItem = AutoComplete
    } else if (type == 'search') {
        inputItem = InputSearch
    } else if (type == 'password') {
        inputItem = InputPassword
    }
    return inputItem
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
            inputSlots[item[3]] = slot
        } else if (item[1] == 'field' && item[2] == name) {
            fieldSlots[item[3]] = slot
        }
    })
    return { inputSlots, fieldSlots }
}