import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
  '/hello': {
    component: require('./components/Hello')
  },
  '/post/list': {
    component: require('./components/post/List')
  }
})

Vue.config.debug = true
router.start(App, 'app')
