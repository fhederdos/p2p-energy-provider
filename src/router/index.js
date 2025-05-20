import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import UpdateDataView from '../views/UpdateDataView.vue'
import PredictionView from '../views/PredictionView.vue'
import SoldEnergyView from '../views/SoldEnergyView.vue'

const routes = [
  { path: '/', name: 'register', component: RegisterView },
  { path: '/update', name: 'update', component: UpdateDataView },
  { path: '/prediction', name: 'prediction', component: PredictionView },
  { path: '/sold', name: 'sold', component: SoldEnergyView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
