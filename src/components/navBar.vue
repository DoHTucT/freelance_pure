<template>
  <div class="header">
    <div class="container">
      <div id="logoSquare">
        <div id="square1"/>
        <div id="square2"/>
        <div id="square3"/>
        <div id="square4"/>
      </div>
      <div id="logo">
        <img src="../../public/pic/sourcestore.svg"/>
      </div>
      <headerMenu/>
    </div>
  </div>
</template>

<script>
import headerMenu from "@/components/UI/navBarMenu";

export default {
  name: "myHeader",

  components: {
    headerMenu
  }
}


</script>

<style scoped>
.header {
  position: fixed;
  box-sizing: border-box;
  height: 72px;
  width: 100%;
  top: 0;
  border-bottom: 1px solid #E0E7EE;
  background-color: #F9FBFF;
}

.container {
  width: 1216px;
  margin-left: auto;
  margin-right: auto;
}

#logoSquare {
  display: grid;
  grid-template-rows: 12px 12px;
  grid-template-columns: 12px 12px;
  padding-top: 24px;
  float: left;
}

#square1 {
  background: #11518F;
}

#square2 {
  background: #104080;
}

#square3 {
  background: #185A97;
}

#square4 {
  background: #11316A;
}

#logo {
  float: left;
  padding-top: 32px;
  margin-left: 9px;
}
</style>
