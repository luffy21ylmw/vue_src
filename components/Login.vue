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
  name: 'HelloWorld',
  data () {
    return {
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
        
         that.$store.commit('saveToken',response.data)
        
         // 重定向到index
        
         console.log(response.data.code)
        
         if (response.data.code == 1001){
         
           that.$router.push('/login')
         
         }
       
         else{
            
             that.$router.push('/helloworld')
        
         }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
