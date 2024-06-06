import BuildField from './build-field.js';

BuildField.install = function (Vue) {
    console.log(BuildField.name)
    Vue.component(BuildField.name, BuildField);
};

export default BuildField;