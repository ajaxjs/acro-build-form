# BuildForm组件



## 表单参数

BuildForm组件可传参数如下：

表单参数：https://arco.design/vue/component/form#API

栅格参数：https://arco.design/vue/component/grid#API （row / col）

## 字段参数

| 字段              | 类型                                      | 说明                                                         |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------ |
| v-model           | Object                                    | 双向绑定                                                     |
| fields            | Array                                     | 字段声明，item参数根据类型，参考对应组件文档                 |
| buttons           | Array                                     | 表单按扭，第一个默认为提交按扭，{label:"按扭",icon: IconComponent}，[其它参考](https://arco.design/vue/component/button#API) |
| buttonSpace       | Object                                    | a-space组件参数，[参考文档](https://arco.design/vue/component/space#API) |
| buttonRow         | Object                                    | 表单row参数，[参考](https://arco.design/vue/component/grid#API) |
|                   | **以下为Form参数**                        | [参考文档](https://arco.design/vue/component/form#API)       |
| layout            | 'horizontal' \|  'vertical' \| 'inline'   | 表单的布局方式，包括水平、垂直、多列                         |
| size              | 'mini' \|  'small' \| 'medium' \| 'large' | 表单控件的尺寸                                               |
| label-col-props   | object                                    | 标签元素布局选项。参数同 <col> 组件一致                      |
| wrapper-col-props | object                                    | 表单控件布局选项。参数同 <col> 组件一致                      |
| label-align       | 'left' \|  'right'                        | 标签的对齐方向                                               |
| disabled          | boolean                                   | 是否禁用表单                                                 |
| rules             | Record<string,  FieldRule \| FieldRule[]> | 表单项校验规则                                               |
| auto-label-width  | boolean                                   | 是否开启自动标签宽度，仅在 layout="horizontal" 下生效。      |
| id                | string                                    | 表单控件 id 的前缀                                           |

fields字段参数，参考对应的`数据输入`组件，如Input参考https://arco.design/vue/component/input。

除此之外，还可以叠加col布局组件参数。

```javascript
// 如下面代码中，“性别”和“生日”为同一行
const fields = [
    { name: 'username', label: '用户名', placeholder: '请输入用户名!' },
	{ name: 'sex', label: '性别', type: 'radio', options: ['男', '女'], span:12 },
    { name: 'date', label: '生日', type: 'date', span:12 },
];
```



## 表单布局

注意事项：

1. 使用栅格则`layout=inline`无效。
2. 在fields中设置的栅格参数优先级高于在BuildForm中设置的

```vue
<template>
	<BuildForm v-model="prms" :fields="fields" layout="" span="" />
</template>
<script setup>
import BuildForm from '@/components/json-form/build-form.vue';
const prms = ref({ username: 'hello', range: [20, 60] });
const fields = [
    { name: 'username', label: '用户名', placeholder: '请输入用户名!' },
	{ name: 'sex', label: '性别', type: 'radio', options: ['男', '女'], span:12 },
    { name: 'date', label: '生日', type: 'date', span:12 },
];
</script>
```

> 如果未设置栅格参数，默认不使用栅格。



## DEMO

```vue
<template>
	<BuildForm v-model="prms" :fields="fields" />
</template>

<script setup>
// 引入组件
import BuildForm from '@/components/json-form/build-form.vue';
// 数据
const prms = ref({ username: 'hello', range: [20, 60] });
// 字段
const fields = [
    { name: 'username', label: '用户名', placeholder: '请输入用户名!' },
    { name: 'password', label: '密码', type: 'password' },
    { name: 'sex', label: '性别', type: 'radio', options: ['男', '女'] },
    { name: 'date', label: '生日', type: 'date' },
    { name: 'avatar', label: '头像', type: 'avatar' },
    // 例如上传图片可设置：list-type=picture或picture-card
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
</script>
```

以下为上面代码的选项数据

```javascript
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
```

