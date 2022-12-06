<template>
  <div class="headerMenu">
<!--    <div class="line"/>-->

    <headerMenuButton
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="handleChangeTab(tab)"
    >
      {{ tab }}
    </headerMenuButton>

    <userSign class="sign"/>
  </div>
</template>

<script>
import headerMenuButton from "@/components/UI/navBarButton";
import userSign from "@/components/UI/userSign";
import vacancyAnonce from "@/components/vacancyAnonce";
import specialistAnonce from "@/components/specialistAnonce";

export default {
  name: "navBarMenu",

  components: {
    headerMenuButton,
    userSign,
    vacancyAnonce,
    specialistAnonce
  },

  data() {
    return {
      currentTab: 'vacancyAnonce',
      tabs: ['vacancyAnonce', 'specialistAnonce', 'Компании'],
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
  gap: 35px;
  height: 25px;
}

.tab-button.active {
  color: #11316A;
  opacity: 1;
  border-bottom: 2px solid #11316A;
  padding-bottom: 19px;
}

</style>
