<template>
  <div class="">
    <input
        class="input"
        type="text"
        placeholder="Вы ищите..."
    v-model="searchInput"
    >
    <img src="../../../public/pic/Search.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "searchInput",

  data(){
    return{
    searchInput:''
    }
  }
}
</script>

<style scoped>
.input {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  width: 1216px;
  height: 56px;
  background: #FFFFFF;
  border: 1px solid #E0E7EE;
  border-radius: 8px;
  z-index: 1;
  outline: none;
}

input::-webkit-input-placeholder {
  width: 84px;
  height: 24px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
}

img {
  position: relative;
  float: right;
  bottom: 35px;
  right: 21px;
  z-index: 2;
}

</style>
