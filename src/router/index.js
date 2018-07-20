import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
import vueResource from 'vue-resource'

Vue.use(Router)
Vue.use(vueResource)

const routes = [
  { path: '/goods', component: goods},
  { path: '/ratings', component: ratings},
  { path: '/seller', component: seller}
]
export default new Router({
  linkActiveClass: 'active',
  routes: routes
})
