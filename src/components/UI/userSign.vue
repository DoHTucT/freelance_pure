<template>
  <div class="frame" @click="$router.push('/account')">
    <img class="user-pic" src="../../../public/pic/ava.png" alt="" height="24px" width="24px">
    <button class="user-name">Ярославцев Иван<img src="../../../public/pic/VectorSmall.svg" height="4" width="8"/>
    </button>

  </div>
</template>

<script>
export default {
  name: "userSign"
}
</script>

<style scoped>
.frame {
  display: flex;
  flex-direction: row;
  float: left;
  height: 25px;
  align-items: center;
  margin-bottom: 16px;
}

.user-pic {
  position: relative;
  bottom: 4px;
  display: flex;
  float: left;
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.user-name {
  display: flex;
  float: left;
  height: 24px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #7A7D83;
  background-color: transparent;
  border: none;
}
img {
  display: flex;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
</style>