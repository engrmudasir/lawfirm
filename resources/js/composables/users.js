import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast, useModal } from 'tailvue'

export default function useUsers() {
    const user = ref([])
    const users = ref([])

    const errors = ref('')
    const router = useRouter()

    const $toast = useToast()
    const $modal = useModal()

    const store = useStore()

    const getUsers = async () => {
        console.log('Getting users')
        try {
            await store.dispatch('user/getUsers')
            .then((response) =>{
                // console.log('response')
                // console.log(response)
                users.value = response.data.data
            })
            .catch((error) =>{
                console.log('error Getting Users')
                console.log(error)
            })

        } catch (e) {
            //Main JS Error Catch
            console.log('Main JS error Getting Users')
        }
    }

    const getUser = async (id) => {
        let response = await axios.get(`/api/users/${id}`)
        user.value = response.data.data
        console.log(user.value)
    }

    const storeUser = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('user/createUser', data)
            .then((response) =>{
                console.log('response Create User')
                console.log(response)
                $toast.show({type: 'success',message: 'User Created Successfully.'});
                router.push({ name: 'List Users' })
            })
            .catch((error) =>{
                console.log('error Creating Users')
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
            })
        } catch (e) {
            console.log('Error Creating User in JS')
        }

    }

    const updateUser = async (id) => {
        errors.value = ''
        try {
            await store.dispatch('user/updateUser', { id:id, user: user.value })
            .then((response) =>{
                console.log('response Updating User')
                // console.log(response)
                $toast.show({type: 'success',message: 'User Updated Successfully.'});
                router.push({ name: 'List Users' })
            })
            .catch((error) =>{
                console.log('error Updating Users')
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
            })
        } catch (e) {
            console.log('Error while updating in JS')
        }
    }
    const destroyUser = async (id) => {
        return await axios.delete(`/api/users/${id}`).then((response) => {
            $toast.show({type: 'danger',message: 'User Deleted Successfully.'});
        })
    }

    return {
        errors,
        user,
        users,
        getUser,
        getUsers,
        storeUser,
        updateUser,
        destroyUser
    }
}
