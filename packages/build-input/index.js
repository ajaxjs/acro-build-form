import BuildInput from './build-input.js';

BuildInput.install = function (Vue) {
    console.log(BuildInput.name)
    Vue.component(BuildInput.name, BuildInput);
};

export default BuildInput;