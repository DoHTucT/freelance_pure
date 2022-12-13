<template>
  <navBar/>
  <div class="container">

    <myHeader/>
    <asideMenu/>
    <mainFrame/>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import myHeader from "@/components/header";
import asideMenu from "@/components/asideMenu";
import mainFrame from "@/components/mainFrame";

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