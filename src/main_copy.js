// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
// import Users from './components/Users'
// import Test from './components/Test'

// Vue.use(VueRouter)
Vue.use(VueResource)
// console.log(__dirname)
// const router = new VueRouter({
//   base: __dirname,
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       components: Users
//       // meta: {
//       //   requiresAuth: true
//       // }
//     },
//     {path: '/test', components: Test}
//   ]
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

/* eslint-disable no-new */
// new Vue({
//   router,
//   template: `
//   <div id="app">
//     <router-link to="/">Users</router-link>
//     <router-link to="/test">Test</router-link>
//     <router-view></router-view>
//   </div>
//   `
// }).$mount('#app')

