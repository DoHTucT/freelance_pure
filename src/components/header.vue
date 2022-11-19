<template>
  <div>
    <div class="header">
      <h2>Freelance_HUB</h2>
      <search-input/>
      <my-button
          class="sign"
          @click="showSign"
      >Sign in
      </my-button>
      <transition name="slide-fade">
      <sign v-model:show="signVisible"/>
      </transition>
    </div>
    <div class="menu">
      <header-menu/>
    </div>
  </div>
</template>

<script>
import searchInput from "@/components/UI/searchInput";
import headerMenu from "@/components/headerMenu";
import myButton from "@/components/UI/button"
import sign from "@/components/sign";

export default {
  name: "myHeader",

  components: {
    searchInput,
    headerMenu,
    myButton,
    sign,
  },
  data() {
    return {
      signVisible: false
    }
  },
  methods: {
    showSign() {
      this.signVisible = true;
    },
  }
}

</script>

<style scoped>
.header {
  display: flex;
  min-height: 90px;
}

.sign {
  text-align: center;
  position: absolute;
  right: 20px;
}

h2 {
  padding: 20px;
}


.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
