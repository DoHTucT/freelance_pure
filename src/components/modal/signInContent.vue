<template>
  <div class="container">
    <input
        v-maska
        data-maska="+7(###) ###-####"
        class="input phone"
        id="tel"
        v-model="signInPhone"
        required>
    <label class="label" for="tel">Ваш телефон</label>
    <input class="input"
           type="password"
           id="pass"
           v-model="signInPassword"
           required>
    <label class="label" for="pass">Ваш пароль</label>
    <div class="checkbox-frame">
      <label class="checkbox-label">
        <input type="checkbox"
               class="checkbox"
        v-model="signInRemember">
        <span class="custom"/>
        <span class="checkbox-text">Запомнить меня</span>
      </label>
      <div class="forgot">Забыли пароль?</div>
    </div>
    <myButton class="button">Войти</myButton>
    <div class="sm-enter-text">Войти через социальные сети:</div>
    <div class="sm-frame">
      <img class="sm" src="../../../public/pic/google.svg" alt="">
      <img class="sm" src="../../../public/pic/facebook.svg" alt="">
      <img class="sm" src="../../../public/pic/linkedin.svg" alt="">
      <img class="sm" src="../../../public/pic/vk.svg" alt="">
      <img class="sm" src="../../../public/pic/twitter.svg" alt="">
    </div>
  </div>
</template>

<script>
import myButton from "@/components/UI/button";
import {vMaska} from "maska";


export default {
  name: "signInContent",
  components: {
    myButton
  },

  directives: {maska: vMaska},

  data() {
    return {
      signInPhone: '',
      signInPassword: '',
      signInRemember: {
        type: Boolean,
        default: false,
      }
    }
  }
}
</script>

<style scoped>
.input {
  box-sizing: border-box;
  padding: 0 12px;
  width: 320px;
  height: 56px;
  margin-bottom: 24px;
  border: 1px solid #E0E7EE;
  border-radius: 8px;
  background-color: #FFFFFF;
  outline: none;
}

.label {
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
  z-index: 3;
  position: absolute;
  margin-left: 16px;
  transform: translateY(-65px);
  pointer-events: none;
}

.input:focus,
.input:valid {
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #252931;
  font-size: 16px;
  padding-top: 25px;
}

.input:focus + .label,
.input:valid + .label {
  transform: translateY(-75px);
  transition: 0.5s;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #7A7D83;
}

.checkbox-frame {
  display: flex;
  flex-direction: row;
  width: 320px;
  margin-bottom: 23px;
}

.checkbox-label {
  cursor: pointer;
  margin-right: 100px;
}

.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom {
  display: inline-block;
  width: 16px;
  height: 16px;
  top: 3px;
  position: relative;
  border: 1px solid #E0E7EE;
  border-radius: 2px;

}

.custom::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  background: #11316A;
  opacity: 0;
  transition: .2s;
}

.checkbox:checked + .custom::before {
  opacity: 1;
}

.checkbox-text {
  display: inline-block;
  position: relative;
  bottom: 2px;
  margin-left: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #252931;
}

.forgot {
  position: relative;
  top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
  color: #11316A;
  cursor: pointer;
}

.button {
  width: 320px;
  height: 56px;
  cursor: pointer;
  margin-bottom: 24px;
}

.sm-enter-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
  padding-top: 10px;
  border-top: 1px solid #E0E7EE;
  margin-bottom: 14px;
}

.sm-frame {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
}

.sm {
  cursor: pointer;
}
</style>