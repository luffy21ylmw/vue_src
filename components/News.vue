<template>
  <div>
    <div class="d4">
      <img src="http://hcdn1.luffycity.com/static/frontend/article/2018/1/head_img/1516609862.8293695.png" alt="">
      <ul>
        <li v-for="item in newsList">
          <router-link :to="{'path':'/news-detail/'+item.id }">
            <div class=""><img :src="item.head_img" alt=""></div>
            <div class="">
              <div>{{item.title}}</div>
              <div>
                <span>{{item.pub_date}}</span>
                <span>阅读{{item.view_num}}</span>
                <span>评论{{item.comment_num}}</span>
                <span>收藏{{item.collect_num}}</span>
              </div>
              <div v-html="item.brief"></div>
              <div><span>#{{item.source.name}}#</span></div>
            </div>
          </router-link>

        </li>
        <hr>

      </ul>
    </div>
    <div class="d3">
      <div>
        <h1>推荐好课</h1>
      </div>
      <div>
        <h1>热门文章</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        newsList: []
      }
    },
    mounted: function () {
      this.initNews()
    },
    methods: {
      initNews: function () {
        var that = this;
        //window.console.log(this);
        this.$axios.request({
          url: 'http://127.0.0.1:8000/news/',
          method: 'GET'
        }).then(function (response) {
          window.console.log(response.data);
          that.newsList = response.data
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .d3 {
    float: left;
  }

  .d4 {
    float: left;
  }

</style>
