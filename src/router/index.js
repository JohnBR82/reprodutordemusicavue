import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/InicioVisualizador.vue'
import SearchView from '../views/VisualizadorDeBusca.vue'
import LibraryView from '../views/Biblioteca.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/search',
      component: SearchView
    },
    {
      path: '/library',
      component: LibraryView
    }
  ]
})

export default router