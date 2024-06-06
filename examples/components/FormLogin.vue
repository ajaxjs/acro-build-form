<template>

    <a-card title="a-build-input 输入" style="margin: 10px;">
        <div style="padding: 10px;">单独使用a-build-input组件：{{ titleVal }}</div>
        <a-form :model="{titleVal}">
            <a-build-input v-model="titleVal" label="标题" name="标题" />
        </a-form>
    </a-card>

    <a-card title="a-build-field 字段" style="margin: 10px;">
        <div style="padding: 10px;">
            <div>需自行嵌套a-build-form，如表单项中带有栅格参数，外屋需要a-row</div>
            <div>a-build-field组件：{{ prms }}</div>
        </div>

        <a-form :model="prms">
            <!-- 直接使用build-field，外层需要a-form, 否则会报warn-->
            <a-row>
                <!-- build-field的fields表单项中带有栅格参数，外屋需要a-row -->
                <a-build-field v-model="prms" :fields="fields" row-class="test-xxx">

                    <!-- 字段插槽 input-[字段name]-[插槽类型] -->
                    <template #input-imgcode-append>
                        <img :src="imgcode" width="100px" height="34px" />
                    </template>

                    <!-- 表单项插槽 field-[字段name]-[插槽类型] -->
                    <template #field-phone-help>
                        <span>-帮助信息插槽-</span>
                    </template>

                </a-build-field>
            </a-row>
        </a-form>
    </a-card>

    <a-card title="a-build-form 表单" style="margin: 10px;">
        <div style="padding: 10px;">
            <div>a-build-form组件：{{ formValue }}</div>
        </div>
        <a-build-form v-model="formValue" :fields="formFields" :buttons="['立即登录',{label:'忘记密码'}]" />
    </a-card>
    
</template>

<script setup>
import { h, ref, reactive } from 'vue';
import { Button } from '@arco-design/web-vue';

const prms = ref({});
const titleVal = ref();

const imgcode = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA+BAMAAACcvUmpAAAAG1BMVEXz+/44Qkfb4+eVnqJPWV2stbnEzNB+h4tmcHSgo71NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACf0lEQVRYhe1WsW7bMBBVaUv22FfTNUelMZCMcZAho9myqEa7CIKMdpG2HusgH2A1QuvP7lGNbImkIUYJMukNhnWk9O7u3aMUBC1atGjR4lUQ+25kF58bUrCJ8NwZ3QNxM5JL4MxrY5gK360mrrjEOy8OBUi+acJxo+/867NTUh1ZNmzAcUp1iNSn0yFlMxqjifJrpPwa+FW/MwIe4k6j6UqRzOjHRxSZbA4vXlsRdrf7O8dDECz51oPkRpIe7NI5XmP8MUM97Fj6GenRS7GoJ+lCkKcwcq1NIEyWI/CCJdJ60IRt6kk6wI+Uu+0oIc1a1uC7WkiPK9rxvp6EQaUQ4DMHv0IKXh2KE3pqUcsSW+0UH1EuJNWh1NReeYNE11KV64TM8VgLiZJqpzjyM7Gkm8QcDjtOMDwmEoN+RaFB/o/pOr5aG1zoA1/iLri9om8/lpaw2S73NcSZTqWeJIKakfx8YS50EnoY6WJ041SoQuoxzmk8uaonCTI5DQKuzIRpuJPHnzKYFDwuLr4F+QnrcYZrPdi9fTzMtUvY2mgGSfJxfxVuyM0+opAdo7W0OyuhyCWsmmaIrFRalA5vYavmQAdKW8z0VJi7xHT8XGtdyo+GnO/bdxhMSZp9y435A8x+d6oV53YVHj75f1SIhRklqbS931aC26w6bHYah3AEMbI4CpdMy7ExN84y6t65Fwcd34PYCoYZpRgmlTyZlEb/+/uTvw7fHbEutpZLbjP529j2wZfDCTrS7qgbg1IohPD6NnkKCfW/+gafgHt8NTwFPT2cVUlW+PSyHEHwk2yGJC6HVouXJslfgoP6bc9l8fzSfSaL683fokWLFi1avBL+Aen0Z+mri0x2AAAAAElFTkSuQmCC';

function sendMsgCode() {
    console.log('sendMsgCode');
}

const fields = [
    { name: 'phone', label: '手机号' },
    { name: 'imgcode', label: '图形验证码' },
    {
        name: 'msgcode', label: '验证码',
        slots: {
            append: () => h(Button, { type: 'primary', onClick: sendMsgCode }, { default: () => '获取验证码' })
        }
    },
    { type: 'divider', label: '详细资料', orientation: 'center' },
    { name: 'password', label: '密码', type: 'password' },
    { name: 'sex', label: '性别', type: 'radio', options: ['男', '女'] },
    { name: 'born', label: '生日', type: 'date' },
    { name: 'vals', label: '温度', type: 'slider' },
    { name: 'key1', label: 'key 1', span: 12 },
    { name: 'key2', label: 'key 2', span: 12 },
];

const formValue = reactive({});
const formFields = [
    { name: 'phone', label: '手机号' },
    {
        name: 'imgcode', label: '图形验证码',
        slots: {
            append: () => h('img', { src: imgcode, width: '100px', height: '34px' })
        }
    },
    {
        name: 'msgcode', label: '验证码',
        slots: {
            append: () => h(Button, { type: 'primary', onClick: sendMsgCode }, { default: () => '获取验证码' })
        }
    },
];

</script>

<style lang="scss" scoped></style>