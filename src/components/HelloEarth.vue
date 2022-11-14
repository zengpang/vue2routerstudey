<template>
    <div class="hello">
        <h1>
            HELLO EARTH
        </h1>
        
        <h2>
            Essential Links
        </h2>
         <h3>
            我是传递过来的参数
            <!--通过$route.query.xxx,xxx为传递参数变量名获取传递参数值-->
            {{$route.query.earthmsg}}
         </h3>
    </div>
</template>
<style>
  h1,h2{
    color: brown;
  }
</style>
<script>
  export default{
    name:'HelloEarth',
    data(){
        return{
            msg:'欢迎世界'
        }
    }
  }
</script>
