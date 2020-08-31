import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('jwt') || '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
    },
    actions: {
        registerAsync({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.post("http://localhost:8080/users/", user)
                    .then(resp => {
                        const token = resp.data.access_token
                        const user = resp.data.user
                        console.log(resp)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log(err)
                        commit('auth_error', err)
                        reject(err)
                    })
            })
        }
    }
})