<script setup>
import { mdiThemeLightDark } from '@mdi/js'
import { useStore } from 'vuex'
import { computed } from 'vue'
import Level from '@/components/Level.vue'
import JbButton from '@/components/JbButton.vue'

const store = useStore()

const lightBorderStyle = computed(() => store.state.lightBorderStyle)

const darkMode = computed(() => store.state.darkMode)

// const darkModeToggle = () => {
//   store.dispatch('darkMode')
// }
const props = defineProps({
buttonLabel: {
    type: [String],
    default: null
  },
buttonIcon: {
    type: [String],
    default: null
  },
buttonTo: {
    type: [String, Object],
    default: null
  },
})
</script>

<template>
  <section
    :class="lightBorderStyle"
    class="bg-white border-t border-b p-6 dark:bg-gray-900/70 dark:border-gray-900 dark:text-white"
  >
    <level>
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
      <jb-button
      v-if="buttonLabel || buttonIcon"
        :label="buttonLabel"
        :icon="buttonIcon"
        :outline="darkMode"
        :to="buttonTo"
      />
    </level>
  </section>
</template>
