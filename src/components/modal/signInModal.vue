<template>
  <div @click="closeModal"
       class="background"
       @hideModal="hideModal">
    <div @click.stop :class="['signIn-frame', { hide: hideModal === true }]">
      <div class="signIn-container">
        <div class="signIn-menu">
          <div v-for="tab in tabs"
               :key="tab"
               :class="['tab-button', { active: currentTab === tab.key }]"
               @click="currentTab = tab.key">
            {{ tab.title }}
          </div>

        </div>
        <div class="content-frame">
          <component :is="currentTab" class="tab"/>
        </div>
      </div>
      <img @click="closeModal"
           class="cross"
           src="../../../public/pic/close.svg" alt="">
    </div>
  </div>
</template>

<script>
import signInContent from "@/components/modal/signInContent";
import registerContent from "@/components/modal/registerContent";


export default {
  name: "signInModal",
  components: {
    signInContent,
    registerContent
  },

  data() {
    return {
      currentTab: 'signInContent',
      tabs: [{ key: 'signInContent', title: 'Вход' }, { key: 'registerContent', title: 'Регистрация' }],

    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },

  },

  methods: {
    closeModal() {
      this.$emit('close');
    },

    hideModal() {
     return this.hideModal;
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

.signIn-frame.hide {
  z-index: -100;
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
  margin-bottom: 23px;
}

.tab-button {
  color: #7A7D83;
  cursor: pointer;
}

.tab-button.active {
  color: #11316A
}

.cross {
  position: relative;
  left: 350px;
  bottom: 480px;
  cursor: pointer;
}
</style>
