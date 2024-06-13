import { h, reactive, defineComponent } from "vue";
import { Divider } from "@arco-design/web-vue";
// import { formItemProps, buildAttrs } from './use-form';
import BuildInput from '../build-input/build-input.js';

export default defineComponent({
    name: "acro-build-field",
    props: {
        modelValue: Object,
        fields: {
            type: Array,
            required: true
        }
    },
    emits: ['update:modelValue'],
    setup(props, { attrs, slots, emit }) {
        const formValue = reactive(props.modelValue || {});
        if(!Array.isArray(props.fields)){
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
                    return h(Divider, item, () => item.label);
                }

                const itemAttr = {
                    type: item.type || 'input',
                    ...attrs,
                    ...item,
                    modelValue: formValue[item.name],
                    'onUpdate:modelValue': emitValue
                }
                return h(BuildInput, itemAttr, slots);
            })
        }
    }
})
