<template>
    <a-card title="行内表单">
        <a-build-form v-model="searchPrms" v-bind="formProps" span="12" />
    </a-card>
</template>

<script setup>
    import {ref} from 'vue';

    const searchPrms = ref({});
    // 字段
    const fields = [
        {name:'date_range',type:'range',label:'日期范围'},
        {name:'date',type:'select',label:'类型', options:[
            {label:'标题',value:'title'},
            {label:'名称',value:'name'},
            {label:'简介',value:'intro'},
        ]},
        {name:'keyword',type:'text',label:'关键字'},
    ];
    // 表单配置
    const formProps = {
        fields,
        buttons: ['搜索','重置'],
        buttonSpace:{
            direction: 'vertical'
        },
        // 栅格
        span: 12,
        // 布局
        layout:'inline'
    }
</script>

<style lang="scss" scoped>

</style>