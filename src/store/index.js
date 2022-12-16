import {createStore} from 'vuex'

export default createStore({
    state: {
        currentTab: 'vacancyFrame'
    },
    getters: {},
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
