import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from "@/views/Registration.vue";
import Authorization from "@/views/Authorization.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
    {
    path: '/authorization',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
