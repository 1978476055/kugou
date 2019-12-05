import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
axios.defaults.baseURL="/api/"

Vue.prototype.$axios=axios
Vue.use(Router)

export default new Router({
  routes: [
  ]
})
