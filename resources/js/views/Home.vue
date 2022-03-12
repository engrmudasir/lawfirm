<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { sectionBgLogin } from '@/colors.js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
// import JbLogo from '@/components/JbLogo.vue'



const store = useStore()
const router = useRouter()
const click = () => {
  router.push('/admin/dashboard')
}
</script>

<template>
  <main-section
    :class="sectionBgLogin"
    class="min-h-screen"
  >
    <h1 class="text-4xl md:text-6xl text-center text-white font-bold mt-6 mb-3 md:mt-12 md:mb-6">
      Law Firm&hellip;
    </h1>
    <h2 class="text-xl md:text-2xl text-center text-white mb-12 md:mb-24">
      Once place solution for all <code class="px-1.5 py-0.5 rounded bg-white bg-opacity-20">Summons</code>
    </h2>
    <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 px-6 max-w-6xl mx-auto justify-center">
      <card-component
        class="cursor-pointer shadow-2xl"
        rounded="rounded-2xl"
        hoverable
        @click="click()"
      >
        <div class="mb-3 md:mb-6">
          <img
            :src="`https://static.justboil.me/templates/one/small/basic.png`"
            width="955"
            height="540"
          >
        </div>

        <h1 class="text-xl md:text-2xl font-black">
          &hellip;
        </h1>
        <h2 class="text-lg md:text-xl">
          &hellip;
        </h2>
      </card-component>
    </div>
    <div class="mx-auto mt-12 mb-6 text-center">
      <a href="http://mnmalik.com">
        <h6 class="w-auto h-8 md:h-10 mx-auto text-white">Mudasir Malik</h6>
      </a>
    </div>
  </main-section>
</template>
