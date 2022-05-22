import axios from "axios";
import store from '@/store';

export default {
    namespaced: true,
    state: {
        user: null,
        userName: null,
        userEmail: null,
        userAvatar: null,
        roles: [],
        permissions: [],
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        user (state, payload) {
            if(payload){
                if (payload.name) {
                    state.userName = payload.name
                }
                if (payload.email) {
                    state.userEmail = payload.email
                }
                if (payload.avatar) {
                    state.userAvatar = payload.avatar
                }
            }
          },
          SET_ROLES: (state, roles) => {
            state.roles = roles;
          },
          SET_PERMISSIONS: (state, permissions) => {
            state.permissions = permissions;
          },
    },
    getters: {
        user(state) {
            return state.user;
        },
        verified(state) {
            if (state.user) return state.user.email_verified_at
            return null
        },
        id(state) {
            if (state.user) return state.user.id
            return null
        },
        permissions: state => state.permissions,
        roles: state => state.roles,
    },
    actions: {
        async login({ dispatch }, payload) {
            try {
                // store.dispatch('asideLoaderToggle', true)
                await axios.get('/sanctum/csrf-cookie');

               return await axios.post('/api/login', payload).then((response) => {
                    dispatch('getUser')
                    // store.dispatch('asideLoaderToggle', false)
                    return response
                }).catch((err) => {
                    // store.dispatch('asideLoaderToggle', false)
                    throw(err)
                });
            } catch (e) {
                // store.dispatch('asideLoaderToggle', false)
                throw e
            }

        },

        async register({ dispatch }, payload) {
            try {

                await axios.post('/api/register' , payload).then((res) => {
                    return dispatch('login' , { 'email' : payload.email , 'password' : payload.password})
                }).catch((err) => {
                    throw(err.response)
                })
            } catch (e) {
                throw (e)
            }
        },
        async logout({ commit }) {
                await axios.post('/api/logout').then(response => {
                    commit('setUser', null);
                    commit('user', null);
                    return response
                }).catch((err) => {
                    throw(err)
                })

        },
        async getUser({commit}) {
            return await axios.get('/api/user').then((res) => {

                console.log(res.data)
                const { roles, permissions } = res.data
                commit('setUser', res.data);
                commit('user', res.data);
                commit('SET_ROLES', roles)
                commit('SET_PERMISSIONS', permissions)
                return res.data
            }).catch((err) => {
                throw(err)
            })
        },
        async profile({commit},payload) {
            return await axios.patch('/api/profile', payload).then((res) => {
                commit('setUser', res.data.user);
                commit('user', res.data.user);
                return res.data
            }).catch((err) => {
                throw err
            })
        },
        async password({commit},payload) {
            return await axios.patch('/api/password', payload).then((res) => {
                return res.data
            }).catch((err) => {
                throw err
            })
        },

        async verifyResend({dispatch} , payload){
            let res = await axios.post('/api/verify-resend' , payload)
            if (res.status != 200) throw res
            return res
        },
        async verifyEmail({dispatch} , payload){
            let res = await axios.post('/api/verify-email/' + payload.id + '/' + payload.hash)
            if (res.status != 200) throw res
            dispatch('getUser')
                return res

        },
    }
  };
