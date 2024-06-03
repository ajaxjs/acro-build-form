import ABtn from "./a-btn.vue";

ABtn.install = function (Vue) {
    console.log(ABtn.name)
    Vue.component(ABtn.name, ABtn);
};

export default ABtn;