<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import avatarUrl from '../assets/avatar-default.png';
const authStore = useAuthStore();
</script>

<template>
   <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>App</v-app-bar-title>
     
        <v-menu >
          <template #activator="{isActive, props}">
               <v-avatar v-bind="props" style="cursor: pointer;" color="white">           
                 <img width="40" height="40" :src="authStore.user.avatar! ?? avatarUrl">
               </v-avatar>
          </template>
               <v-list>
                 <v-list-item v-if="authStore.user.isLoggedIn">
                 <v-btn to="/profile">{{authStore.user.firstName}}</v-btn> 
                 </v-list-item>

                 <v-list-item v-if="authStore.user.isLoggedIn">
                 <v-btn class="bg-blue text-white" @click="authStore.logout">Logout</v-btn> 
                 </v-list-item>

                 <v-list-item v-if="!authStore.user.isLoggedIn">
                  <v-btn class="bg-blue text-white" to="/login">Login</v-btn> 
                 </v-list-item>
               </v-list>
         
        </v-menu>
      
    </v-app-bar>
    <v-main>
      <v-container fluid class="d-flex flex-column align-center justify-center fill-height">
       <router-view :key="$route.path"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>