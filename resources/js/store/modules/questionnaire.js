import axios from "axios";

export default {
    namespaced: true,
    state: {
        questionnaires: [],
        questionnaire: null
    },
    mutations: {
        setQuestionnaires(state, payload) {
            state.questionnaires = payload;
        },
        setQuestionnaire (state, payload) {
            state.questionnaire = payload;
          }
    },
    getters: {
        questionnaire(state) {
            return state.questionnaire;
        },
        questionnaires(state) {
            return state.questionnaires
        }
    },
    actions: {
        async getQuestionnaires({commit}) {
            return await axios.get('/api/questionnaires').then((res) => {
                commit('setQuestionnaires', res.data.data);
                return res
            }).catch((err) => {
                throw(err)
            })
        },
        async getQuestionnaire({commit},payload) {
            return await axios.patch(`/api/questionnaires/${id}`, payload).then((res) => {
                commit('setQuestionnaire', res.data.questionnaire);
            }).catch((err) => {
                throw err.response
            })
        },
        async createQuestionnaire({ commit }, questionnaire) {
                return await axios.post('/api/questionnaires' , questionnaire).then((res) => {
                    return res.data
                }).catch((err) => {
                    throw(err)
                })

        },
        async updateQuestionnaire({ commit }, {id, questionnaire}) {
            return await axios.put('/api/questionnaires/' + id, questionnaire).then((res) => {
                return res.data
            }).catch((err) => {
                throw(err)
            })

        }
    }
  };
