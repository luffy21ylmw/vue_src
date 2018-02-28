<template>
  <div>
    <h1>课程详细页面</h1>
    <h1>{{title}}</h1>
    <h1>{{summary}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title:'',
      summary:'',
    }
  },
  mounted:function () {
    this.initCourseDetail()
  },
  methods:{
    initCourseDetail(){
      var nid = this.$route.params.id
      var that = this
      var url = 'http://127.0.0.1:8000/course/'+nid+'.json'
      this.$axios.request({
        url:url,
        method:'GET',
        responseType: 'json',
      }).then(function (response) {
        that.title = response.data.title
        that.summary = response.data.summary
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
