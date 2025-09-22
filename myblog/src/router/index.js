import { createRouter as vueCreateRouter, createWebHistory } from 'vue-router'
import routerArr from './router'

export const createRouter = () => {
  const router = vueCreateRouter({
    history: createWebHistory(),
    routes: routerArr
  })
  return router
}
