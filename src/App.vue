<template>
  <div class="app">
    <router-view></router-view>
    <v-modal/>
  </div>
</template>

<script>

import VModal from "@/components/modal/VModal";

export default {
  name: 'Main',

  components: {
    VModal
  }


}


</script>

<style>
.app {
  background-color: #F9FBFF;
}

</style>
