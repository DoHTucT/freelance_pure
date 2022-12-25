<template>
  <div class="frame">
    <component :is="currentTab.key"></component>

  </div>
</template>

<script>
import vacancyAnonce from "@/components/vacancyAnonce";
import specialistAnonce from "@/components/specialistAnonce";
import vacancyFrame from "@/components/vacancyFrame";
import specialistsFrame from "@/components/specialistsFrame";

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