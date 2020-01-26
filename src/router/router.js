import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../layouts/about.vue'
import notes from '../layouts/notes.vue'
import lifes from '../layouts/lifes.vue'
import notelist from '../layouts/notelist.vue'
import lifelist from '../layouts/lifelist.vue'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: about },
    { path: '/about', component: about },
    { path: '/notelist', component: notelist },
    { path: '/lifelist', component: lifelist },
    { path: '/lifelist/:year/:month/:day/:name', component: lifes },
    { path: '/notes/:year/:month/:day/:name', component: notes }
  ]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  
  export default router