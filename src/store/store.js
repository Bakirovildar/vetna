import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            sliders: [],
            saleProducts: []
        }
    },
    mutations: {
    },
    actions: {

    },
    getters: {
        sliders(state) {
            return state.sliders
        },
        saleProducts(state) {
          return state.saleProducts
        }
    }
})