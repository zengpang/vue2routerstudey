<template>
    <ul>
        <li>
            <!--通过名称(name)获取指定跳转链接,params对象内写入变量名后接常量，即可将这个常量传入给路由-->
             <!--传递方式有几种，第一种就是params，访问链接为/helloworld/xxx，其中xxx为访问参数-->
            
           <RouterLink :to="{name:'helloworld',params:{worldmsg:'你好世界'}}"> HELLO WORLD</RouterLink>
        </li>
        <li>
               <!--传递方式有几种，第二种就是query，访问链接为/helloworld/?earthmsg=xxx，其中xxx为访问参数，不常用-->
            <RouterLink :to="{name:'helloEarth',query:{earthmsg:'你好地球'}}"> HELLO EARTH</RouterLink>
            
        </li>
    </ul>
</template>
<script>
import { RouterLink } from 'vue-router';//引入路由链接组件

  export default{
    name: "list",
 
}
</script>
<style scoped>
   li{
    margin: 3px;
   }
</style>