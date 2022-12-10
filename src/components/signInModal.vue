<template>
  <div @click="closeModal" class="background">
    <div @click.stop class="signIn-frame">
      <div class="signIn-container">
        <div class="signIn-menu">
          <div class="button">Вход</div>
          <div class="button">Регистрация</div>
        </div>
        <div class="content-frame">
          <signInContent></signInContent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signInContent from "@/components/signInContent";
import registerContent from "@/components/registerContent";

export default {
  name: "signInModal",
  components: {
    signInContent,
    registerContent
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    closeModal() {
      this.$emit('close');
    }
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
  background: rgba(37, 41, 49, 0.6);;
  backdrop-filter: blur(3px);
  z-index: 5;
}

.signIn-frame {
  position: fixed;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 384px;
  height: 496px;
  background: #FFFFFF;
  box-shadow: 0px 40px 100px rgba(17, 49, 106, 0.07), 0px 15px 32px rgba(17, 49, 106, 0.05), 0px 3px 9px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}

.signIn-container {
  width: 320px;
  margin: 29px 32px 40px;
}

.signIn-menu {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #11316A;
  margin-bottom: 23px;
}

</style>
