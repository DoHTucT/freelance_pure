<template>
  <div class="frame">
    <component :is="currentTab.key"></component>

  </div>
</template>

<script>
import vacancyAnonce from "@/components/cards/vacancyAnonce";
import specialistAnonce from "@/components/cards/specialistAnonce";
import vacancyFrame from "@/components/main/vacancyFrame";
import specialistsFrame from "@/components/main/specialistsFrame";

export default {
  name: "mainFrame",


  components: {
    vacancyAnonce,
    specialistAnonce,
    vacancyFrame,
    specialistsFrame
  },

  computed: {
    currentTab: function () {
      return this.$store.state.currentTab
    }
  }
}
</script>

<style scoped>
.frame {
  float: left;
  width: 800px;
  margin-top: 40px;
  margin-left: 30px;
}
</style>