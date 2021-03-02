<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="title-box">
      <text class="title">{{ title }}</text>
    </view>
    <u-button type="primary">主要按钮</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    };
  },
  onLoad() {
    console.log('this.$u.config.v', this.$u.config.v);
    const a = 12;
    if (a === 4) {
      console.log('3', 3);
    }
  },
  methods: {
    aa(data) {
      data.aa = 2;
    },
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title-box {
  overflow: hidden;
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
}
</style>
