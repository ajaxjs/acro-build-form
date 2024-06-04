<template>
  <div class="hello" style="max-width: 640px;margin:auto; text-align: center">
    <h1>{{ msg }}</h1>
    <p>
      欢迎使用 acro-build-form 组件，可以快速构建表单，配置项详见 <a href="https://www.arco.design/vue/docs/form" target="_blank" rel="noopener">arco-design-vue</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
