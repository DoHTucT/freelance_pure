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

}
.btn:active {
  background-color: gray;
}
</style>
