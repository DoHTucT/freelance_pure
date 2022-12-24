export default {
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
}