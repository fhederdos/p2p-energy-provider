<template>
  <div class="text-center mt-8">
    <h1 class="text-2xl font-bold mb-4">Predicted Energy Volume</h1>
    <p class="mb-6">For the selected timeframe we predict an energy volume of <strong>{{ volume }} kWh</strong>.</p>
    <button @click="goNext" class="bg-blue-600 text-white py-2 px-4 rounded">Show Sold Energy</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const volume = ref(0)

function predict(start) {
  const hour = new Date(start).getHours()
  if (hour >= 10 && hour < 16) return 8
  if ((hour >= 6 && hour < 10) || (hour >= 16 && hour < 22)) return 3
  return 0
}

onMounted(() => {
  const req = JSON.parse(localStorage.getItem('energyRequest') || '{}')
  if (req.startTime) {
    volume.value = predict(req.startTime)
    req.predictedVolume = volume.value
    localStorage.setItem('energyRequest', JSON.stringify(req))
  }
})

function goNext() {
  router.push('/sold')
}
</script>

