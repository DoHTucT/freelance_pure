<template>
  <navBar/>
  <div class="container">

    <myHeader/>
    <asideMenu/>
    <mainFrame/>
  </div>
</template>

<script>
import navBar from "@/components/main/navBar";
import myHeader from "@/components/main/header";
import asideMenu from "@/components/main/asideMenu";
import mainFrame from "@/components/main/mainFrame";

export default {
  name: "vacancy",

  components: {
    navBar,
    myHeader,
    asideMenu,
    mainFrame,
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