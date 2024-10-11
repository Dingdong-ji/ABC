<!-- import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/Home/:id',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: 'workbench',
          name: 'workbench',
          component: () => import('@/components/HomeCom/workbench.vue')
        },
        {
          path: 'project',
          name: 'project',
          component: () => import('@/components/HomeCom/project.vue')
        },
        {
          path: 'ai',
          name: 'ai',
          component: () => import('@/components/HomeCom/ai.vue')
        },
        {
          path: 'issues',
          name: 'issues',
          component: () => import('@/components/HomeCom/issues.vue')
        },
        {
          path: 'code',
          name: 'code',
          component: () => import('@/components/HomeCom/code.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('@/components/HomeCom/products.vue')
        },
        {
          path: 'discernment',
          name: 'discernment',
          component: () => import('@/components/HomeCom/discernment.vue')
        },
        {
          path: 'knowledge',
          name: 'knowledge',
          component: () => import('@/components/HomeCom/knowledge.vue')
        },
        {
          path: 'automation',
          name: 'automation',
          component: () => import('@/components/HomeCom/automation.vue')
        }
      ]
    },
  ]
})

export default router -->
