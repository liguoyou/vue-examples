<template>
  <div class="container">
    <el-form>
      <el-form-item
        ref="form"
        :model="formData"
        :rules="formRules"
        label="价格校验:"
        prop="price"
      >
        <el-input
          v-model="formData.price"
          placeholder="只能输入数字、小数点, 并且最大值不能超过99999.99的数值; 最多能输入两位小数"
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
      },
      formRules: {
        price: [],
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
