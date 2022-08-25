<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <v-container fluid class="d-flex flex-column align-center justify-center fill-height">
    <h1>Register</h1>
    <v-btn class="bg-blue text-white" @click="authStore.register">Register</v-btn>
    <div>
       Already have an account?
      <v-btn to="/login">Login</v-btn>
    </div>
  </v-container>
</template>

<style scoped>

</style>