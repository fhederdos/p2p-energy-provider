<template>
  <div class="max-w-xl mx-auto mt-8">
    <h1 class="text-2xl font-bold mb-4">Energy Sold</h1>
    <table class="min-w-full bg-white shadow rounded">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-2 text-left">Buyer</th>
          <th class="px-4 py-2 text-left">Volume (kWh)</th>
          <th class="px-4 py-2 text-left">Price (&euro;)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sale, i) in sales" :key="i" class="border-t">
          <td class="px-4 py-2">{{ sale.buyer }}</td>
          <td class="px-4 py-2">{{ sale.volume }}</td>
          <td class="px-4 py-2">{{ sale.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sales = ref([])

onMounted(() => {
  // mock data for demo
  const req = JSON.parse(localStorage.getItem('energyRequest') || '{}')
  sales.value = [
    { buyer: 'Consumer A', volume: req.predictedVolume || 0, price: req.price || 0 },
    { buyer: 'Consumer B', volume: 2, price: req.price || 0 },
  ]
})
</script>

