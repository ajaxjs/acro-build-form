<template>
  <div style="max-width: 750px;margin:auto">
    <a-space direction="vertical" fill>
      <HelloWorld msg="acro-build-form" />
      <ButtonIcon />
      <FormLogin />
      <FormInline />
      <FormDemo />
    </a-space>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ButtonIcon from './components/ButtonIcon.vue'
import FormLogin from './components/FormLogin.vue'
import FormDemo from './components/FormDemo.vue'
import FormInline from './components/FormInline.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
