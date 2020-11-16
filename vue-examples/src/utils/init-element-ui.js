// element-ui 组件注册
import Vue from 'vue';
import {
  Button, Select, Message, Tag, Link, Form, FormItem, Input,
} from 'element-ui';

// Vue.component(Button.name, Button);
Vue.use(Button);
Vue.use(Select);
Vue.use(Tag);
Vue.use(Link);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$message = Message;
