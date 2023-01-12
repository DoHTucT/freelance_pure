<template>
  <div
      v-if="$store.state.modalComponent !==''"
      class="background"
      @click="closeModal"
  >
    <component :is="$store.state.modalComponent"
    @click.stop
    />
  </div>
</template>

<script>
import signInModal from "@/components/modal/signInModal";

export default {
  name: "VModal",
  components: {
    signInModal,
  },

  methods: {
    closeModal() {
      this.$store.dispatch('updateModalComponent', '');
    },
  }


}
</script>

<style scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  bottom: 0px;
  background: rgba(37, 41, 49, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}

</style>