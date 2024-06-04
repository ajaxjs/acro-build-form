<template>
    <div style="max-width: 640px;margin:auto">
        <a-space>
            <a-btn label="外部设置值1" type="outline" @click="prms.password = '123456'" />
            <a-btn label="外部设置值2" type="outline" @click="prms.password = '123'" />
        </a-space>
        <div style="padding: 10px 0;">{{ prms }}</div>
        <a-card class="q-mx-md">
            <a-build-form v-model="prms" :fields="fields" :buttons="['立即提交', { label: '重置', onClick: onReset }]" />
        </a-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const prms = ref({ username: 'hello' })

// 地址选项演示数据
const addressSet = [
    {
        value: 'beijing',
        label: 'Beijing',
        children: [
            {
                value: 'chaoyang',
                label: 'ChaoYang',
                children: [
                    {
                        value: 'datunli',
                        label: 'Datunli',
                    },
                ],
            },
            {
                value: 'haidian',
                label: 'Haidian',
            },
            {
                value: 'dongcheng',
                label: 'Dongcheng',
            },
            {
                value: 'xicheng',
                label: 'Xicheng',
                children: [
                    {
                        value: 'jinrongjie',
                        label: 'Jinrongjie',
                    },
                    {
                        value: 'tianqiao',
                        label: 'Tianqiao',
                    },
                ],
            },
        ],
    },
    {
        value: 'shanghai',
        label: 'Shanghai',
        children: [
            {
                value: 'huangpu',
                label: 'Huangpu',
            },
        ],
    },
];

// Tree演示数据
const treeData = [
    {
        key: 'k1',
        title: 'key1',
        children: [
            {
                key: 'k11',
                title: 'key11',
            },
            {
                key: 'k12',
                title: 'key12',
            },
        ],
    },
    {
        key: 'k2',
        title: 'key2',
        children: [
            {
                key: 'k21',
                title: 'key21',
            },
            {
                key: 'k22',
                title: 'key22',
            },
        ],
    },
];
// 字段
const fields = [
    { name: 'username', label: '用户名', placeholder: '请输入用户名!' },
    { name: 'password', label: '密码', type: 'password' },
    { type: 'divider', label: '详细资料', orientation: 'center' },
    { name: 'sex', label: '性别', type: 'radio', options: ['男', '女'] },
    { name: 'date', label: '生日', type: 'date' },
    { name: 'avatar', label: '头像', type: 'avatar' },
    { name: 'upload', label: '文件', type: 'upload' },
    {
        name: 'area',
        label: '地区',
        type: 'select',
        options: ['广东', '福建', '浙江'],
    },
    { name: 'address', label: '地址', type: 'cascader', options: addressSet },
    {
        name: 'hobby',
        label: '爱好',
        type: 'checkbox',
        options: ['音乐', '电影', '游戏', '阅读'],
    },
    {
        name: 'number',
        label: '数量',
        type: 'number',
        mode: 'button',
    },
    { name: 'rate', label: '评分', type: 'rate' },
    { name: 'tag', label: '标签', type: 'tag' },
    { name: 'color', label: '颜色', type: 'color' },
    { name: 'slider', label: '滑动条', type: 'slider' },
    { name: 'range', label: '区间条', type: 'slider', range: true },
    { name: 'switch', label: '开关', type: 'switch' },
    { name: 'textarea', label: '备注', type: 'textarea' },
    { name: 'time', label: '时间', type: 'time' },
    {
        name: 'tree',
        label: '树选择',
        type: 'tree-select',
        options: treeData,
    },
    {
        name: 'ac',
        label: '自动完成',
        type: 'auto-complete',
        options: ['Beijing', 'Shanghai', 'Chengdu', 'WuHan'],
    },
];

function onReset() {
    prms.value = {}
}
</script>

<style lang="scss" scoped></style>
