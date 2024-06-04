<template>
  <HelloWorld msg="acro-build-form"/>
  <FormDemo />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormDemo from './components/FormDemo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FormDemo
  }
}
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
