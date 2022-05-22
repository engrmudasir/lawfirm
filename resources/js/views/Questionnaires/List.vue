<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import moment from 'moment'
import { useStore } from 'vuex'
import {  mdiLeadPencil, mdiEye, mdiTrashCan, mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff, mdiPlus } from '@mdi/js'

import MainSection from '@/components/MainSection.vue'
import Notification from '@/components/Notification.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

import ModalBox from '@/components/ModalBox.vue'
import CheckboxCell from '@/components/CheckboxCell.vue'
import Level from '@/components/Level.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'

import Pill from '@/components/Pill.vue'

import { useModal } from 'tailvue'

import useQuestionnaires from '@/composables/questionnaires'

const titleStack = ref(['Admin', 'Questionnaires'])

const store = useStore()

// const $toast = useToast()
const $modal = useModal()

const { questionnaires, getQuestionnaires, destroyQuestionnaire } = useQuestionnaires()
const checkable = ref(true)
onMounted(getQuestionnaires)

const deleteQuestionnaire = async (id) => {
            $modal.show({
                                type: 'danger',
                                title: 'Are you sure?',
                                body: 'Are you sure you want to delete this questionnaire?',
                                primary: {
                                    label: 'Ok',
                                    theme: 'red',
                                    action: () => {
                                        destroyQuestionnaire(id).then(() => {
                                            getQuestionnaires()
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
const items = questionnaires

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

const checked = (isChecked, questionnaire) => {
  if (isChecked) {
    checkedRows.value.push(questionnaire)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === questionnaire.id)
  }
}

const empty = computed(() => {
  return store.state.questionnaire.questionnaires && store.state.questionnaire.questionnaires.length > 0 ? false : true
})

const dateFormat = (date) => {
    return moment(date).format("MMMM Do, YYYY hh:mm a")
}

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar
  buttonLabel="Add New"
  :buttonIcon="mdiPlus"
  buttonTo="/admin/questionnaires/new"
  v-permission="['create questionnaires']"
  >Questionnaires List</hero-bar>
  <main-section>
    <card-component
      class="mb-6"
      has-table
      :empty="empty"
      emptyLabel="No Questionnaires Found..."
    >
    <!-- Records Table -->
      <!-- Actions Modals -->
      <modal-box
    v-model="isModalActive"
    title="View Modal"
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </modal-box>

  <modal-box
    v-model="isModalDangerActive"
    large-title="Please confirm"
    button="danger"
    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </modal-box>
  <!-- End Actions Modal -->
  <div
    v-if="checkedRows.length"
    class="bg-opacity-50 p-3 dark:bg-gray-800"
    :class="lightBgStyle"
  >
    <span
      v-for="checkedRow in checkedRows"
      :key="checkedRow.id"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm dark:bg-gray-700"
      :class="lightBgStyle"
    >
      {{ checkedRow.name }}
    </span>
  </div>
  <table>
    <thead>
      <tr>
        <th v-if="checkable" />

        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th v-role="['Super Admin']">Office</th>
        <th>Created</th>
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(questionnaire, index) in itemsPaginated"
        :key="questionnaire.id"
        :class="[tableTrStyle, index % 2 === 0 ? tableTrOddStyle : '']"
      >
        <checkbox-cell
          v-if="checkable"
          @checked="checked($event, questionnaire)"
        />
        <td data-label="Name">
          {{ questionnaire.name }}
        </td>
        <td data-label="Email">
          {{ questionnaire.email }}
        </td>

<td data-label="Status">
         <pill
            :text="questionnaire.status"
            :type="questionnaire.status=='pending'?'info':'success'"
          />
        </td>

        <td data-label="Office" v-role="['Super Admin']">
          {{ questionnaire.office ? questionnaire.office.name : ''}}
        </td>

        <td data-label="Created">
          <small
            class="text-gray-500 dark:text-gray-400"
            :title="dateFormat(questionnaire.created_at)"
          >{{ dateFormat(questionnaire.created_at) }}</small>
        </td>

        <td class="actions-cell">
          <jb-buttons
            type="justify-start lg:justify-end"
            no-wrap
          >
            <jb-button
              color="success"
              :icon="mdiLeadPencil"
              small
              :to="{ name: 'Update Questionnaire', params: { id: questionnaire.id } }"
              v-permission="['update questionnaires']"
            />
            <jb-button
              color="info"
              :icon="mdiEye"
              small
              @click="isModalActive = true"
            />
            <jb-button
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="deleteQuestionnaire(questionnaire.id)"
              v-permission="['delete questionnaires']"
            />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    :class="lightBorderStyle"
    class="p-3 lg:px-6 border-t dark:border-gray-800"
  >
    <level>
      <jb-buttons>
        <jb-button
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :outline="darkMode"
          small
          @click="currentPage = page"
        />
      </jb-buttons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </level>
  </div>
  <!-- Ends Records Table -->
    </card-component>
  </main-section>
</template>
