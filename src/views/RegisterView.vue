<template>
  <div class="max-w-md mx-auto mt-8 bg-white shadow rounded p-6">
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <form @submit.prevent="register" class="space-y-4">
      <div>
        <label class="block mb-1">First Name</label>
        <input v-model="firstName" required class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block mb-1">Last Name</label>
        <input v-model="lastName" required class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block mb-1">Username</label>
        <input v-model="username" required class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" required class="w-full border rounded p-2" />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded">Register / Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const username = ref('')
const email = ref('')

function register() {
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    email: email.value
  }
  localStorage.setItem('user', JSON.stringify(user))
  router.push('/kyc')
}
</script>

