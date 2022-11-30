<template>
  <div class="frame">
    <component :is="currentTab"></component>
<!--    <vacancyAnonce/>-->
<!--    <specialistAnonce/>-->

  </div>
</template>

<script>
import vacancyAnonce from "@/components/UI/vacancyAnonce";
import vacancyAnonceId2Temp from "@/components/UI/vacancyAnonceId2Temp";
import vacancyAnonceId3Temp from "@/components/UI/vacancyAnonceId3Temp";
import vacancyAnonceInactive from "@/components/UI/vacancyAnonceInactive";
import specialistAnonce from "@/components/UI/specialistAnonce";

export default {
  name: "vacancyFrame",


  components: {
    vacancyAnonce,
    vacancyAnonceId2Temp,
    vacancyAnonceId3Temp,
    vacancyAnonceInactive,
    specialistAnonce,
  },
  data() {
    return {
      vacancy: [
        {id: 1, component: vacancyAnonce},
        {id: 2, component: vacancyAnonceId2Temp},
        {id: 3, component: vacancyAnonceId3Temp}
      ],

      specialists: [
        {id: 1}, {id: 2}, {id: 3}
      ]
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