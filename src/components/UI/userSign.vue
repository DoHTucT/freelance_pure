<template>
  <div class="frame">
    <div class="user-pic"></div>
    <button class="user-name">UserName<img src="../../../public/pic/VectorSmall.svg" height="4" width="8"/>
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
  align-items: center;
}

.user-pic {
  display: flex;
  float: left;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: #185A97;
}

.user-name {
  display: flex;
  float: left;
  height: 24px;
  margin-right: 12px;
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
  margin-top: 7px;
  margin-left: 4px;
}
</style>