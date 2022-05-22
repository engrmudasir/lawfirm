import axios from "axios";

export default {
    namespaced: true,
    state: {
        roles: [],
        role: null
    },
    mutations: {
        setRoles(state, payload) {
            state.roles = payload;
        },
        setRole (state, payload) {
            state.role = payload;
        },
        resetToNull ( state, payload ) {
            state.roles = []
            state.role = null
        }

    },
    getters: {
        role(state) {
            return state.role;
        },
        roles(state) {
            return state.roles
        }
    },
    actions: {
        async getRoles({commit}) {

            return await axios.get('/api/roles').then((res) => {
                commit('setRoles', res.data.data);
                return res
            }).catch((err) => {
                throw(err)
            })
        },
        async getRole({commit},payload) {

            return await axios.get(`/api/roles/${payload}`).then((res) => {
                commit('setRole', res.data.data)
                return res
            }).catch((err) => {
                throw (err)
            })
        },
        async createRole({ commit }, role) {

                return await axios.post('/api/roles' , role).then((res) => {
                    return res.data
                }).catch((err) => {
                    throw(err)
                })

        },
        async updateRole({ commit }, role) {

            return await axios.put('/api/roles/' + role.id, _.omit(role,"id")).then((res) => {
                return res.data
            }).catch((err) => {
                throw(err)
            })

        }
    }
  };
