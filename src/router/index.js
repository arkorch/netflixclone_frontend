import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginVue.vue'
import UserSelect from '../views/UserSelectVue.vue'
import Home from '../views/Home.vue'

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
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
