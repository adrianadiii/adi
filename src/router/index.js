import Vue from 'vue'
import VueRouter from 'vue-router'
import IntroducereStoc from '../views/IntroducereStoc.vue'
import Alcool from '../components/Alcool'
import Sucuri from '../components/Sucuri'
import Fructe from '../components/Fructe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'introducereStoc',
    component: IntroducereStoc,
    children: [
      {
        path:'alcool',
        component: Alcool
      },
      {
        path:'sucuri',
        component: Sucuri
      },
      {
        path:'fructe',
        component: Fructe
      },
    ]
  },
  {
    path: '/cocktails',
    name: 'cocktails',
    component: () => import('../views/Cocktails.vue')
  },
  {
    path: '/verificareStoc',
    name: 'verificareStoc',
    component: () => import('../views/VerificareStoc.vue')
  },
  {
    path: '/urgent',
    name: 'urgent',
    component: () => import('../views/Urgent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
