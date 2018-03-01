<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" alt="" style="width:30px;height:30px;">
      <router-link to="/" class="item">首页</router-link>
      <router-link to="/course" class="item">课程</router-link>
      <router-link to="/micro" class="item">Luffy学位</router-link>
      <router-link to="/news" class="item">深科技</router-link>
      <router-link to="www.baidu.com" class="item">老男孩</router-link>

     <div>
          <div v-if="this.$store.state.username">
          <a>{{ this.$store.state.username }}</a>
          <a @click="logout">注销</a>
        </div>
          <router-link v-else to="/login">登录</router-link>

        </div>

    </div>
    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'App',
  methods:{
    logout(){
      this.$store.state.username = ''
      this.$store.state.token = ''
    }
  }
}
</script>

<style>
body{margin: 0}
.header {height: 60px;width: 80%;text-align: center;position: relative;background-color: white}
.item{padding-left: 60px;line-height: 60px;}
.header a{text-decoration: none;color: darkgrey}

</style>
