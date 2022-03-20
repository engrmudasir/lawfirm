<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiCheckDecagram } from '@mdi/js'
import Level from '@/components/Level.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import Pill from '@/components/Pill.vue'
import moment from 'moment'

const store = useStore()

const userName = computed(() => store.state.auth.user ? store.state.auth.user.name : null)
const last_login_at = computed(() => store.state.auth.user ? store.state.auth.user.last_login_at : null)
const last_login_ip = computed(() => store.state.auth.user ? store.state.auth.user.last_login_ip : null)


const userSwitchVal = ref([])
</script>

<template>
  <card-component rounded="">
    <level type="justify-around lg:justify-center">
      <user-avatar class="lg:mx-12" />
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
          <check-radio-picker
            v-model="userSwitchVal"
            name="sample-switch"
            type="switch"
            :options="{ one: 'Notifications' }"
          />
        </div>
        <h1 class="text-2xl">
          Howdy, <b>{{ userName }}</b>!
        </h1>
        <p>Last login <b>{{moment(last_login_at).fromNow()}}</b> from <b>{{last_login_ip}}</b></p>
        <div class="flex justify-center md:block">
          <pill
            text="Verified"
            type="info"
            :icon="mdiCheckDecagram"
          />
        </div>
      </div>
    </level>
  </card-component>
</template>
