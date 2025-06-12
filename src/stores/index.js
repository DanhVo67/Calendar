import { registerTS } from "vue/compiler-sfc";
import { createStore } from "vuex";

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        },
        CLEAR_USER (state) {
            state.user = null
        }
    },
    actions: {
        // async login ({conmit}, details){

        // },

        // async register ({commit}, details) {

        // },
        // async logout ({commit}){

        // },
    },

})