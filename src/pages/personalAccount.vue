<template>
  <div class="">
    <navBar/>
    <div class="container">
      <div class="account-header">
        <div class="avatar">
          <img class="avatar-main-layer" src="../../public/pic/ava@2x.png" height="80" width="80"/>
          <img class="avatar-hover-layer" src="../../public/pic/avaHover.svg" height="80" width="80"/>
        </div>
        <div class="your-profile">Ваш профиль</div>
        <div class="h1">Ярославцев Иван</div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";

export default {
  name: "personalAccount",
  components: {
    navBar
  }
}
</script>

<style scoped>
.container {
  width: 1216px;
  margin-left: auto;
  margin-right: auto;
}

.account-header {
  margin-top: 116px;
}

.avatar {
  float: left;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 24px;

}

.avatar-main-layer{
  z-index: 2;
}

.avatar-hover-layer{
  position: relative;
  bottom: 85px;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
}
.avatar-hover-layer:hover {
opacity: 0.7;
}

.your-profile {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
  padding-top: 6px;
}

.h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
}
</style>