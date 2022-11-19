<template>
<div class="body">
<card/>
  <card/>
  <card/>
  <card/>
  <card/>
  <card/>
  <card/>
  <card/>
</div>
</template>

<script>
import card from "@/components/UI/card";
export default {
  name: "myBody",

  components:{
    card
  }
}
</script>

<style scoped>
.body{
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

</style>
