<template>
  <div id="app">
    <div>
      <span>图标 svg-icon 组件</span>
      <svg-icon id="alipay" class="svg-icon-alipay" />
      <svg-icon id="dingding" class="svg-icon-dingding" />
      <svg-icon id="github" class="svg-icon-github" />
      <svg-icon id="taobao" class="svg-icon-taobao" />
    </div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
