import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import KYCView from '../views/KYCView.vue'
import PredictionView from '../views/PredictionView.vue'
import SoldEnergyView from '../views/SoldEnergyView.vue'

const routes = [
  { path: '/', name: 'register', component: RegisterView },
  { path: '/kyc', name: 'kyc', component: KYCView },
  { path: '/prediction', name: 'prediction', component: PredictionView },
  { path: '/sold', name: 'sold', component: SoldEnergyView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
