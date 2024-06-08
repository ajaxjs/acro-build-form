# acro-build-form
注意：本组件依赖 `@arco-design/web-vue` 版本需要升级到`2.55.2`版本以上。

Demo：https://ajaxjs.github.io/acro-build-form/

# 安装 acro-build-form
```
pnpm install acro-build-form
```

```javascript
// 导入插件
import BuildForm from 'acro-build-form';

// 安装插件
app.use(BuildForm);
```

# a-build-input 输入框

更多参数，请参数type对应组件的官方说明：https://arco.design/vue/component/input

### 参数

| 参数          | 类型    | 说明                                                         |
| ------------- | ------- | ------------------------------------------------------------ |
| label         | string  | 输入框标签                                                   |
| type          | string  | 类型：`input(默认)`，`number`，`tag`，`radio`，`checkbox`，`rate`，`select`，`slider`，`switch`，`textarea`，`cascader`，`transfer`，`date`，`range`，`tree-select`，`upload`，`color`，`auto-complete`，`search`，`password`，参数请参考各自组件的说明文档。 |
| slots         | object  | 输入框插槽,请参考各自组件的说明文档。                        |
| options       | array   | `radio`，`checkbox`，等组件专用属性，格式为：['value']或[{label:'名称',value:'值'}] |
| noPlaceholder | boolean | 隐藏默认placeholder                                          |


### Slots 插槽

| 插槽         | 说明       |
| ------------ | ---------- |
| before-input | 输入框之前 |
| after-input  | 输入框之后 |
|              |            |

```vue
<template>
	<a-form>
        <!--默认Input-->
        <a-build-input v-model="title" label="标题" />
        <!--Radio-->
        <a-build-input v-model="color" label="标题" type="radio" :options="['red','blue','orange']" />
    </a-form>
</template>

<script setup>
    import {ref} from 'vue';
    
    const title = ref('');
    const color = ref('');
</script>
```



# a-build-fleld 表单项

### Props 参数

| 参数    | 类型   | 说明                                            |
| ------- | ------ | ----------------------------------------------- |
| v-model | object | 表单值，受控                                    |
| fields  | array  | 表单项，继承`a-build-input`组件及子组件所有参数 |
|         |        |                                                 |


```vue
<template>
	<a-form :model="">
        <q-build-field v-model="params" :fields="formField">
            
            <!-- 字段插槽 input-[字段name]-[插槽类型] -->
            <template #input-imgcode-append>
                <img src="img_code_src" width="100px" height="34px" />
            </template>

            <!-- 表单项插槽 field-[字段name]-[插槽类型] -->
            <template #field-phone-help>
            <span>-帮助信息插槽-</span>
            </template>

    	</q-build-field>
    </a-form>
</template>

<script setup>
    import {ref} from 'vue';
    // 表单数据
    const params = ref({});
    // 发送验证码
    function sendMsgCode() {
        console.log('sendMsgCode');
    }
    // 表单字段
    const formField = [
        { name: 'phone', label: '手机号' },
        { name: 'imgcode', label: '图形验证码' },
        {
            name: 'msgcode', label: '验证码',
            slots: {
                append: () => h(Button, { type: 'primary', onClick: sendMsgCode }, { default: () => '获取验证码' })
            }
        },
        // 分隔线
        { type: 'divider', label: '详细资料', orientation: 'center' },
        
        { name: 'password', label: '密码', type: 'password' },
        { name: 'sex', label: '性别', type: 'radio', options: ['男', '女'] },
        { name: 'born', label: '生日', type: 'date' },
        { name: 'vals', label: '温度', type: 'slider' },
        // 支持带col栅格参数
        { name: 'key1', label: 'key 1', span: 12 },
        { name: 'key2', label: 'key 2', span: 12 },
    ];
</script>
```



# a-build-form 表单

`a-build-form`组件，完全继承`a-build-field`组件的所有参数，外加表单参数：https://arco.design/vue/component/form#API

| 参数        | 类型   | 说明                                                         |
| ----------- | ------ | ------------------------------------------------------------ |
| buttons     | array  | 表单按扭，默认第一个按扭为submit                             |
| buttonSpace | object | 按扭间距，参考space组件参数：https://arco.design/vue/component/space |

### Slots 插槽

| 插槽         | 说明                           |
| ------------ | ------------------------------ |
| form-prepend | 表单项之前，可用于添加额外字段 |
| form-append  | 表单项之后（按扭之前）         |
| default      | 按扭之后                       |

```vue
<template>
	<!-- 默认使用 -->
	<a-build-form v-model="params" :fields="formField" />

	<!-- 可设置表单组件相关参数 -->
	<a-build-form v-model="params" :fields="formField" layout="vertical" />
</template>

<script setup>
    import {ref} from 'vue';
    // 表单数据
    const params = ref({});
    // 表单字段
    const formField = [
        { name: 'phone', label: '手机号' },
        { name: 'imgcode', label: '图形验证码' },
        {
            name: 'msgcode', label: '验证码',
            slots: {
                append: () => h(Button, { type: 'primary', onClick: sendMsgCode }, { default: () => '获取验证码' })
            }
        }
    ];
</script>
```

> 如果未设置栅格参数，默认不使用栅格。



# 使用

```vue
<template>
    <div class="wrapper">
        {{ prms }}
        <a-card class="q-mx-md" style="max-width: 640px;margin:auto">
            <a-build-form v-model="prms" :fields="fields" :buttons="['立即提交',{label:'重置',htmlType:'reset'}]" />
        </a-card>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const prms = ref({})

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
// 字段
const fields = [
    { name: 'username', label: '用户名', placeholder: '请输入用户名!' },
    { name: 'password', label: '密码', type: 'password' },
    { type:'divider', label:'详细资料', orientation:'center' },
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
</script>

```







# Develop

## Example Setup
```
npm install 
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 组件打包
```
npm run lib
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
