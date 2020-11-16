import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/svg',
    name: 'SvgPage',
    // 路由级代码拆分
    // 这将为此路由生成一个单独的块（about.[hash].js）
    // 当访问路由时延迟加载
    component: () => import(/* webpackChunkName: "svg" */ '../views/svg/Index.vue'),
  },
  {
    path: '/validator',
    name: 'Validator',
    component: () => import(/* webpackChunkName: "validator" */ '../views/form/Validator.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
