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
// import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import TitledSection from '@/components/TitledSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

import useUsers from '@/composables/users'
import useOffices from '@/composables/offices'
import useRoles from '@/composables/roles'

const store = useStore()

const busy = ref(false);

const { errors, storeUser } = useUsers()
const { offices, getOffices } = useOffices()
const { roles, getRoles } = useRoles()



const titleStack = ref(['Admin', 'Users', 'Create'])

const selectOptions = [
  { id: 1, label: 'Business development' },
  { id: 2, label: 'Marketing' },
  { id: 3, label: 'Sales' }
]

const customElementsForm = reactive({
  checkbox: ['lorem'],
  radio: 'one',
  switch: ['one'],
  file: null
})

const submit = async () => {
    busy.value = true
    try {
        await storeUser({ ...form })
    } catch (e) {
        console.log("Error on Create User")
        console.log(e)
    }
  busy.value = false
}
onMounted(getOffices)
onMounted(getRoles)

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  role_id:'',
  office_id:''
})

const authUserRole = computed(() => {
  return store.state.auth.user.roles ? store.state.auth.user.roles[0].name : null
})

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar
  buttonLabel="Users List"
  :buttonIcon="mdiViewList"
  buttonTo="/admin/users"
  >Create User</hero-bar>

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
      help="Please enter email of the user.">
        <control
          v-model="form.email"
          placeholder="Email Address"
          :icon="mdiMail"
          :disabled="busy"
        />
      </field>
      <field label="Password">
        <control
          v-model="form.password"
          type="password"
          :icon="mdiFormTextboxPassword"
          placeholder="Password"
          :disabled="busy"
        />
        <control
          v-model="form.password_confirmation"
          type="password"
          :icon="mdiFormTextboxPassword"
          placeholder="Password Confirmation"
          :disabled="busy"
        />
      </field>
      <field label="Role">
        <control
          v-model="form.role_id"
          :options="roles"
          placeholder="Role"
          defaultOptionText="Please Select Role"
          :disabled="busy"
        />
      </field>
      <field label="Office" v-if="authUserRole=='Super Admin'">
        <control
          v-model="form.office_id"
          :options="offices"
            placeholder="Office"
            defaultOptionText="Please Select Office"
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
