import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginVue.vue'
import UserSelect from '../views/UserSelectVue.vue'
import Home from '../views/Home.vue'
import Music from '../views/Music.vue'
import TvShows from '../views/TvShows.vue'

const routes = [
  {
    path: '/',
    name: 'Login-vue',
    component: Login
  },
  { 
    path: '/UserSelect',
    name: 'TheUsersView', 
    component: UserSelect,
    props: true
  },
  {
    path: '/Home',
    name: 'UserHome',
    component: Home,
    props: true
  },
  {
    path: '/Music',
    name: 'TheMusicView',
    component: Music,
    props: true
  },
  {
    path: '/TvShows',
    name: 'TheTvView',
    component: TvShows,
    props: true
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
