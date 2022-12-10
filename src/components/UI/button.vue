<template>
  <button>
    <slot/>
  </button>
</template>

<script>
export default {
  name: "myButton"
}
</script>

<style scoped>
button {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  width: 176px;
  height: 56px;
  background: #11316A;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

slot {
  text-align: center;
}
</style>
