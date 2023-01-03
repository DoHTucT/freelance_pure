<template>
  <div class="frame">
    <form action="">
      <div class="option">Ваш пол:</div>
      <div class="value">
        <label for="male" class="label">
          <input type="radio"
                 class="radio"
                 name="sex"
                 id="male"
                 @change="$emit('update:modelValue', $event.target.value)"
                 :value="modelValue"
                 value="male">
          <span class="custom"/>
          <span class="text">Мужской</span>
        </label>
      </div>
      <div class="value">
        <label for="female" class="label">
          <input type="radio"
                 class="radio"
                 name="sex"
                 id="female"
                 @change="$emit('update:modelValue', $event.target.value)"
                 :value="modelValue"
                 value="female">
          <span class="custom"/>
          <span class="text">Женский</span>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "accountRadio",
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>

<style scoped>
.frame {
  width: 592px;
  height: 56px;
  border-top: 1px solid #E0E7EE;
  border-bottom: 1px solid #E0E7EE;
  margin-bottom: 32px;
}

form {
  width: 330px;
  height: 24px;
  margin-top: 16px;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
}

.option {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

.value {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

.label {
  cursor: pointer;
}

.radio {
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
  border-radius: 50%;
  border: 1px solid #E0E7EE;
}

.custom::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #11316A;
  opacity: 0;
  transition: .2s;
}

.radio:checked + .custom::before {
  opacity: 1;
}

.text {
  display: inline-block;
  margin-left: 8px;
}

</style>