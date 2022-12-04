import {createStore} from 'vuex'

export default createStore({
    state: {
        currentTab: 'vacancyAnonce'
    },
    getters: {

    },
    mutations: {
        setCurrentTab(state, value) {
            state.currentTab = value;
        }
    },
    actions: {
        updateCurrentTab(context, value) {
            context.commit('setCurrentTab', value);
        }
    },
    modules: {}
})
