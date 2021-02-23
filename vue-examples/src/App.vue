<template>
  <div id="app">
    <h3>示例导航</h3>
    <ul>
      <li v-for="(nav, index) of navs" :key="'nav' + index">
        <el-link :type="nav.type" @click="toRoute(nav.path)">
          {{ nav.text }}
        </el-link>
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
      // 导航 primary success info warning danger
      navs: [
        {
          text: '相关标签',
          path: '/',
          type: 'info',
        },
        {
          text: 'Svg 图标',
          path: '/svg',
          type: 'success',
        },
        {
          text: '校验与限制',
          path: '/validator',
          type: 'primary',
        },
      ],
    };
  },

  methods: {
    // 跳转路由
    toRoute(path) {
      if (path === this.$route.path) return;
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
html,body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
  height: 2000px;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
