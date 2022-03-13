<script setup>
import { ref, reactive } from 'vue'
import { mdiAlertCircle, mdiViewList, mdiBallot, mdiBallotOutline, mdiAccount, mdiMail } from '@mdi/js'
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
// import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import TitledSection from '@/components/TitledSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

import useOffices from '@/composables/offices'

const titleStack = ref(['Admin', 'Offices', 'Create'])

const selectOptions = [
  { id: 1, label: 'Business development' },
  { id: 2, label: 'Marketing' },
  { id: 3, label: 'Sales' }
]

const form = reactive({
  name: '',
  address: ''
})

const busy = ref(false);

const { errors, storeOffice } = useOffices()
// const customElementsForm = reactive({
//   checkbox: ['lorem'],
//   radio: 'one',
//   switch: ['one'],
//   file: null
// })

const submit = async () => {
    busy.value = true
    try {
        await storeOffice({ ...form })
    } catch (e) {
        console.log("Error on Create Office")
        console.log(e)
    }
  busy.value = false
}
</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar
  buttonLabel="Offices List"
  :buttonIcon="mdiViewList"
  buttonTo="/admin/offices"
  >Create Office</hero-bar>

  <main-section>
    <!-- <title-sub-bar
      :icon="mdiBallotOutline"
      title="Forms example"
    /> -->
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
    >


      <field
        label="Name"
        help="Please enter name with which you can distinguish this office"
      >
        <control
          v-model="form.name"
          placeholder="Office Name"
          :disabled="busy"
        />
      </field>

      <field
      label="Address"
      help="Please enter address of the office as it make it more clear">
        <control
          v-model="form.address"
          placeholder="Office address"
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
        <jb-button
          type="reset"
          color="info"
          outline
          label="Reset"
        />
      </jb-buttons>
    </card-component>
  </main-section>
  <!-- <bottom-other-pages-section /> -->
</template>
