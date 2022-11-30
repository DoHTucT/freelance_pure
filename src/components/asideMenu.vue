<template>
  <div class="menu">
    <asideInput class="input" placeholderValue="Город"/>
    <asideInput class="input" placeholderValue="Вознаграждение"/>
    <asideInput class="input" placeholderValue="Тип работы"/>
    <asideInput class="input" placeholderValue="Занятость"/>
    <asideInput class="input" placeholderValue="Опыт работы"/>
  </div>
</template>

<script>
import asideInput from "@/components/UI/asideInput";

export default {
  name: "asideMenu",
  props: ['placeholderValue'],
  components: {
    asideInput
  }
}
</script>

<style scoped>
.menu {
  float: left;
  width: 384px;
  height: 408px;
  margin-top: 40px;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #7A7D83;
}
</style>