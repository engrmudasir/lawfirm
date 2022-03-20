import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast, useModal } from 'tailvue'

export default function useProfile() {

    const errors = ref('')
    const router = useRouter()

    const $toast = useToast()
    const $modal = useModal()

    const store = useStore()

    const updateProfile = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('auth/profile', data)
            .then((response) =>{
                // console.log('response Updating Profile')
                // console.log(response)
                $toast.show({type: 'success',message: 'Profile Updated Successfully.'});
            })
            .catch((error) =>{
                console.log('error Updating Profiles')
                // console.log(error)
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        errors.value += error.response.data.errors[key][0] + ' ';
                    }
                }
                else {
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
    const updatePassword = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('auth/password', data)
            .then((response) =>{
                console.log('response Updating Password')
                console.log(response)
                $toast.show({type: 'success',message: 'Password Updated Successfully.'});
            })
            .catch((error) =>{
                // console.log('error Updating password')
                // console.log(error.response)
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

    return {
        errors,
        updateProfile,
        updatePassword
    }
}
