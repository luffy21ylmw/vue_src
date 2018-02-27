<template>
<div>
  <h4 class="text-center">专题课程</h4>




</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  mounted:function () {
    this.initCourseDetail()
  },
  methods:{
    initCourseDetail:function () {
      var that=this
      var course_id=this.$route.params.id
      this.$axios.request({
        url:"http://127.0.0.1:8000/courses/"+course_id+'.json',
        method:"GET",
        responseType:"json"
      }).then(function (response) {

        console.log(response)

      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
