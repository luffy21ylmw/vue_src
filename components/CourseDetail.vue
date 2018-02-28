<template>
<div>
  <h4 class="text-center">专题课程</h4>
  <br>
  <h1 class="text-center">{{course_detail.概述.name}}</h1>
  <br>
  <p class="text-center">{{course_detail.概述.slogan}}</p>

  <div>
  <!-- Nav tabs -->
    <div class="row">
      <ul class="nav nav-tabs col-md-6 col-md-offset-3" role="tablist">
        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab"
                                                  data-toggle="tab">课程概述</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">课程章节</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">用户评价</a></li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">常见问题</a></li>
      </ul>
    </div>

  <!-- Tab panes -->
  <div class="tab-content text-center">
    <div role="tabpanel" class="tab-pane active" id="home">
      <h2>课程概述</h2>
      {{course_detail.概述.课程概述}}
      <hr>
      <span>学习时间：{{course_detail.概述.学习时间}}</span>
      <span>难度：{{course_detail.概述.level}}</span>
      <span>已学习人数：0</span>
      <div class="row">
        <div class="col-md-4">
          <h2>为什么要学习这门课程？</h2>
          <br>
          <p>{{course_detail.概述.why_study}}</p>
        </div>
        <div class="col-md-8">
          <ul class="why_study" style="width: 603px; margin-left: 131px; display: flex; margin-top: 15px; margin-bottom: 135px; flex-wrap: wrap" _v-c0db8818=""> <li style="height: 114px; margin-bottom: 70px; margin-right: 49px" _v-c0db8818=""> <div style="width: 50px; height: 50px; display: flex; align-items: center" _v-c0db8818=""> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAaVBMVEUAAAB4xkB4yEF70kp5xz96yEF5xz95x0B6ykF9zER5xz95yEB5xz94xz95yD+IzE14x0B5xz96yEB4xz94x0B5yEF5xz95x0B/yUN5x0B5x0B5x0B5x0B5yUKG20l4xz94x0B6yUB4xj/FJy9OAAAAInRSTlMA2TMQ9D2vlisXx1boznQK77le4oxH02cfpYZ+biMHwJ5NeO2mYAAAAdZJREFUSMeVk+mWqyAQBltF3HeNk5i13v8h72FyJxMZTEL9o7VomvMhDqJiX5UM+fXWyEdkCQYFoJZPpF6h9kUmcv7qNZTTWyOBJHusvvZQvzXaeFUoFMeXxpHyZJVCxauzfSkVi01BGW0rew7u6nYTysjde/Oqa0ZnXVNsKRdiZ71Ay53Y/qFk68DBPRc7CLLVJ0q3cgYx5CSaahUuduJGYfaOuRrtea6G1m00YK5sNKPOaHmi5exUTve9NJFpFcgT3UY0Zi7fo5heKWqdsMSpdPdkanOwaT1wpFTmMFLUdygWRjPQ3op+4myS/FdzkYp5PaeicMRInX6uR85gvY4bf9Jf8NimQiIQiwNW44Xf6OdORWq4hI/VVEEtbxSJB6iWKc3S6RDAEMtbRWKeeR5tUC4lPewwtENQKgzBmD7eQPdXiTtAz2H0k+24zoHLvVVHbyuZhqHO7L5jCXmRFhVaLKVvaWtnlPsAQ9JYSgI6kw1uyfWYiqyURqN6eY2ldJSheCkJw0m8lCNtKl5KqojFT8lZxE+ZqcRPOQ/EnsqMFk9lR+iphOzEUxmpfZWK1FdRiL+SeSipmTzwmiWhE1lgvIWfMV2hF2ku+NCJodd58BmVNi/3H+fMMoVpZ9cnAAAAAElFTkSuQmCC" width="50" height="50" alt="" _v-c0db8818=""> </div> <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px" _v-c0db8818=""> 知名网红讲师精心打造的课程内容 </p> </li> <li style="height: 114px; margin-bottom: 70px" _v-c0db8818=""> <div style="width: 50px; height: 50px; display: flex; align-items: center" _v-c0db8818=""> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAvCAMAAACWqWnGAAAAXVBMVEUAAACI00h5xz96yEF7ykJ6y0N4xz94xz95xz95xz95xkB6xz94xj95xz94xz95yEB4xz95xz95xz94yD95xz94x0B5x0B+zER6yEGAyEZ5xj96x0B6yEN7yUJ4xj/LGz8gAAAAHnRSTlMACW5POiLa0LmjrnXzlJtY6+LFfb+MYxo0EcqEQSrGHzZuAAABiElEQVRIx62VWa6jMBAAvYwds69JIJPU/Y85ZpCisDnm6dUXNCq53YsQexjlbJ5bp4yIw6S8SaMkxQL13SiZ6K9Zdu2ZKL8ZVyDvxvll7HLgGjYqoL2LN/cWqEKGbCCVi0gKjQxf/bL6Li/hEjxgWMcGeBwbd0i30RTuh4oGHYxuuYHcRiXcDrLSytGIHRqc0pvcpLow8Tgoiuei5KKDDZDbti/2lKJvbQ401XJKiqcI8iw+ZycBFzHkxkEyP2ZQiCgKyITnNbmRJPD631wrYxVpp/Ew2+EOL4cRilqcoEYJR3lGKXHCeu0ECity9BlFk/9AOUyscIeJuf1GShj2m+mOiuyVP0dFNnCLV25gpqMaGavIZrrGdEwaq6Rg5iKQyBhFJqDea9C+viuv9mOxOiDRMqRInQDdR08tnvri6dZKN0VrPFYvq9czU6+Vmpl+24vxWaksy4a1Mvigqp7jRvhesV9XVDcrWXHihHT0Sgkm1vkLDtrNDzzseLZG2DlteOes4dGVOOAfHhomfOc4KkgAAAAASUVORK5CYII=" width="50" height="47" alt="" _v-c0db8818=""> </div> <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px" _v-c0db8818=""> 全部课件、笔记、案例下载 </p> </li> <li style="height: 114px; margin-bottom: 70px; margin-right: 49px" _v-c0db8818=""> <div style="width: 50px; height: 50px; display: flex; align-items: center" _v-c0db8818=""> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAclBMVEUAAACK6DOB1yR/1CGA1SF/1SGC1SWB1SKB1iKF3SZ+1CF+1CF/1CF+1CJ+1CF/1CJ+1CF+1CF/1CJ/1CJ/1CF/1SJ+1CF/1SGA1CJ/1SKD1yR+0yGA1SOB1SKC2CiA2Sd+1CF/1SJ+1CF+1SJ/1SJ+0yEF6UlVAAAAJXRSTlMABSvtXaUeTT0RwLb04q9z0s2dl9hmx4p+VSPeRTQYDeaReWyFB8aKzAAAAhFJREFUSMfNldmWqyAQRUE0COI8xIxmOv//ixfpJEa7DOu+9XlwYeEuDlPJ1lSXnP2nUmz+AnLKuQ/heTx7j5Dw7wjPkMwCgVgyWcoXhAiYh6EID+MlHHN/NgfZ11lSbdvXdEJHEEz1E95pvNX0agxt6oCta9cA0I9WyvAWCcA8PAeHV8ChVe/XOAGa4BtxLmDaedaTDcl1YijeKc9BHG/4c2Az3/f4I4VGo55ROCXhSF1hJm8yZhd0rxwtLq9V3Xel1gcAeoxE0K8BSqRMpkDmkiiBHZtJhSlSNfUECZBK67U3wNUayKdzN0HaBUOU9sMaMDf+M1XbtuZKSGINBawFLrBnR+Cqpo0PrX0IatOuuNpnhRvj4X7RJwlfbu20cxYRfS1qClEQb3CpHj2jBLDRdUN03fBYRwIUpLGKRC4X+ziSxo7oSGQz7n9O5lMw6zcjQkuFCxzXCG5AXpobOfj27vasYJT2ML9r6t3NsEO+Zrj+NXczupUQA40EQLwI1eNBURfkbEU90oW1XaYYT9CtF0WN5kxVyi//DVVCyIVbGzqxL1IJoD+gUwQcJoJWLoD7dIeAamA+DRG2b95VGL9yh0xNv8ISRfSUbW65HxGY6+hHDsjDSQfEfqRDPEuw9yPZrMwacD9S4z67qsyvHo/Pw90wvyTS3Zk7DacMEfOLJ5g0/by/M6FOzc/3xZY4L/8AzHEuHxcv3hUAAAAASUVORK5CYII=" width="50" height="50" alt="" _v-c0db8818=""> </div> <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px" _v-c0db8818=""> 加入学习群，和众多小伙伴一起学习 </p> </li> <li style="height: 114px; margin-bottom: 70px" _v-c0db8818=""> <div style="width: 50px; height: 50px; display: flex; align-items: center" _v-c0db8818=""> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAMAAAD8bpkFAAAAclBMVEUAAACN7Td+1CF/1CF+1CF/1CF+1CF+1CF/1CGA1SGE2CeA1SF/1SF+1CF+1CGB1iJ/1CGB1yWC2yh/1CF+1CF/1SKA1SOB1SOD1yd/1CF/1CF/1CJ/1CJ/1CN/1CKB1iOB1iR+1CKA1SKG4St/1SJ+1CFOSTufAAAAJXRSTlMABeiUzN301MSLGaZx+LhD7igTebJlUDkfraCFf19ZMSO9SgtpurtDtQAAAghJREFUOMuNVGmDgiAQlUFQPPDOLtN2e///L66AW7ZhrR8oZnhzvDmCd98+O4QEinRTBf/6hhCIWn7ihxAQHfsIKCKE2X65JF2MaPcBcYJ4fvIVQb1z9N2C/9Uzhev3NqTFzZdc3r6J6uaVd1BbmYNvaBQKvyIUW3kyEXnlF1w2Q96h8zrxW1qUoUeYoHkDybD30VK5+Di/3M10qktc2yF7hRzJnHUMIsS1o5AgUbpuEOkrRMfmTOX8YietPinDKphiOZnLNfYk2BonOJv/Z9Q2/skApbJBiFeIOM5Hj8IVtbevHrYCThteEpflDYnxlZt2ZMRtxJ4SHKwsppm3imzgI44sYBzFOpex4cdT4dqES/M7kdRakuO7AWmxtCQdLdcaIJEjGu0sOWu1imNV/zZqGqZfzrjtpkGW3axjO5GbBJjc6uM7hyN04q51ip1JsKy3x5X0bDQS3w+2aH5d4bQJaQzrGfqHpMqVrfy0tdjK1rAZPg29sIqQ+ScsLPeGNP7smFnSuBeRwtKWq7XUlTvg6D2p66XxST9zaENKPET3EYalP+get8vMD5k4RPG7ONdjVpgL61WZj+v31XBFvlqvBzmtds4sv1xzIBfXlJ+axux9CYgmWa8HWkb0USPWdyqNo9JAKdJ8qP7WJ4bOKubdOJs78EwAZEnAOfjvx8ahUZzz9HD5/PgHpXkhQGDAbxsAAAAASUVORK5CYII=" width="50" height="36" alt="" _v-c0db8818=""> </div> <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px" _v-c0db8818=""> 群导师答疑，减少自学走弯路时间 </p> </li> <li style="height: 114px; margin-bottom: 70px" _v-c0db8818=""> <div style="width: 50px; height: 50px; display: flex; align-items: center" _v-c0db8818=""> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAjCAMAAADR57icAAAAYFBMVEUAAAB+1CGA1SJ+1CKA1SKC1SN/1CKA1CKB1iF+1CGA1iN/1CJ/1SKA1SKB1iN+1CJ+1CJ/1CF+1CGA1CF/1SGC2ySA5TZ/0yF+1CF/1CKA1SKA1SKI3yZ/1CJ/1CKC1CK7Up/CAAAAIHRSTlMA/pzaZTG9mEf0Pa50WinrzMa3o4kXCfDh05BUD4FoHRLq3k0AAADaSURBVDjLtdK7EoIwFIThLOGSGOQuiKC+/1vqymjhOGwa/yrFV5zJrGnxyWdmJ9jiXX1e92DyeToECbcGhORXw/gFTYffHTaoOv4RVn2+14ymW16w8VbkJ8IVFyPKz4QHpArWHeENmXAnDIQFRgEdjoStNaISFeEUFEzAf7zjqmAzEzosCvqekAfsV6Ek7L0RLXCEc6PgFfcn7PV+wsT1tCgVtC2hhxNuREEInATMcHvB2ojSbeHIFbxgJYxaLWHUagmjVksYtVrCqNUS5pkowDALWbKdmqqcYQ/01AoaDrKzcwAAAABJRU5ErkJggg==" width="50" alt="" _v-c0db8818=""> </div> <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px" _v-c0db8818=""> Alex老师精心熬制的心灵洗脑鸡汤，帮你拨云见日看清人生路 </p> </li> </ul>
        </div>
      </div>
      <div>
        <h2>我们将学到哪些内容？</h2>
        <br>
        <div v-html="course_detail.概述.what_to_study_brief"></div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2>此项目如何有助于我们的职业生涯？</h2>
          {{course_detail.概述.career_improvement}}
        </div>
        <div class="col-md-6">
          <h2>课程先修要求</h2>
          {{course_detail.概述.prerequisite}}
          <h2>推荐课程</h2>
          <span>若你缺乏经验，建议学习一下课程</span>

        </div>
      </div>

    </div>
    <div role="tabpanel" class="tab-pane" id="profile">..45.</div>
    <div role="tabpanel" class="tab-pane" id="messages">..21.</div>
    <div role="tabpanel" class="tab-pane" id="settings">...</div>
  </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      course_detail:{}
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
        that.course_detail=response.data
        console.log(that.course_detail)
      })
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .why_study li{
    display: inline-block;
  }

</style>
