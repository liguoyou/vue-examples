<template>
  <div class="home">
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
      <img alt="Vue logo" src="../assets/logo.png" width="80px">
      <svg-icon id="element" class="svg-icon-element" style="font-size: 80px;" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
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
}
</style>
