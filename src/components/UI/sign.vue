<template>
  <form class="dialog" v-if="show" @click.stop="hideSign">
    <h4>Sign in</h4>
    <div class="input">
      <input
          v-focus
          type="text"
          placeholder="Login"
      />
      <input
          type="text"
          placeholder="Password"
      />
    </div>
    <div class="buttons">
      <my-button>Sign in</my-button>
      <my-button>Register</my-button>
    </div>
  </form>
</template>

<script>
import myButton from "@/components/UI/button";

export default {
  name: "sign",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },

  components: {
    myButton,
  },
  methods: {
    hideSign() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

.dialog {

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 20px;
  top: 70px;
  margin: auto;
  background: white;
  border: black solid 1px;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
.input{
  display: flex;
  flex-direction: column;
}
input {

  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

my-button {
  text-align: center;
}
</style>
