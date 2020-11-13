import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// element-ui 组件全局注册
import './utils/init-element-ui';
// svg 组件全局注册
import '@/components/SvgIcon/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
