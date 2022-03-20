import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { darkModeKey, styleKey } from '@/config.js'
import { useToast, useModal } from 'tailvue'

import '../css/app.css'

require('@/bootstrap')
window.Vue = require('vue').default;
const $toast = useToast()
axios.defaults.withCredentials = true;
/* Fetch sample data */
store.dispatch('fetch', 'clients')
store.dispatch('fetch', 'history')

/* App style */
store.dispatch('setStyle', localStorage[styleKey] ?? 'basic')

/* Dark mode */
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1') {
  store.dispatch('darkMode', true)
}

/* Default title tag */
const defaultDocumentTitle = 'Law Firm'

/* Collapse mobile aside menu on route change */
router.beforeEach(to => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)
})

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  /* Full screen mode */
  store.dispatch('fullScreenToggle', !!to.meta.fullScreen)
})


/*
 Axios Interceptors
 */
 const UNAUTHORIZED = 401;
 axios.interceptors.response.use(
   response => response,
   error => {
     const {status} = error.response;
     if (status === UNAUTHORIZED) {
        $toast.show({type: 'info',message: 'Your Login Session was expired, please Login!'});
        store.commit('auth/setUser', null);
        store.commit('auth/user', null);
        router.push({ name:'login' })
     }
     return Promise.reject(error);
  }
 );

createApp(App)
.use(store)
.use(router)
.mount('#app')
