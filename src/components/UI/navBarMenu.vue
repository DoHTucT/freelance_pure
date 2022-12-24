<template>
  <div class="headerMenu">
    <signInModal
        v-show="isShowModal"
        :show="isShowModal"
        @close="toggleModal"/>
    <headerMenuButton
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab.key }]"
        @click="$router.push('/'), handleChangeTab(tab)"
    >
      {{ tab.tab }}
    </headerMenuButton>
    <myButton @click="toggleModal" class="sign-button">Войти</myButton>
    <userSign class="sign"/>
  </div>
</template>

<script>
import headerMenuButton from "@/components/UI/navBarButton";
import userSign from "@/components/UI/userSign";
import myButton from "@/components/UI/button";
import signInModal from "@/components/signInModal";

export default {
  name: "navBarMenu",

  components: {
    headerMenuButton,
    userSign,
    myButton,
    signInModal,
  },

  data() {
    return {
      currentTab: {key: 'vacancyFrame', tab: 'Вакансии', title: 'Каталог вакансий'},
      tabs: [{key: 'vacancyFrame', tab: 'Вакансии', title: 'Каталог вакансий'},
        {key: 'specialistsFrame', tab: 'Специалисты', title: 'Каталог специалистов'},
        {key: 'company', tab: 'Компании', title: 'Каталог компаний'}],

      isShowModal: false,
    }
  },

  computed: {
    currentTab: function () {
      return this.$store.state.currentTab
    }
  },

  methods: {
    handleChangeTab(tab) {
      this.$store.dispatch('updateCurrentTab', tab.key)
    },

    toggleModal() {
      this.isShowModal = !this.isShowModal
    },
  }
}

</script>

<style scoped>
.headerMenu {
  margin-top: 30px;
  float: right;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  height: 25px;
}

.tab-button.active {
  color: #11316A;
  opacity: 1;
  border-bottom: 2px solid #11316A;
  padding-bottom: 19px;
  transition: 0.2s;

}

.sign-button {
  position: fixed;
  left: 1170px;
  top: 60px;
  width: 150px;
  height: 25px;
}
</style>
