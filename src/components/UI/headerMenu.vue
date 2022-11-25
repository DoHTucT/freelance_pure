<template>
  <div class="headerMenu">
    <header-menu-button>Вакансии</header-menu-button>
    <header-menu-button>Специалисты</header-menu-button>
    <header-menu-button>Компании</header-menu-button>
    <userSign class="sign"/>
  </div>
</template>

<script>
import headerMenuButton from "@/components/UI/headerMenuButton";
import userSign from "@/components/UI/userSign";

export default {
  name: "headerMenu",
  components: {
    headerMenuButton,
    userSign
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

.sign {

}
</style>
