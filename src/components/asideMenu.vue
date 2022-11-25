<template>
  <div class="menu">
    <asideInput class="input" placeholder="Город"/>
    <asideInput class="input" placeholder="Вознаграждение"/>
    <asideInput class="input" placeholder="Тип работы"/>
    <asideInput class="input" placeholder="Занятость"/>
    <asideInput class="input" placeholder="Опыт работы"/>
  </div>
</template>

<script>
import asideInput from "@/components/UI/asideInput";

export default {
  name: "asideMenu",

  components: {
    asideInput
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 384px;
  height: 408px;
  margin-top: 40px;
}

.input {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #7A7D83;
  background-color: transparent;
}
</style>