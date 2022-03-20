import axios from "axios";

export default {
    namespaced: true,
    state: {
        users: [],
        user: null
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
        setUser (state, payload) {
            state.user = payload;
          }
    },
    getters: {
        user(state) {
            return state.user;
        },
        users(state) {
            return state.users
        }
    },
    actions: {
        async getUsers({commit}) {
            return await axios.get('/api/users').then((res) => {
                commit('setUsers', res.data.data);
                return res
            }).catch((err) => {
                throw(err)
            })
        },
        async getUser({commit},payload) {
            return await axios.patch(`/api/users/${id}`, payload).then((res) => {
                commit('setUser', res.data.user);
            }).catch((err) => {
                throw err.response
            })
        },
        async createUser({ commit }, user) {
                return await axios.post('/api/users' , user).then((res) => {
                    return res.data
                }).catch((err) => {
                    throw(err)
                })

        },
        async updateUser({ commit }, {id, user}) {
            return await axios.put('/api/users/' + id, user).then((res) => {
                return res.data
            }).catch((err) => {
                throw(err)
            })

        }
    }
  };
