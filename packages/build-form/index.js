import BuildForm from './build-form.js';

BuildForm.install = function (Vue) {
    console.log(BuildForm.name)
    Vue.component(BuildForm.name, BuildForm);
};

export default BuildForm;