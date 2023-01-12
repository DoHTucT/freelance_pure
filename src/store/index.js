import {createStore} from 'vuex'
import navBarCurrentTab from "@/store/modules/navBarCurrentTab";

export default createStore({
    state: {
        currentTab: {key: 'vacancyFrame', tab: 'Вакансии', title: 'Каталог вакансий'},
        modalComponent: ''
    },

    getters: {},

    mutations: {
        setCurrentTab(state, value) {
            state.currentTab = value;
        },
        setModalComponent(state, value) {
            state.modalComponent = value;
        },
    },

    actions: {
        updateCurrentTab(context, value) {
            context.commit('setCurrentTab', value);
        },
        updateModalComponent(context, value) {
            context.commit('setModalComponent', value);
        }
    },

    modules: {
        navBarCurrentTab
    }
})
