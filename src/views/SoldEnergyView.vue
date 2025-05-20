<template>
  <div class="sold">
    <h1>Energy Sold</h1>
    <table>
      <thead>
        <tr>
          <th>Buyer</th>
          <th>Volume (kWh)</th>
          <th>Price (&euro;)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sale, i) in sales" :key="i">
          <td>{{ sale.buyer }}</td>
          <td>{{ sale.volume }}</td>
          <td>{{ sale.price }}</td>
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

<style scoped>
.sold {
  max-width: 500px;
  margin: 2rem auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
</style>
