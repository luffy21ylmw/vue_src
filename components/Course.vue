<template>

<div style="height: 1000px">
  <!--巨幕-->
 <div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-bottom: 0">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1" class=""></li>
        <li data-target="#myCarousel" data-slide-to="2" class=""></li>
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img class="first-slide" src="../assets/c1.png" alt="First slide">
            <div class="container">
                <div class="carousel-caption">

                </div>
            </div>
        </div>
        <div class="item">
            <img class="second-slide" src="../assets/c2.png" alt="Second slide">
            <div class="container">
                <div class="carousel-caption">

                </div>
            </div>
        </div>
        <div class="item">
            <img class="third-slide" src="../assets/c3.png" alt="Third slide">
            <div class="container">
                <div class="carousel-caption">

                </div>
            </div>
        </div>
    </div>
    <a class="left carousel-control" href="http://v3.bootcss.com/examples/carousel/#myCarousel" role="button"
       data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="http://v3.bootcss.com/examples/carousel/#myCarousel" role="button"
       data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
<!--课程-->
<div>
  <h2 class="text-center">项目实战 你的同行都在学</h2>
  <p class="text-center">更全面的实战案例。更细致的讲解和课后辅导，让你的职业生涯能更轻松的完成进阶</p>
  <hr width="60px" style="color: greenyellow;font-weight: 700">
</div>

<div>
  <p v-for=""></p>
</div>
</div>





</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
