import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Course from '@/components/Course'
import CourseDetail from '@/components/CourseDetail'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/course-detail/:id',
      name: 'courseDetail',
      component: CourseDetail
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },

  ]
})
