<template>
  <div class="prediction">
    <h1>Predicted Energy Volume</h1>
    <p>For the selected timeframe we predict an energy volume of <strong>{{ volume }} kWh</strong>.</p>
    <button @click="goNext">Show Sold Energy</button>
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

<style scoped>
.prediction {
  text-align: center;
  margin-top: 2rem;
}
</style>
