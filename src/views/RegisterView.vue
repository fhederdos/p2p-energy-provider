<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label>First Name</label>
        <input v-model="firstName" required />
      </div>
      <div>
        <label>Last Name</label>
        <input v-model="lastName" required />
      </div>
      <div>
        <label>Username</label>
        <input v-model="username" required />
      </div>
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <button type="submit">Register / Login</button>
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

<style scoped>
.register {
  max-width: 400px;
  margin: 2rem auto;
}
.register div {
  margin-bottom: 0.5rem;
}
</style>
