<template>
  <div class="menu">
    <headerButton class="button">Все</headerButton>
    <headerButton class="button">Frontend</headerButton>
    <headerButton class="button">Дизайн</headerButton>
    <headerButton class="button">Backend</headerButton>
    <headerButton class="button">Маркетинг</headerButton>
    <headerButton class="button">SEO</headerButton>
    <headerButton class="button">SMM</headerButton>
    <headerButton class="button">Брендинг</headerButton>
    <headerButton class="button">Тестирование</headerButton>
    <headerButton class="button">Видео</headerButton>
    <headerButton class="button">Таргетинг</headerButton>
    <headerButton class="button">Другое</headerButton>
  </div>
</template>

<script>
import headerButton from "@/components/UI/headerButton";

export default {
  name: "headerMenu",

  components: {
    headerButton
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

.button {
  margin-top: 32px;
}

.button:hover {
  margin-top: 32px;
  background: #11316A;
  box-shadow: 0px 4px 6px rgba(17, 49, 106, 0.15), 0px 8px 20px rgba(17, 49, 106, 0.07);
  color: #FFFFFF;
  transition: 0.2s;
}

</style>