import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home.vue'
Vue.use(Router)//注册路由

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    // {
    // 	path:''
    // }
  ]
})
