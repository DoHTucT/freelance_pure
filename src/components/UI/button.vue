<template>
<button><slot/></button>
</template>

<script>
export default {
  name: "myButton"
}
</script>

<style scoped>
button{
  display: ;
  text-align: center;
  margin-top: 15px;
  height: 52px;
  width: 150px;
  border: 2px solid rebeccapurple;
  border-radius: 5px;
  background: none;
}

button:active{
  background-color: gray;
}
slot{
  text-align: center;
}
</style>
