<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "postHeaderButton"
}
</script>

<style scoped>
button {
  display: flex;
  flex-direction: row;
  padding: 6px 12px;
  height: 32px;
  border-radius: 16px;
  background-color: transparent;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: #7A7D83;
  border: none;
}
</style>