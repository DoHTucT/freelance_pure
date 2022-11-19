<template>
 <div class="app">
  <my-header/>
   <my-body/>
   <my-footer/>
 </div>
</template>

<script>
import myHeader from "@/components/header";
import myBody from "@/components/body";
import myFooter from "@/components/footer";


export default {
  components: {
    myHeader,
    myBody,
    myFooter
  }
}


</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
