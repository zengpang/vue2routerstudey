<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>
      我是传递过来的参数
      <!--通过$route.params.xxx,xxx为传递参数变量名获取传递参数值-->
      {{ $route.params.worldmsg }}
    </h3>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #426ab9;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
