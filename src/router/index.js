import Vue from 'vue'
import Router from 'vue-router'
import VueAMap from 'vue-amap'
import VideoPlayer from 'vue-video-player'

const Home = resolve => require(['@/pages/main/Home'], resolve)
const index = resolve => require(['@/pages/main/index'], resolve)
const MapIndex = resolve => require(['@/components/map/map'], resolve)
const line = resolve => require(['@/components/map/line'], resolve)
const image = resolve => require(['@/pages/process/ImageList'], resolve)

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '7aee2579a0658fc44426b6d31397bb37',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch','Geocoder','AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(Router)
const router =  new Router({
  mode: 'history',
  routes: [
    {

      path: '/',
      redirect: 'home',
      component: index,
      children: [
        {path: 'home', name: 'Home', component: Home, meta: {title: '行人检测首页'}},
        {path: 'map', name: 'map', component: MapIndex, meta: {title: '地图'}},
        {path: 'image', name: 'image', component: image, meta: {title: '图片'}},
        {path: 'line', name: 'line', component: line, meta: {title: '轨迹'}},
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   if (Store.state.user.token && to.name === 'login') {
//     next({name: 'posts'})
//   } else if (!Store.state.user.token && to.meta.requireAuth) {
//     next({name: 'login'})
//   } else {
//     next()
//   }
// })

export default router
