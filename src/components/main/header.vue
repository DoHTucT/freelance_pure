<template>
  <div class="post-header">
    <div class="h1">{{ currentTab.title }}</div>
    <searchInput class="search"/>
    <headerMenu/>
  </div>
</template>

<script>
import searchInput from "@/components/UI/searchInput";
import headerMenu from "@/components/main/headerMenu";
import {mapState} from 'vuex'

export default {
  name: "myHeader",

  components: {
    searchInput,
    headerMenu
  },

  computed:
      mapState(['currentTab']),


}
</script>

<style scoped>
.post-header {
  margin-top: 140px;
}

.h1 {
  margin-top: 36px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
}

.search {
  margin-top: 28px;
}
</style>