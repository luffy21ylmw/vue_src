import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Course from '@/components/Course'
import Micro from '@/components/Micro'
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
      path: '/micro',
      name: 'micro',
      component: Micro
    },
      {
      path: '/news',
      name: 'news',
      component: News
    }

  ]
})
