import axios from "axios";

export default {
    namespaced: true,
    state: {
        permissions: [],
        permission: null
    },
    mutations: {
        setPermissions(state, payload) {
            state.permissions = payload;
        },
        setPermission (state, payload) {
            state.permission = payload;
          }
    },
    getters: {
        permission(state) {
            return state.permission;
        },
        permissions(state) {
            return state.permissions
        }
    },
    actions: {
        async getPermissions({commit}) {
            return await axios.get('/api/permissions').then((res) => {
                commit('setPermissions', res.data.data);
                return res
            }).catch((err) => {
                throw(err)
            })
        },
        async getPermission({commit},payload) {
            return await axios.patch(`/api/permissions/${id}`, payload).then((res) => {
                commit('setPermission', res.data.user);
            }).catch((err) => {
                throw err.response
            })
        },
        async createPermission({ commit }, permission) {
                return await axios.post('/api/permissions' , permission).then((res) => {
                    return res.data
                }).catch((err) => {
                    throw(err)
                })

        },
        async updatePermission({ commit }, {id, permission}) {
            return await axios.put('/api/permissions/' + id, permission).then((res) => {
                return res.data
            }).catch((err) => {
                throw(err)
            })

        }
    }
  };
