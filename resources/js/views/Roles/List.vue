<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import moment from 'moment'
import { useStore } from 'vuex'
import {  mdiLeadPencil, mdiEye, mdiTrashCan, mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff, mdiPlus,
  mdiSelectColor,
  mdiFeather,
  mdiInformationOutline,
  mdiCheckCircleOutline,
  mdiAlertCircle,
  mdiAlertCircleOutline,
  mdiOpenInNew,
  mdiClose } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import Notification from '@/components/Notification.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'
import TitledSection from '@/components/TitledSection.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'

import ModalBox from '@/components/ModalBox.vue'
import CheckboxCell from '@/components/CheckboxCell.vue'
import Level from '@/components/Level.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'


import { useModal } from 'tailvue'

import useRoles from '@/composables/roles'

const titleStack = ref(['Admin', 'Roles'])

const buttonSettingsModel = ref([])

const store = useStore()

// const $toast = useToast()
const $modal = useModal()

const { roles, getRoles, destroyRole } = useRoles()
const checkable = ref(true)
onMounted(getRoles)

const deleteRole = async (id) => {
            $modal.show({
                                type: 'danger',
                                title: 'Are you sure?',
                                body: 'Are you sure you want to delete this role?',
                                primary: {
                                    label: 'Ok',
                                    theme: 'red',
                                    action: () => {
                                        destroyRole(id).then(() => {
                                            getRoles()
                                        })
                                    },
                                },
                                secondary: {
                                    label: 'Cancel',
                                    theme: 'white',
                                    action: () => false
                                },
                                })
        }


const lightBorderStyle = computed(() => store.state.lightBorderStyle)

const lightBgStyle = computed(() => store.state.lightBgStyle)

const tableTrStyle = computed(() => store.state.tableTrStyle)

const tableTrOddStyle = computed(() => store.state.tableTrOddStyle)

const darkMode = computed(() => store.state.darkMode)

// const items = computed(() => store.state.clients)
const items = roles

const openTab = ref(0)
const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const perPage = ref(10)

const currentPage = ref(0)

const checkedRows = ref([])

const itemsPaginated = computed(
  () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach(item => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, role) => {
  if (isChecked) {
    checkedRows.value.push(role)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === role.id)
  }
}

const empty = computed(() => {
  return store.state.role.roles.length > 0 ? false : true
})

const dateFormat = (date) => {
    return moment(date).format(" MMMM Do YYYY")
}

const toggleTabs = (tabNumber) => {
    return openTab.value = tabNumber
}

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Roles List</hero-bar>
  <main-section>
    <card-component
      class="mb-6"
      has-table
      :empty="empty"
      emptyLabel="No Roles Found..."
    >

  <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center" v-for="(tab,index) in items" :key="index">
          <a class="text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal cursor-pointer border" v-on:click="toggleTabs(index)" v-bind:class="{'text-indigo-600 bg-white': openTab !== index, 'text-white bg-indigo-600': openTab === index}">
            {{tab.name}}
          </a>
        </li>
      </ul>

      <div v-bind:class="{'hidden': openTab !== index, 'block': openTab === index}" v-for="(tab,index) in items" :key="index">
                <!-- Tab Contents -->
               <!-- <titled-section>Buttons</titled-section> -->
 {{tab}}
                <main-section>
                    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
                    <check-radio-picker
                        v-model="buttonSettingsModel"
                        name="buttons-switch"
                        type="switch"
                        :options="tab"
                        />
                    </div>
                </main-section>
                <!-- End Tab Contents -->
            </div>
  <!-- Ends Records Table -->
    </card-component>
  </main-section>
</template>
