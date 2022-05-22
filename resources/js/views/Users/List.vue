<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import moment from 'moment'
import { useStore } from 'vuex'
import {  mdiLeadPencil, mdiEye, mdiTrashCan, mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff, mdiPlus } from '@mdi/js'
// import permission from '@/directive/permission'; // Permission directive (v-permission)
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

import { useModal } from 'tailvue'

import useUsers from '@/composables/users'

const titleStack = ref(['Admin', 'Users'])

const store = useStore()

// const $toast = useToast()
const $modal = useModal()

const { users, getUsers, destroyUser } = useUsers()
const checkable = ref(true)
onMounted(getUsers)

const deleteUser = async (id) => {
            $modal.show({
                                type: 'danger',
                                title: 'Are you sure?',
                                body: 'Are you sure you want to delete this user?',
                                primary: {
                                    label: 'Ok',
                                    theme: 'red',
                                    action: () => {
                                        destroyUser(id).then(() => {
                                            getUsers()
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
const items = users

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

const checked = (isChecked, user) => {
  if (isChecked) {
    checkedRows.value.push(user)
  } else {
    checkedRows.value = remove(checkedRows.value, row => row.id === user.id)
  }
}

const empty = computed(() => {
  return store.state.user.users.length > 0 ? false : true
})

const dateFormat = (date) => {
    return moment(date).format(" MMMM Do, YYYY")
}

</script>

<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar
  buttonLabel="Add New"
  :buttonIcon="mdiPlus"
  buttonTo="/admin/users/new"
  v-permission="['create users']"
  >Users List</hero-bar>
  <main-section>
    <card-component
      class="mb-6"
      has-table
      :empty="empty"
      emptyLabel="No Users Found..."
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
        <th />
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th v-role="['Super Admin']">Office</th>
         <!-- <th>Progress</th> -->
        <th>Created</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user, index) in itemsPaginated"
        :key="user.id"
        :class="[tableTrStyle, index % 2 === 0 ? tableTrOddStyle : '']"
      >
        <checkbox-cell
          v-if="checkable"
          @checked="checked($event, user)"
        />
        <td class="image-cell">
          <user-avatar
            :username="user.name"
            class="image"
          />
        </td>
        <td data-label="Name">
          {{ user.name }}
        </td>
        <td data-label="Email">
          {{ user.email }}
        </td>
        <td data-label="Role">
          {{user.roles[0] ? user.roles[0].name : ''}}
        </td>
        <td data-label="Office" v-role="['Super Admin']">
          {{ user.office ? user.office.name : ''}}
        </td>
        <!--
        <td
          data-label="Progress"
          class="progress-cell"
        >
          <progress
            max="100"
            :value="user.progress"
          >
            {{ user.progress }}
          </progress>
        </td> -->
        <td data-label="Created">
          <small
            class="text-gray-500 dark:text-gray-400"
            :title="dateFormat(user.created_at)"
          >{{ dateFormat(user.created_at) }}</small>
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
              :to="{ name: 'Update User', params: { id: user.id } }"
              v-permission="['update users']"
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
              @click="deleteUser(user.id)"
              v-permission="['delete users']"
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
