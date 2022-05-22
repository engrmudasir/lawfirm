<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { mdiAccount, mdiAlertCircle,mdiAccountCircle, mdiLock, mdiMail, mdiAsterisk, mdiFormTextboxPassword } from '@mdi/js'
import Notification from '@/components/Notification.vue'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import Divider from '@/components/Divider.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import FilePicker from '@/components/FilePicker.vue'
import JbButton from '@/components/JbButton.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import JbButtons from '@/components/JbButtons.vue'
import UserCard from '@/components/UserCard.vue'

import useProfile from '@/composables/profile'

const store = useStore()
const { errors, updatePassword ,updateProfile } = useProfile()

const titleStack = ref(['Admin', 'Profile'])
const busy = ref(false);
const profileForm = reactive({
  name: store.state.auth.user.name,
  email: store.state.auth.user.email
})

const passwordForm = reactive({
  password_current: '',
  password: '',
  password_confirmation: ''
})

const submitProfile = async () => {
//   store.commit('user', profileForm)
  busy.value = true
    try {
        await updateProfile({ ...profileForm })
    } catch (e) {
        console.log("Error on Updating Profile")
        console.log(e)
    }
  busy.value = false
}

const submitPass = async () => {
    busy.value = true
    try {
        await updatePassword({ ...passwordForm })
    } catch (e) {
        console.log("Error on Updating Password")
        console.log(e)
    }
  busy.value = false
}
</script>

<template>
  <title-bar :title-stack="titleStack" />

  <user-card />

  <main-section>
      <notification
      color="danger"
      :icon="mdiAlertCircle"
      v-if="errors"
    >
      {{errors}}
    </notification>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <card-component
        title="Edit Profile"
        :icon="mdiAccountCircle"
        form
        @submit.prevent="submitProfile"
      >
        <!-- <field
          label="Avatar"
          help="Max 500kb"
        >
          <file-picker />
        </field> -->

        <field
          label="Name"
          help="Required. Your name"
        >
          <control
            v-model="profileForm.name"
            :icon="mdiAccount"
            name="name"
            required
            autocomplete="name"
            :disabled="busy"
          />
        </field>
        <field
          label="E-mail"
          help="Your e-mail can not be changed."
        >
          <control
            v-model="profileForm.email"
            :icon="mdiMail"
            type="email"
            name="email"
            required
            autocomplete="email"
            disabled
          />
        </field>

        <divider />

        <jb-buttons>
          <jb-button
            color="info"
            type="submit"
            label="Submit"
            :busy="busy"
            :disabled="busy"
          />
          <!-- <jb-button
            color="info"
            label="Options"
            outline
          /> -->
        </jb-buttons>
      </card-component>

      <card-component
        title="Change Password"
        :icon="mdiLock"
        form
        @submit.prevent="submitPass"
      >
        <field
          label="Current password"
          help="Required. Your current password"
        >
          <control
            v-model="passwordForm.password_current"
            :icon="mdiAsterisk"
            name="password_current"
            type="password"
            required
            autocomplete="current-password"
          />
        </field>

        <divider />

        <field
          label="New password"
          help="Required. New password"
        >
          <control
            v-model="passwordForm.password"
            :icon="mdiFormTextboxPassword"
            name="password"
            type="password"
            required
            autocomplete="new-password"
            :disabled="busy"
          />
        </field>

        <field
          label="Confirm password"
          help="Required. New password one more time"
        >
          <control
            v-model="passwordForm.password_confirmation"
            :icon="mdiFormTextboxPassword"
            name="password_confirmation"
            type="password"
            required
            autocomplete="new-password"
          :disabled="busy"
          />
        </field>

        <divider />

        <jb-buttons>
          <jb-button
            type="submit"
            color="info"
            label="Submit"
            :busy="busy"
            :disabled="busy"
          />
          <!-- <jb-button
            color="info"
            label="Options"
            outline
          /> -->
        </jb-buttons>
      </card-component>
    </div>
  </main-section>

  <!-- <bottom-other-pages-section /> -->
</template>
