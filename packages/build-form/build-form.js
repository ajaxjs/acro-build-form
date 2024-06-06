import { Form, Button, Space, FormItem } from "@arco-design/web-vue";
import { h, defineComponent } from "vue";
import { formProps, buttonProps, buildAttrs } from './use-form';
import BuildField from '../build-field/build-field.js';

export default defineComponent({
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
    setup(props, { attrs, slots }) {
        // 表单属性
        const formAttrs = buildAttrs(props, formProps);

        // 表单插槽
        function formSlots() {
            // 表单按扭
            const buttons = slots.buttons ? slots.buttons : buildBtns(props, slots);

            return {
                ...slots,
                default: () => [
                    slots.prepend ? slots.prepend() : null,
                    h(BuildField, { ...attrs, fields: props.fields, modelValue: props.modelValue }, slots),
                    slots.append ? slots.append() : null,
                    buttons,
                ]
            }
        }

        return () => h(Form, { ...formAttrs, model: props.modelValue }, formSlots());
    }
})

function buildBtns(props, slots) {
    // 按扭属性
    const { buttons, buttonSpace } = buildAttrs(props, buttonProps);
    const btns = buttons.map((vo, i) => {
        let btnAttrs = typeof vo == 'string' ? { label: vo } : vo;
        if (i === 0) {
            btnAttrs = Object.assign({
                type: 'primary',
                htmlType: 'submit'
            }, btnAttrs);
        }

        return h(Button, btnAttrs, () => btnAttrs.label)
    });
    const btnSpace = h(Space, { align: 'center', ...buttonSpace }, () => [
        btns,
        slots.buttonAppend ? slots.buttonAppend() : null
    ])

    return h(FormItem, {}, () => btnSpace)
}