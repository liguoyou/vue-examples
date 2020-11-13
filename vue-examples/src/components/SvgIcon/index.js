// 全局注册组件
import Vue from 'vue';
import SvgIcon from './SvgIcon.vue';
// import './icons/alipay.svg';

// 自动引入 icons 中的所有svg
const req = require.context('./icons', false, /\.svg$/);
req.keys().map((item) => req(item));

Vue.component('svg-icon', SvgIcon);
