<template>
  <div id="app">
    <h3>相关标签</h3>
    <div class="tags">
      <el-tag
        v-for="item in labels"
        :key="item.label"
        :type="item.type"
        effect="dark"
      >
        {{ item.label }}
      </el-tag>
    </div>

    <div class="logos">
      <img alt="Vue logo" src="./assets/logo.png" width="80px">
      <svg-icon id="element" class="svg-icon-element" style="font-size: 80px;" />
    </div>

    <h3>文档导航</h3>
    <ul>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link type="primary" to="/svg">
          svg
        </router-link>
      </li>
    </ul>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      labels: [
        {
          label: 'Vue',
          type: 'info',
        },
        {
          label: 'Router',
          type: 'warning',
        },
        {
          label: 'Vue',
          type: 'success',
        },
        {
          label: 'Element-ui',
          type: 'danger',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;

  .tags {
    display: flex;
    align-items: center;
    padding: 20px 0;
    .el-tag {
      margin: 5px;
    }
  }

  .logos {
    display: flex;
    align-items: center;
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
