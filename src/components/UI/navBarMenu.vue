<template>
  <div class="headerMenu">
    <signInModal
        v-show="isShowModal"
        :show="isShowModal"
        @close="toggleModal"/>
    <headerMenuButton
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="handleChangeTab(tab)"
    >
      {{ tab }}
    </headerMenuButton>
    <myButton @click="toggleModal" class="sign-button">Войти</myButton>
    <userSign class="sign"/>
  </div>
</template>

<script>
import headerMenuButton from "@/components/UI/navBarButton";
import userSign from "@/components/UI/userSign";
import vacancyAnonce from "@/components/vacancyAnonce";
import specialistAnonce from "@/components/specialistAnonce";
import myButton from "@/components/UI/button";
import signInModal from "@/components/signInModal";

export default {
  name: "navBarMenu",

  components: {
    headerMenuButton,
    userSign,
    vacancyAnonce,
    specialistAnonce,
    myButton,
    signInModal,
  },

  data() {
    return {
      currentTab: 'vacancyAnonce',
      tabs: ['vacancyAnonce', 'specialistAnonce', 'Компании'],

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
      this.$store.dispatch('updateCurrentTab', tab)
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
}

.sign-button {
  position: fixed;
  left: 1170px;
  top: 60px;
  width: 150px;
  height: 25px;
}
</style>
