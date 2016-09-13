import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.options.root = rootPath
// Vue.http.options.emulateJSON = true
// Vue.http.options.xhr = { withCredentials: true }

Vue.filter('date', function (timestamp) {
  var date = new Date(timestamp * 1000)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDate()
  var h = date.getHours()
  var i = date.getMinutes()
  var s = date.getSeconds()
  return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s
})

var router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
  '/hello': {
    component: require('./components/Hello')
  },
  '/posts/list': {
    component: require('./components/post/List')
  },
  '/posts/detail/:post_id': {
    name: 'posts',
    component: require('./components/post/Detail')
  },
  '/posts/create': {
    component: require('./components/post/Detail')
  },

  // '/category/create': {
  //   component: require('./components/category/Detail')
  // },
  // '/category/detail/:category_id': {
  //   component: require('./components/category/Detail')
  // },
  '/category/list': {
    component: require('./components/category/List')
  }
})

Vue.config.debug = true
router.start(App, 'app')
