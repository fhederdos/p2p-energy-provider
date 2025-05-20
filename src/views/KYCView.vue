<template>
  <div class="max-w-md mx-auto mt-8 bg-white shadow rounded p-6">
    <h1 class="text-2xl font-bold mb-4">Neue Transaktion</h1>
    <p v-if="!checked" class="mb-4">Checking KYC...</p>
    <p v-else class="text-green-700 mb-4">✓ KYC verified</p>
    <form @submit.prevent="saveData" v-if="checked" class="space-y-4">
      <div>
        <label class="block mb-1">Z&auml;hlpunktnummer</label>
        <input v-model="meterNumber" required class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block mb-1">Startdatum</label>
        <input type="datetime-local" v-model="startTime" required class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block mb-1">Endzeitpunkt</label>
        <input type="datetime-local" v-model="endTime" required class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block mb-1">Gew&uuml;nschter Preis (in Cent)</label>
        <input type="number" v-model.number="price" required class="w-full border rounded p-2" />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded">Speichern</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const checked = ref(false)
const meterNumber = ref('')
const startTime = ref('')
const endTime = ref('')
const price = ref(0)

onMounted(() => {
  // simulate async kyc check
  setTimeout(() => {
    checked.value = true
  }, 500)
})

function saveData() {
  const now = new Date()
  const start = new Date(startTime.value)
  const end = new Date(endTime.value)

  if (start <= now) {
    alert('Startdatum muss in der Zukunft liegen.')
    return
  }

  if (end <= start) {
    alert('Endzeitpunkt muss nach Startdatum liegen.')
    return
  }

  const req = {
    meterNumber: meterNumber.value,
    startTime: startTime.value,
    endTime: endTime.value,
    price: price.value
  }
  localStorage.setItem('energyRequest', JSON.stringify(req))
  router.push('/prediction')
}
</script>

