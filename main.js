import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
// import store from './store'
Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

// 默认跳转到home页
router.push('/home')

// 全局守卫，所有页面都要跳转到登录页
// router.beforeEach((to, from, next) => {
//   var needNotLogin = ['/login', '/register']
//   if (needNotLogin.includes(to.path)) {
//     next() // 如果点击的是登录页面，则直接跳转
//   } else {
//     alert('请登录')
//     next('/login') // 其余页面都跳转到登录页面
//   }
// })
