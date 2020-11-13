<template>
  <svg class="svg-icon" aria-hidden="true" v-bind="$attrs" v-on="$listeners">
    <use :xlink:href="iconId" />
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconId() {
      return `#icon-${this.id}`;
    },
  },
};
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 28px;
}
</style>
