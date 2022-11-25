<template>
  <div class="menu">
    <postHeaderButton class="button">Все</postHeaderButton>
    <postHeaderButton class="button">Frontend</postHeaderButton>
    <postHeaderButton class="button">Дизайн</postHeaderButton>
    <postHeaderButton class="button">Backend</postHeaderButton>
    <postHeaderButton class="button">Маркетинг</postHeaderButton>
    <postHeaderButton class="button">SEO</postHeaderButton>
    <postHeaderButton class="button">SMM</postHeaderButton>
    <postHeaderButton class="button">Брендинг</postHeaderButton>
    <postHeaderButton class="button">Тестирование</postHeaderButton>
    <postHeaderButton class="button">Видео</postHeaderButton>
    <postHeaderButton class="button">Таргетинг</postHeaderButton>
    <postHeaderButton class="button">Другое</postHeaderButton>
  </div>
</template>

<script>
import postHeaderButton from "@/components/UI/postHeaderButton";

export default {
  name: "postHeaderMenu",

  components: {
    postHeaderButton
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  height: 96px;
  border-bottom: 1px solid #E0E7EE;
}
.button{
  margin-top: 32px;
}

</style>