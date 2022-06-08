import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast, useModal } from 'tailvue'

export default function useQuestionnaires() {
    const questionnaire = ref([])
    const questionnaires = ref([])

    const errors = ref('')
    const router = useRouter()

    const $toast = useToast()
    const $modal = useModal()

    const store = useStore()

    const getQuestionnaires = async () => {
        console.log('Getting questionnaires')
        try {
            await store.dispatch('questionnairefront/getQuestionnaires')
            .then((response) =>{
                console.log('response')
                console.log(response)
                questionnaires.value = response.data.data
            })
            .catch((error) =>{
                console.log('error Getting Questionnaires')
                console.log(error)
            })

        } catch (e) {
            //Main JS Error Catch
            console.log('Main JS error Getting Questionnaires')
        }
    }

    const getQuestionnaire = async (id) => {
        let response = await axios.get(`/api/questionnaires/${id}`)
        questionnaire.value = response.data.data
        console.log(questionnaire.value)
    }

    const storeQuestionnaire = async (data) => {
        errors.value = ''
        try {
            await store.dispatch('questionnairefront/createQuestionnaire', data)
            .then((response) =>{
                console.log('response Create Questionnaire')
                console.log(response)
                $toast.show({type: 'success',message: 'Questionnaire Created Successfully.'});
                router.push({ name: 'List Questionnaires' })
            })
            .catch((error) =>{
                console.log('error Creating Questionnaires')
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
            })
        } catch (e) {
            console.log('Error Creating Questionnaire in JS')
        }

    }

    const updateQuestionnaire = async (id) => {
        errors.value = ''
        try {
            await store.dispatch('questionnairefront/updateQuestionnaire', { id:id, questionnaire: questionnaire.value })
            .then((response) =>{
                console.log('response Updating Questionnaire')
                // console.log(response)
                $toast.show({type: 'success',message: 'Questionnaire Updated Successfully.'});
                router.push({ name: 'List Questionnaires' })
            })
            .catch((error) =>{
                console.log('error Updating Questionnaires')
                // console.log(error)
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
            })
        } catch (e) {
            console.log('Error while updating in JS')
        }
    }
    const destroyQuestionnaire = async (id) => {
        return await axios.delete(`/api/questionnaires/${id}`).then((response) => {
            $toast.show({type: 'danger',message: 'Questionnaire Deleted Successfully.'});
        })
    }

    return {
        errors,
        questionnaire,
        questionnaires,
        getQuestionnaire,
        getQuestionnaires,
        storeQuestionnaire,
        updateQuestionnaire,
        destroyQuestionnaire
    }
}
