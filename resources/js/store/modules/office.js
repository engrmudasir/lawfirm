import axios from "axios";

export default {
    namespaced: true,
    state: {
        offices: [],
        office: null
    },
    mutations: {
        setOffices(state, payload) {
            state.offices = payload;
        },
        setOffice (state, payload) {
            state.office = payload;
          }
    },
    getters: {
        office(state) {
            return state.office;
        },
        offices(state) {
            return state.offices
        }
    },
    actions: {
        async getOffices({commit}) {
            return await axios.get('/api/offices').then((res) => {
                commit('setOffices', res.data.data);
                return res
            }).catch((err) => {
                throw(err)
            })
        },
        async getOffice({commit},payload) {
            return await axios.patch(`/api/offices/${id}`, payload).then((res) => {
                commit('setOffice', res.data.user);
            }).catch((err) => {
                throw err.response
            })
        },
        async createOffice({ commit }, office) {
                return await axios.post('/api/offices' , office).then((res) => {
                    return res.data
                }).catch((err) => {
                    throw(err)
                })

        },
        async updateOffice({ commit }, {id, office}) {
            return await axios.put('/api/offices/' + id, office).then((res) => {
                return res.data
            }).catch((err) => {
                throw(err)
            })

        }
    }
  };
