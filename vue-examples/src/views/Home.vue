<template>
  <div class="home">
    <h1>Vue, Element, Router, Vuex</h1>
    <div class="logos">
      <img alt="Vue logo" src="../assets/logo.png" width="100px">
      <svg-icon id="element" class="svg-icon-element" />
      <svg-icon id="dingding" class="svg-icon-dingding" />
      <svg-icon id="alipay" class="svg-icon-alipay" />
      <svg-icon id="github" class="svg-icon-github" />
      <svg-icon id="taobao" class="svg-icon-taobao" />
    </div>
    <h3>文档导航</h3>
    <ul>
      <li>
        <el-button type="primary">
          vue-examples
        </el-button>
      </li>
      <li>
        <el-button type="primary">
          mi-video
        </el-button>
      </li>
      <li>
        <el-button type="primary">
          webpack-examples
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
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
}

</style>
