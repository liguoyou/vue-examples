// element-ui 组件注册
import Vue from 'vue';
import { Button, Select, Message } from 'element-ui';

// Vue.component(Button.name, Button);
Vue.use(Button);
Vue.use(Select);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$message = Message;
