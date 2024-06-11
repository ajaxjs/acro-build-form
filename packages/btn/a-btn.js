import { h, defineComponent } from "vue";
import { Button } from "@arco-design/web-vue";

export default defineComponent({
    name: "a-btn",
    props: {
        label: String,
        icon: Object,
        iconRight: Object,

    },
    setup(props, { attrs, slots }) {

        return () => {
            const defaultSlot = slots.default ? slots.default() : null;
            slots.default = () => [
                props.icon ? buildIcon(props.icon) : null,
                props.label ? props.label : null,
                defaultSlot ? defaultSlot() : null,
                props.iconRight ? buildIcon(props.iconRight) : null
            ];
            return h(Button, attrs, slots);
        }
    }
})

function buildIcon(icon) {
    if(typeof icon !== 'object') return null;
    if (icon.__v_isVNode) {
        return icon;
    } else if (icon.render && typeof icon.render === 'function') {
        return h(icon, { size: '1.1em' });
    }
}