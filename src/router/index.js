
import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import TurmasView from '../views/TurmasView.vue'
import AlunosView from '../views/AlunosView.vue'
import NotasView from '../views/NotasView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/alunos',
    name: 'alunos',
    component: AlunosView
  },
  {
    path: '/turmas',
    name: 'turmas',
    component: TurmasView
  },
  {
    path: '/notas',
    name: 'notas',
    component: NotasView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
