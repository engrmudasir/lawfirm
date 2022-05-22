<script setup>
import { ref, reactive,onMounted, watch } from 'vue'
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

import useRoles from '@/composables/roles'
import usePermissions from '@/composables/permissions'


const store = useStore()

const titleStack = ref(['Admin', 'Roles', 'Update'])


const props = defineProps({

  id: {
    type: String,
    required: true,
    default: null
  }
})

const { errors, role,rolePermissions, updateRole, getRole } = useRoles()
const { permissions, getPermissions } = usePermissions()

onMounted(getPermissions)

onMounted(getRole(props.id))


const form = reactive({
    id:props.id,
    name: '',
    permissions: rolePermissions
})

const selectOptions = [
  { id: 1, label: 'Business development' },
  { id: 2, label: 'Marketing' },
  { id: 3, label: 'Sales' }
]

const busy = ref(false);


const submit = async () => {
    busy.value = true
    try {
        await updateRole({ ...form })
    } catch (e) {
        console.log("Error on Update Role")
        console.log(e)
    }
  busy.value = false
}

watch(role, newVal => {
 form.name = newVal.name
})

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar
  buttonLabel="Roles List"
  :buttonIcon="mdiViewList"
  buttonTo="/admin/roles"
  >Update Role</hero-bar>

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
        label="Permissions"
        wrap-body
      >

        <check-radio-picker
          v-model="form.permissions"
          type="switch"
          name="permissions-checkbox"
          :options="permissions"
        />
      </field>

      <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Update"
          :busy="busy"
          :disabled="busy"
        />
        <!-- <jb-button
          type="reset"
          color="info"
          outline
          label="Reset"
        /> -->
      </jb-buttons>
    </card-component>
  </main-section>
  <!-- <bottom-other-pages-section /> -->
</template>
