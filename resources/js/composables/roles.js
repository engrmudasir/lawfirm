import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast, useModal } from 'tailvue'

export default function useRoles() {
    const role = ref([])
    const rolePermissions = ref([])
    const roles = ref([])

    const errors = ref('')
    const router = useRouter()

    const $toast = useToast()
    const $modal = useModal()

    const store = useStore()

    const getRoles = async () => {
        console.log('Getting roles')
        try {
            store.dispatch('asideLoaderToggle', true)
            await store.dispatch('role/getRoles')
            .then((response) =>{
                // console.log('response')
                // console.log(response)
                roles.value = response.data.data
            })
            .catch((error) =>{
                console.log('error Getting Roles')
                console.log(error)
            })
            store.dispatch('asideLoaderToggle', false)

        } catch (e) {
            //Main JS Error Catch
            console.log('Main JS error Getting Roles')
            store.dispatch('asideLoaderToggle', false)
        }
    }

    const getRole = async (id) => {
        // let response = await axios.get(`/api/roles/${id}`)
        // role.value = response.data.data
        // rolePermissions.value = _.map(response.data.data.permissions,'name')
        store.dispatch('asideLoaderToggle', true)

        console.log('Getting roles')
        try {
            await store.dispatch('role/getRole', id)
            .then((response) =>{
                role.value = response.data.data
                rolePermissions.value = _.map(response.data.data.permissions,'name')
                store.dispatch('asideLoaderToggle', false)
            })
            .catch((error) =>{
                console.log('error Getting Role')
                console.log(error)
                store.dispatch('asideLoaderToggle', false)
            })

        } catch (e) {
            //Main JS Error Catch
            console.log('Main JS error Getting Role')
            store.dispatch('asideLoaderToggle', false)
        }

    }

    const storeRole = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('role/createRole', data)
            .then((response) =>{
                console.log('response Create Role')
                console.log(response)
                $toast.show({type: 'success',message: 'Role Created Successfully.'});
                router.push({ name: 'List Roles' })
            })
            .catch((error) =>{
                console.log('error Creating Roles')
                console.log(error)
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        errors.value += error.response.data.errors[key][0] + ' ';
                    }
                } else {
                    switch(error.response.status){
                        case 500:
                        case 403:
                            $modal.show({
                                    type: 'danger',
                                    title: 'Server Error',
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
                                    title: 'Server Error',
                                    body: 'There is some Server Error.',
                                    primary: {
                                        label: 'Ok',
                                        theme: 'red',
                                        action: () => false,
                                    }
                                    })
                            break;
                    }
                }
                // if (error.response.status === 500) {
                //     $modal.show({
                //         type: 'danger',
                //         title: 'Server Error',
                //         body: error.response.data.message,
                //         primary: {
                //             label: 'Ok',
                //             theme: 'red',
                //             action: () => false,
                //         }
                //         })
                // }

            })

            // await axios.post('/api/roles', data)
            // await router.push({ name: 'List Roles' })
        } catch (e) {
            console.log('Error Creating Role in JS')
        }

    }

    const updateRole = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('role/updateRole', data)
            .then((response) =>{
                console.log('response Updating Role')
                // console.log(response)
                $toast.show({type: 'success',message: 'Role Updated Successfully.'});
                router.push({ name: 'List Roles' })
            })
            .catch((error) =>{
                console.log('error Updating Roles')
                console.log(error)
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        errors.value += error.response.data.errors[key][0] + ' ';
                    }
                } else {
                    switch(error.response.status){
                        case 500:
                        case 403:
                            $modal.show({
                                    type: 'danger',
                                    title: 'Server Error',
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
                                    title: 'Server Error',
                                    body: 'There is some Server Error.',
                                    primary: {
                                        label: 'Ok',
                                        theme: 'red',
                                        action: () => false,
                                    }
                                    })
                            break;
                    }
                }
                // if (error.response.status === 500) {
                //     $modal.show({
                //         type: 'danger',
                //         title: 'Server Error',
                //         body: error.response.data.message,
                //         primary: {
                //             label: 'Ok',
                //             theme: 'red',
                //             action: () => false,
                //         }
                //         })
                // }


            })
        } catch (e) {
            console.log('Error while updating in JS')
            console.log(e)
        }
    }
    const destroyRole = async (id) => {
        return await axios.delete(`/api/roles/${id}`).then((response) => {
            $toast.show({type: 'danger',message: 'Role Deleted Successfully.'});
        })
    }

    return {
        errors,
        role,
        rolePermissions,
        roles,
        getRole,
        getRoles,
        storeRole,
        updateRole,
        destroyRole
    }
}
