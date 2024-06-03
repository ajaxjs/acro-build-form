import BuildForm from "./build-form.vue";

BuildForm.install = function (Vue) {
    console.log(BuildForm.name)
    Vue.component(BuildForm.name, BuildForm);
};

export default BuildForm;