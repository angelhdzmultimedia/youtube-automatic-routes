import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { router } from './router/router'

loadFonts()

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')
