<script setup>
import { reactive,ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { mdiAccount,mdiLogin, mdiAsterisk } from '@mdi/js'
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
const $modal = useModal()

const submit = async () => {
        busy.value = true
        try {
            await store.dispatch('user/login' , form)
            .then((response) => {
                store.dispatch('user/getUser').then((res) => {
                    console.log(res)
                    $toast.show({type: 'success',message: 'Successfully Logged In'});
                    router.push('/admin/dashboard')
                })
                .catch((err)=>{
                    $modal.show({
                                type: 'danger',
                                title: 'Getting User Error',
                                body: 'An Error Occured While getting the User Information.',
                                primary: {
                                    label: 'Ok',
                                    theme: 'red',
                                    action: () => false,
                                },
                                // secondary: {
                                //     label: 'Secondary Action',
                                //     theme: 'white',
                                //     action: () => $toast.show('Clicked Secondary'),
                                // }
                                })
                    console.log('Getting User Error')
                    console.log(err)
                })
            })
            .catch((error) => {
                switch(error.response.status){
                    case 500:
                        $modal.show({
                                type: 'danger',
                                title: 'Login Error',
                                body: error.response.data.message,
                                primary: {
                                    label: 'Ok',
                                    theme: 'red',
                                    action: () => false,
                                },
                                })
                        break;
                    default:
                        $modal.show({
                                type: 'danger',
                                title: 'Login Error',
                                body: 'You have an error while logging out.',
                                primary: {
                                    label: 'Ok',
                                    theme: 'red',
                                    action: () => false,
                                }
                                })
                        break;
                }
                console.log('login error')
                console.log(error)
            })
        }
        catch (e){
            errors.value = e.data
            $toast.show({type: 'danger',message: 'Some Error Occured'});
            $modal.show({
                                type: 'danger',
                                title: 'Server Error',
                                body: 'An Error Occured While loggin in.',
                                primary: {
                                    label: 'Ok',
                                    theme: 'red',
                                    // action: () => $toast.show('Primary Button clicked'),
                                }
                                })
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

      <jb-buttons type="justify-center">
        <jb-button
        class="w-full"
          type="submit"
          color="info"
          label="Login"
          :busy="busy"
          :disabled="busy"
          :icon="mdiLogin"
        />
        <!-- <jb-button
          to="/admin/dashboard"
          color="info"
          outline
          label="Back"
          :busy="busy"
          :disabled="busy"
        /> -->
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>
