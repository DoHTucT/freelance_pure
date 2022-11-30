<template>
  <my-header/>
  <div class="container">

    <postHeader/>
    <asideMenu/>
    <vacancyFrame/>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myFooter from "@/components/footer";
import postHeader from "@/components/postHeader";
import asideMenu from "@/components/asideMenu";
import vacancyFrame from "@/components/vacancyFrame";

export default {
  name: "vacancy",

  components: {
    myHeader,
    myFooter,
    postHeader,
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