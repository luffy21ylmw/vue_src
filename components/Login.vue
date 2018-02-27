<template>
  <div class="Login">
   <h2>登录</h2>
    <p>用户名:<input type="text" v-model="username"></p>
    <p>密&nbsp;&nbsp;&nbsp;码:<input type="password" v-model="password"></p>
    <button @click="islogin">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"",
      password:""
    }
  },
  methods:{
    islogin(){
      var that=this
      this.$axios.request({
        url:'http://127.0.0.1:8000/login/',
        method:'POST',
        data:{
          username:this.username,
          password:this.password
        },
        responseType:'json'
      }).then(function (response) {
        console.log(response)
        // that.$route.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
