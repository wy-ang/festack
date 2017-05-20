import Vue from 'vue'  /* 这里是引入vue文件 */
import App from './App' /* 这里是引入同目录下的App.vue模块 */
import router from './router' /* 这里是引入vue的路由 */
import VueResource from 'vue-resource' /* 这里是引入vue的数据请求插件(相当于js的ajax) */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(ElementUI);

/* eslint-disable no-new */
/*new Vue({
  el: '#app', //定义作用范围就是index.html里的id为app的范围内 
  router, // 引入路由 
  template: '<App/>',  // 给Vue实例初始一个App组件作为template 相当于默认组件 
  components: { App }  //注册引入的组件App.vue 
})*/

new Vue({
  router, // 引入路由 
  render: h => h(App)
}).$mount('#app'); //创建和挂载根实例