<template>
<input class="input" type="text" placeholder="Search...">
  <slot></slot>
  <button class="btn">Search</button>
</template>

<script>
export default {
  name: "searchInput"
}
</script>

<style scoped>
.input {
  height: 30px;
  width: 200px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 5px;
}
.btn {
  height: 52px;
  padding: 10px 15px;
  margin-top: 15px;
  background: none;
  color: gray;
  border: 2px solid teal;
  border-radius: 5px;
}
.btn:active {
  background-color: gray;
}
</style>
