// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// /* eslint-disable */
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
// import DataOperation from './components/DataOperation'
// Vue.use(VueRouter)
Vue.use(VueResource)
// var router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/DataOperation', component: DataOperation }
//   ]
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router: router,
  template: '<App/>',
  components: { App }
})
