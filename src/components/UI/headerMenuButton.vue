<template>
  <button class="btn">
    <slot></slot>
  </button>


</template>

<script>
export default {
  name: "headerMenuButton"
}
</script>

<style scoped>
.btn {
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #252931;
  opacity: 0.75;
  margin-right: 72px;
}

.btn:active {
  background-color: gray;
}
</style>
