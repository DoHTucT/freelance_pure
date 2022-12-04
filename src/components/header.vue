<template>
  <div class="post-header">
    <div id="h1">Каталог вакансий</div>
    <searchInput class="search"/>
    <postHeaderMenu/>
  </div>
</template>

<script>
import searchInput from "@/components/UI/searchInput";
import postHeaderMenu from "@/components/UI/headerMenu";

export default {
  name: "postHeader",

  components: {
    searchInput,
    postHeaderMenu
  }
}
</script>

<style scoped>
.post-header{
  margin-top: 72px;
}
#h1 {
  margin-top: 36px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
}
.search{
  margin-top: 28px;
}
</style>