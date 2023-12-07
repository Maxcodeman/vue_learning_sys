import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/Layout"
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path:'/',
    component:Layout,
    redirect:"/homePage",
    children:[{
      path:"homePage",
      component:() => import("@/views/HomePage"),
      name:"home",
      meta:{
        title:"首页"
      }
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
