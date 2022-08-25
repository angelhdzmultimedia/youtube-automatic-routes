<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="d-flex flex-column align-center justify-center">
    <h1>Index Page</h1>
    <span>First Name: {{authStore.user.firstName}}</span>
    <span>Email: {{authStore.user.email}}</span>
    <span>ID: {{authStore.user.id}}</span>
    <span>Permission: {{authStore.user.permission}}</span>
  </div>
</template>

<style scoped>
</style>