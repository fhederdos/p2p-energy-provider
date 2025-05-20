<template>
  <div class="kyc">
    <h1>KYC Verification</h1>
    <p v-if="!checked">Checking KYC...</p>
    <p v-else>✓ KYC verified</p>
    <form @submit.prevent="saveData" v-if="checked">
      <div>
        <label>Z&auml;hlpunktnummer</label>
        <input v-model="meterNumber" required />
      </div>
      <div>
        <label>Startzeitpunkt</label>
        <input type="datetime-local" v-model="startTime" required />
      </div>
      <div>
        <label>Endzeitpunkt</label>
        <input type="datetime-local" v-model="endTime" required />
      </div>
      <div>
        <label>Gew&uuml;nschter Preis</label>
        <input type="number" v-model.number="price" required />
      </div>
      <button type="submit">Continue</button>
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

<style scoped>
.kyc {
  max-width: 400px;
  margin: 2rem auto;
}
.kyc div {
  margin-bottom: 0.5rem;
}
</style>
