<template>
  <div class="headerMenu">
    <div class="line"/>

    <headerMenuButton
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
    >
      {{ tab }}
    </headerMenuButton>

    <!--    <header-menu-button class="active">Вакансии</header-menu-button>-->
    <!--    <header-menu-button>Специалисты</header-menu-button>-->
    <!--    <header-menu-button>Компании</header-menu-button>-->
    <userSign class="sign"/>
  </div>
</template>

<script>
import headerMenuButton from "@/components/UI/headerMenuButton";
import userSign from "@/components/UI/userSign";
import vacancyAnonce from "@/components/UI/vacancyAnonce";
import specialistAnonce from "@/components/UI/specialistAnonce";

export default {
  name: "headerMenu",

  components: {
    headerMenuButton,
    userSign,
    vacancyAnonce,
    specialistAnonce
  },

  data() {
    return {
      currentTab: 'vacancyAnonce',
      tabs: ['vacancyAnonce', 'specialistAnonce', 'Компании']
    }
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
  padding: 0;
  gap: 35px;
  height: 24px;
}

.tab-button.active {
  color: #11316A;
  opacity: 1;
}

.line {
  position: relative;
  width: 76px;
  height: 2px;
  top: 40px;
  left: 106px;
  background: #11316A;
  border-radius: 1px;
}
</style>
