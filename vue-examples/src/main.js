import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// element-ui 组件全局注册
import './utils/init-element-ui';
// svg 组件全局注册
import '@/components/SvgIcon/index';
// 工具库
import Tools from './utils/tools';

Vue.config.productionTip = false;
// 全局挂载工具库
Vue.use(Tools);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
