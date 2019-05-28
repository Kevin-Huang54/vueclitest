import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import Home from './components/Home.vue'
import Dishes from './components/Dishes/Dishes'
import Order from './components/Order'
import Manage from './components/Manage'
import About from './components/About/About'
import Login from './components/Login'
import Register from './components/Register'
// 二级路由
import Intro from './components/About/Intro'
import Join from './components/About/Join'
import Contact from './components/About/Contact'
import Cold from './components/Dishes/Cold'
import Hot from './components/Dishes/Hot'
import Soup from './components/Dishes/Soup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/home', component: Home },
    { path: '/dishes',
      component: Dishes,
      redirect: '/dishes/cold', // 默认显示的页面
      children: [
        { path: 'cold', component: Cold },
        { path: 'hot', component: Hot },
        { path: 'soup', component: Soup }
      ]
    },
    { path: '/order', component: Order },
    { path: '/manage', component: Manage },
    { path: '/about',
      component: About,
      redirect: '/about/intro', // 默认显示的页面
      children: [
        { path: 'intro', component: Intro },
        { path: 'join', component: Join },
        { path: 'contact', component: Contact }
      ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})
