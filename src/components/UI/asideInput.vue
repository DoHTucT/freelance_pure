<template>
  <div class="row">
    <input type="text" id="live" required>
    <label for="live">{{ placeholderValue }}</label>
    <svg id="svg" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke="#B9BCC1" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "asideInput",
  props: ['placeholderValue']
}
</script>

<style scoped>
.row {
}

.row input {
  box-sizing: border-box;
  padding: 0 12px;
  width: 384px;
  height: 56px;
  border: 1px solid #E0E7EE;
  border-radius: 8px;
  z-index: 2;
  background-color: #F9FBFF;
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
  transform: translateY(15px);
  pointer-events: none;
}

.row input:focus,
.row input:valid {
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #252931;
  background-color: #FFFFFF;
  font-size: 16px;
  padding-top: 25px;
}

.row input:focus + label,
.row input:valid + label {
  transform: translateY(3px);
  transition: 0.5s;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #7A7D83;
}

/*input:focus::-webkit-input-placeholder {*/
/*  font-weight: 600;*/
/*  font-size: 12px;*/
/*  line-height: 150%;*/
/*  letter-spacing: 0.01em;*/
/*  color: #7A7D83;*/
/*  position: relative;*/
/*  bottom: 25px;*/
/*}*/
/*input:focus:-moz-placeholder {*/
/*  font-weight: 600;*/
/*  font-size: 12px;*/
/*  line-height: 150%;*/
/*  letter-spacing: 0.01em;*/
/*  color: #7A7D83;*/
/*  position: relative;*/
/*  bottom: 25px;*/
/*}*/

#svg {
  display: flex;
  position: relative;
  z-index: 3;
  left: 350px;
  bottom: 30px;
}
</style>