import {createStore} from 'vuex'
import currentTab from "@/store/modules/currentTab";

export default createStore({
    state: {
        currentTab: { key: 'vacancyFrame', tab: 'Вакансии', title: 'Каталог вакансий' }
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

    modules: {
        currentTab
    }
})
