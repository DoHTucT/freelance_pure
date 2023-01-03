<template>
  <div class="row">
    <input type="text"
           id="account"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           required>
    <label for="account">{{ labelValue }}</label>
  </div>
</template>

<script>
export default {
  name: "accountInput",
  props: ['labelValue', 'modelValue'],
  emits: ['update:modelValue'],
}
</script>

<style scoped>
.row input {
  box-sizing: border-box;
  padding: 0 12px;
  width: 592px;
  height: 56px;
  margin-bottom: 32px;
  border: 1px solid #E0E7EE;
  border-radius: 8px;
  z-index: 2;
  background-color: #FFFFFF;
  outline: none;
}

.row label {
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
  z-index: 3;
  position: absolute;
  margin-left: 16px;
  transform: translateY(-72px);
  pointer-events: none;
}

.row input:focus,
.row input:valid {
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #252931;
  font-size: 16px;
  padding-top: 25px;
}

.row input:focus + label,
.row input:valid + label {
  transform: translateY(-82px);
  transition: 0.5s;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #7A7D83;
}
</style>