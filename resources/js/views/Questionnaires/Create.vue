<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { mdiAlertCircle, mdiViewList, mdiAccount, mdiMail, mdiFormTextboxPassword } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import Notification from '@/components/Notification.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import FilePicker from '@/components/FilePicker.vue'
import HeroBar from '@/components/HeroBar.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import TitledSection from '@/components/TitledSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

import useQuestionnaires from '@/composables/questionnaires'

const store = useStore()

const busy = ref(false);

const { errors, storeQuestionnaire } = useQuestionnaires()



const titleStack = ref(['Admin', 'Questionnaires', 'Create'])


const submit = async () => {
    busy.value = true
    try {
        await storeQuestionnaire({ ...form })
    } catch (e) {
        console.log("Error on Create Questionnaire")
        console.log(e)
    }
  busy.value = false
}

const form = reactive({
  name: '',
  email: ''
})
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar
  buttonLabel="Questionnaires List"
  :buttonIcon="mdiViewList"
  buttonTo="/admin/questionnaires"
  >Create Questionnaire</hero-bar>

  <main-section>
    <notification
      color="danger"
      :icon="mdiAlertCircle"
      v-if="errors"
    >
      {{errors}}
    </notification>
    <card-component
      form
      @submit.prevent="submit"
      autocomplete="off"
    >


      <field
        label="Name"
        help="Please enter name."
      >
        <control
          v-model="form.name"
          placeholder="Name"
          :icon="mdiAccount"
          :disabled="busy"
        />
      </field>

      <field
      label="Email"
      help="Please enter email of the questionnaire.">
        <control
          v-model="form.email"
          placeholder="Email Address"
          :icon="mdiMail"
          :disabled="busy"
        />
      </field>



      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Create"
          :busy="busy"
          :disabled="busy"
        />
        <jb-button
          type="reset"
          color="info"
          outline
          label="Reset"
        />
      </jb-buttons>
    </card-component>
  </main-section>
</template>
