<template>
  <div>
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex space-x-4">
        <router-link to="/" class="hover:underline">Register</router-link>
        <router-link to="/kyc" class="hover:underline">KYC</router-link>
        <router-link to="/prediction" class="hover:underline">Prediction</router-link>
        <router-link to="/sold" class="hover:underline">Sold Energy</router-link>
      </div>
    </nav>
    <main class="container mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// empty
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
