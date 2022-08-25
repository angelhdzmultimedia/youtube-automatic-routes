import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IUser } from '../../models/IUser';
import { router } from '../../router/router';
import avatarUrl from '../../assets/avatar-auth.png';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser>({
    email: null,
    id: null,
    firstName: null,
    permission: null,
    isLoggedIn: false,
    avatar: null,
  })

  async function login(): Promise<void> {
    // Update user here after API request response
    user.value = {
      email: 'angel@gmail.com',
      id: '09asd0asd0923123',
      firstName: 'Angel',
      permission: 4, 
      isLoggedIn: true,
      avatar: avatarUrl,
    }

    // Navigate to index page
    router.replace('/')
  }

  async function logout(): Promise<void> {
    user.value = {
      email: null,
      id: null,
      firstName: null,
      permission: null,
      isLoggedIn: false,
      avatar: null,
    }
    router.replace('/login')
  }

  async function register(): Promise<void> {
    // Simulate API request to register

    // Navigate to login page
    router.replace('/login')
  }

  return {
    user,
    login,
    logout,
    register,
  }
})