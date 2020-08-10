<template>
  <div id="app">
    <svg-icon id="alipay" class-name="svg-icon-alipay" />
    <svg-icon id="dingding" class-name="svg-icon-dingding" />
    <svg-icon id="github" class-name="svg-icon-github" />
    <svg-icon id="taobao" class-name="svg-icon-taobao" />
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
