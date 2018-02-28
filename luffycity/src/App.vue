<template>
  <div id="app">
    <div class="header">
      <router-link to="/index">首页</router-link>
      <router-link to="/course">课程</router-link>
      <router-link to="/news">深科技</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  .header{
    background: blue;
    height: 80px;
  }
</style>
