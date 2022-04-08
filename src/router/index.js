import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginVue.vue'
import UserSelect from '../views/UserSelectVue.vue'

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
    params: true
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
