<template>
    <a-card title="a-btn 按扭" style="margin: 10px;">
        <a-space>
            <a-btn label="普通按钮" />
            <a-btn label="主要按扭" type="primary" />
            <a-btn label="镂空按扭" type="outline" />
            <a-btn label="带图标" type="outline" :icon="IconDelete"></a-btn>
            <a-btn label="设置图标" type="outline" :icon="h(IconDelete, { size: '2em' })"></a-btn>
            <a-btn label="右图标" type="outline" :icon-right="IconCheckCircle"></a-btn>
        </a-space>
        <a-divider>使用 iconfont.cn 项目</a-divider>
        <a-space>
            <a-btn label="右图标" type="outline" :icon="h(IconFont, { type: 'icon-flag', size: '1.5em' })"></a-btn>
            <a-btn label="右图标" type="outline" :icon-right="h(IconFont, { type: 'icon-person' })"></a-btn>
        </a-space>
    </a-card>
</template>

<script setup>
import { h } from 'vue';
import { Icon } from '@arco-design/web-vue';
import { IconDelete, IconCheckCircle } from '@arco-design/web-vue/es/icon';
const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/font_180975_ue66sq60vyd.js' });

</script>

<style lang="scss" scoped></style>