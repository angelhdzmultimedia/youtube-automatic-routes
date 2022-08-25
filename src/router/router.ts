import {createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw} from 'vue-router'
import { useAuthStore } from '../stores/auth';

function createRoutes(modules: any, requiresAuth: boolean = false): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  for (const path in modules) {
    // Get the index number of the last instance of a backlash
    const pathLastSlugIndex: number = path.lastIndexOf('/');
    // Get the last slug. Strips the backlash away and gets the path name as "file.vue".
    const pathLastSlug: string = path.substring(pathLastSlugIndex + 1);
    // This is OK.
    //console.log(`[PATH LAST SLUG]: ${pathLastSlug}`)
    // Strip the .vue file format away. We end with "index" or "login" or "register".
    const pathName: string = pathLastSlug.replace('.vue', '');
    
    //console.log(`[PATH NAME]: ${pathName}`);
    routes.push({
      // If the path name is index, we replace to the single backlash as default route.
      path: pathName === 'index' ? '/' : `/${pathName}`,
      component: () => modules[path](),
      meta: {
        requiresAuth,
      }
    })
  }
  return routes;
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        // Public Routes
        ...createRoutes(import.meta.glob('../pages/public/*.vue')),
        // Private Routes (Require Auth)
        ...createRoutes(import.meta.glob('../pages/private/*.vue'), true)
      ]
    }
  ]
});


// Navigation guard

router.beforeResolve((to: RouteLocationNormalized) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.user.isLoggedIn && to.path !== '/login') {
    // Redirect to login page
    return '/login';
  }
});

