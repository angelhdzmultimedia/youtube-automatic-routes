<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div>
    <h1>Profile Page</h1>
    Welcome, {{authStore.user.firstName}}
  </div>
</template>

<style scoped>

</style>