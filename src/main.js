// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import rt from './router'

// //引用router
// Vue.use(Router)
Vue.config.productionTip = false //该值必须设置为false

//配置路由
// var rt=new Router({
//   routes:[{
//     path:'/hello',//指定要跳转的路径
//     component:HelloWorld//指定要跳转的组件
//   }]
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:rt,//引入配置好的路由
  components: { App },
  template: '<App/>'
})
