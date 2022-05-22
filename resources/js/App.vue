<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mdiGavel } from '@mdi/js'
import menu from '@/menu.js'
import NavBar from '@/components/NavBar.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import Overlay from '@/components/Overlay.vue'
import LoadingIcon from '@/components/LoadingIcon.vue'
import Loader from '@/components/Loader.vue'
import Icon from '@/components/Icon.vue'


const store = useStore()

// store.commit('auth/user', {
//   name: 'John Doe',
//   email: 'john@example.com',
//   avatar: 'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93'
// })

const isAsideLgActive = computed(() => store.state.isAsideLgActive)
const isLoaderActive = computed(() => store.state.isLoaderActive)

const overlayClick = () => {
  store.dispatch('asideLgToggle', false)
}
store.dispatch('setStyle', 'basic')
</script>

<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <router-view />
  <footer-bar />
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
  <loader
    v-show="isLoaderActive"
    z-index="z-30"
  >
  <icon class="animate-ping text-white" :path="mdiGavel" w="w-48" size="100"/>
  </loader>
</template>
