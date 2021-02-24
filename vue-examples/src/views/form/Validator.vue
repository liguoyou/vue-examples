<template>
  <div class="container">
    <el-form ref="form" :model="formData">
      <el-form-item label="价格:" prop="price">
        <el-input
          v-model="formData.price"
          type="text"
          maxlength="17"
          placeholder="只能输入数字、小数点的正数; 最多能输入两位小数"
          @input="handlePriceInput"
        />
      </el-form-item>
      <el-form-item label="正整数:" prop="price">
        <el-input
          v-model="formData.nums"
          type="text"
          maxlength="3"
          placeholder="只能输入正整数; 最多输入3位数"
          @input="(value) => formData.nums = $tools.numberFilter(value)"
        />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">
          确定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Validator',
  data() {
    return {
      formData: {
        price: '',
        nums: '',
      },
    };
  },
  methods: {
    // 价格变化
    handlePriceInput(value) {
      this.formData.price = this.$tools.priceFilter(value);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
