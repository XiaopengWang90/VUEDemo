import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import home from '@/components/index/Home'
Vue.use(Router)
export default new Router({

  routes: [
  {
    path: '*', //其他页面，强制跳转到登录页面
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    meta: { auth: false },
    component: Index,
    children: [{
      path: '/index',
      name: 'home',
      component: home,
    }]
  }
  ]
})
