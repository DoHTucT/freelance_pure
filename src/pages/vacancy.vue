<template>
  <navBar/>
  <div class="container">

    <myHeader/>
    <asideMenu/>
    <vacancyFrame/>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import myHeader from "@/components/header";
import asideMenu from "@/components/asideMenu";
import vacancyFrame from "@/components/vacancyFrame";

export default {
  name: "vacancy",

  components: {
    navBar,
    myHeader,
    asideMenu,
    vacancyFrame,
  }
}
</script>

<style scoped>
.container {
  width: 1216px;
  margin-left: auto;
  margin-right: auto;
}
</style>