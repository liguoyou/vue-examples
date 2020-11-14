// 全局注册组件
import Vue from 'vue';
import SvgIcon from './SvgIcon.vue';

// 自动引入 svgs 中的所有 svg
const req = require.context('@/assets/svgs', false, /\.svg$/);
req.keys().map((item) => req(item));

Vue.component('svg-icon', SvgIcon);
