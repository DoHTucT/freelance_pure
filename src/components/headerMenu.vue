<template>
  <div class="headerMenu">
    <header-menu-button>11111</header-menu-button>
    <header-menu-button>22222</header-menu-button>
    <header-menu-button>33333</header-menu-button>
    <header-menu-button>44444</header-menu-button>
    <header-menu-button>55555</header-menu-button>
    <header-menu-button>66666</header-menu-button>
    <header-menu-button>77777</header-menu-button>
  </div>
</template>

<script>
import headerMenuButton from "@/components/UI/headerMenuButton";

export default {
  name: "headerMenu",
  components:{
  headerMenuButton,
  }
}
</script>

<style scoped>
.headerMenu {
  height: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  justify-items: stretch;
}
</style>
