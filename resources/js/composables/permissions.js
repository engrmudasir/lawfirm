import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast, useModal } from 'tailvue'

export default function usePermissions() {
    const permission = ref([])
    const permissions = ref([])

    const errors = ref('')
    const router = useRouter()

    const $toast = useToast()
    const $modal = useModal()

    const store = useStore()

    const getPermissions = async () => {
        console.log('Getting permissions')
        try {
            await store.dispatch('permission/getPermissions')
            .then((response) =>{
                // console.log('response')
                // console.log(response)
                permissions.value = response.data.data
            })
            .catch((error) =>{
                console.log('error Getting Permissions')
                console.log(error)
            })

        } catch (e) {
            //Main JS Error Catch
            console.log('Main JS error Getting Permissions')
        }
    }

    const getPermission = async (id) => {
        let response = await axios.get(`/api/permissions/${id}`)
        permission.value = response.data.data
    }

    const storePermission = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('permission/createPermission', data)
            .then((response) =>{
                console.log('response Create Permission')
                console.log(response)
                $toast.show({type: 'success',message: 'Permission Created Successfully.'});
                router.push({ name: 'List Permissions' })
            })
            .catch((error) =>{
                console.log('error Creating Permissions')
                console.log(error)
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        errors.value += error.response.data.errors[key][0] + ' ';
                    }
                } else {
                    switch(error.response.status){
                        case 500:
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

            // await axios.post('/api/permissions', data)
            // await router.push({ name: 'List Permissions' })
        } catch (e) {
            console.log('Error Creating Permission in JS')
        }

    }

    const updatePermission = async (id) => {
        errors.value = ''
        try {
            await store.dispatch('permission/updatePermission', { id:id, permission: permission.value })
            .then((response) =>{
                console.log('response Updating Permission')
                // console.log(response)
                $toast.show({type: 'success',message: 'Permission Updated Successfully.'});
                router.push({ name: 'List Permissions' })
            })
            .catch((error) =>{
                console.log('error Updating Permissions')
                // console.log(error)
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        errors.value += error.response.data.errors[key][0] + ' ';
                    }
                } else {
                    switch(error.response.status){
                        case 500:
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
        }
    }
    const destroyPermission = async (id) => {
        return await axios.delete(`/api/permissions/${id}`).then((response) => {
            $toast.show({type: 'danger',message: 'Permission Deleted Successfully.'});
        })
    }

    return {
        errors,
        permission,
        permissions,
        getPermission,
        getPermissions,
        storePermission,
        updatePermission,
        destroyPermission
    }
}
