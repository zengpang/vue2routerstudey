import Router from 'vue-router';
import Vue from "vue";
import HelloWorld from '../components/HelloWorld';
import HelloEarth from '../components/HelloEarth';
//引用router
Vue.use(Router)
//配置路由
export default new Router({
  routes:[{
    name:'helloworld',
    path:'/hello:worldmsg',//指定要跳转的路径
    component:HelloWorld //指定要跳转的组件
  },
  {
    name:'helloEarth',
    path:'/earth',//指定要跳转的路径
    props:(route)=>({
      query:route.query.earthmsg //query传递参数注册格式，query:route.query.xxx,其中xxx为传递参数变量名 
    }),
    component:HelloEarth //指定要跳转的组件
  }]
})