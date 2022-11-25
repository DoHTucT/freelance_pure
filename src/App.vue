<template>
  <div class="app">
    <div class="container">
      <my-header/>
      <postHeader/>
      <asideMenu/>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myBody from "@/components/body";
import myFooter from "@/components/footer";
import postHeader from "@/components/postHeader";
import asideMenu from "@/components/asideMenu";

export default {
  components: {
    myHeader,
    myBody,
    myFooter,
    postHeader,
    asideMenu,
  }
}


</script>

<style>
.app{
  background-color: #F9FBFF;
}

.container {
  width: 1216px;
  margin-left: auto;
  margin-right: auto;
}


</style>
