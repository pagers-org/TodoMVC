import * as vueRouter from 'vue-router';
import TodoMVC from '../components/TodoMVC.vue'

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      component: TodoMVC
    },
    {
      path: '/todomvc',
      component: TodoMVC
    },
    {
      path: '/all',
      component: TodoMVC
    },
    {
      path: '/active',
      component: TodoMVC
    },
    {
      path: '/completed',
      component: TodoMVC
    },
  ]
})

export default router;