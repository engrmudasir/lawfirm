<script setup>
import { reactive,ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '@/components/FullScreenSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import { useToast, useModal } from 'tailvue'
const form = reactive({
  email: 'super@lawfirm.com',
  password: 'password',
  remember: ['remember']
})
const errors = ref(null);
const busy = ref(false);
const store = useStore()
const router = useRouter()

const $toast = useToast()

const submit = async () => {
        busy.value = true
        try {
            await store.dispatch('user/login' , form)
            $toast.show({type: 'success',message: 'Successfully Logged In'});
            router.push('/admin/dashboard')
        }
        catch (e){
            errors.value = e.data
            $toast.show({type: 'danger',message: 'Some Error Occured'});
        };
        busy.value = false
}
</script>

<template>
  <full-screen-section
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >
    <card-component
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <field
        label="Login"
        help="Please enter your login"
      >
        <control
          v-model="form.email"
          :icon="mdiAccount"
          name="login"
          autocomplete="username"
        />
      </field>

      <field
        label="Password"
        help="Please enter your password"
      >
        <control
          v-model="form.password"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </field>

      <check-radio-picker
        v-model="form.remember"
        name="remember"
        :options="{ remember: 'Remember' }"
      />

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Login"
        />
        <jb-button
          to="/admin/dashboard"
          color="info"
          outline
          label="Back"
        />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>
