import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast, useModal } from 'tailvue'

export default function useOffices() {
    const office = ref([])
    const offices = ref([])

    const errors = ref('')
    const router = useRouter()

    const $toast = useToast()
    const $modal = useModal()

    const store = useStore()

    const getOffices = async () => {
        console.log('Getting offices')
        try {
            await store.dispatch('office/getOffices')
            .then((response) =>{
                // console.log('response')
                // console.log(response)
                offices.value = response.data.data
            })
            .catch((error) =>{
                console.log('error Getting Offices')
                console.log(error)
            })

        } catch (e) {
            //Main JS Error Catch
            console.log('Main JS error Getting Offices')
        }
    }

    const getOffice = async (id) => {
        let response = await axios.get(`/api/offices/${id}`)
        office.value = response.data.data
    }

    const storeOffice = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('office/createOffice', data)
            .then((response) =>{
                console.log('response Create Office')
                console.log(response)
                $toast.show({type: 'success',message: 'Office Created Successfully.'});
                router.push({ name: 'List Offices' })
            })
            .catch((error) =>{
                console.log('error Creating Offices')
                console.log(error)
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        errors.value += error.response.data.errors[key][0] + ' ';
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
            })

            // await axios.post('/api/offices', data)
            // await router.push({ name: 'List Offices' })
        } catch (e) {
            console.log('Error Creating Office in JS')
        }

    }

    const updateOffice = async (id) => {
        errors.value = ''
        try {
            await store.dispatch('office/updateOffice', { id:id, office: office.value })
            .then((response) =>{
                console.log('response Updating Office')
                // console.log(response)
                $toast.show({type: 'success',message: 'Office Updated Successfully.'});
                router.push({ name: 'List Offices' })
            })
            .catch((error) =>{
                console.log('error Updating Offices')
                // console.log(error)
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        errors.value += error.response.data.errors[key][0] + ' ';
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

            })
        } catch (e) {
            console.log('Error while updating in JS')
        }
    }
    const destroyOffice = async (id) => {
        return await axios.delete(`/api/offices/${id}`).then((response) => {
            $toast.show({type: 'danger',message: 'Office Deleted Successfully.'});
        })
    }

    return {
        errors,
        office,
        offices,
        getOffice,
        getOffices,
        storeOffice,
        updateOffice,
        destroyOffice
    }
}
