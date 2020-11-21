<template>
  <div id="app">
    <!-- <h2>相关标签</h2>
    <div class="tags">
      <el-tag
        v-for="(item, index) in labels"
        :key="'label' + index"
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
      <li v-for="(nav, index) of navs" :key="'nav' + index">
        <el-link :type="nav.type" @click="toRoute(nav.path)">
          {{ nav.text }}
        </el-link>
      </li>
    </ul> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 标签 default info warning success danger
      labels: [
        {
          label: 'Vue',
          type: 'default',
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
      // 导航 default primary success info warning danger
      navs: [
        {
          text: '首页',
          path: '/',
          type: 'default',
        },
        {
          text: 'Svg',
          path: '/svg',
          type: 'success',
        },
        {
          text: 'Validator',
          path: '/validator',
          type: 'info',
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
}
</style>
