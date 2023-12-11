import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/Layout"
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
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
    },
    {
      path:"questionPage",
      component:() => import("@/views/QuestionPage"),
      name:"question",
      meta:{
        title:"题目管理"
      }
    },{
      path:"categoryPage",
      component:() => import("@/views/CategoryPage"),
      name:"category",
      meta:{
        title:"分类管理"
      }
    },{
      path:"typePage",
      component:() => import("@/views/TypePage"),
      name:"type",
      meta:{
        title:"题型管理"
      }
    },{
      path:"userPage",
      component:() => import("@/views/UserPage"),
      name:"user",
      meta:{
        title:"用户管理"
      }
    },{
      path:"personalCenterPage",
      component:() => import("@/views/PersonalCenterPage"),
      name:"personal-center",
      meta:{
        title:"个人信息"
      }
    },{
      path:"changePasswordPage",
      component:() => import("@/views/ChangePasswordPage"),
      name:"change-password",
      meta:{
        title:"修改密码"
      }
    },
  ]
  },

  {
    path:'/loginPage',
    name:'login',
    component: () => import("@/views/LoginPage")
  }
]

const router = new VueRouter({
  routes
})

export default router
