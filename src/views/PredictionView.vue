<template>
  <div class="prediction">
    <h1>Predicted Energy Volume</h1>
    <p>For the {{ period }} timeframe we predict an energy volume of <strong>{{ volume }} kWh</strong>.</p>
    <button @click="goNext">Show Sold Energy</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const volume = ref(0)
const period = ref('')

function predict(start) {
  const hour = new Date(start).getHours()
  if (hour >= 6 && hour < 10) {
    period.value = 'morning'
    return 3
  }
  if (hour >= 10 && hour < 16) {
    period.value = 'daytime'
    return 8
  }
  if (hour >= 16 && hour < 22) {
    period.value = 'evening'
    return 4
  }
  period.value = 'night'
  return 0
}

onMounted(() => {
  const req = JSON.parse(localStorage.getItem('energyRequest') || '{}')
  if (req.startTime) {
    volume.value = predict(req.startTime)
    req.predictedVolume = volume.value
    req.predictedPeriod = period.value
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
