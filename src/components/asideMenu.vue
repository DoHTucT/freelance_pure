<template>
  <div class="menu">
    <asideInput class="input"
                placeholderValue="Город"
                v-model="cityInput"
    />
    {{ cityInput }}
    <asideInput class="input"
                placeholderValue="Вознаграждение"
                v-model="rewardUInput"
    />
    <asideInput class="input"
                placeholderValue="Тип работы"
                v-model="typeInput"
    />
    <asideInput class="input"
                placeholderValue="Занятость"
                v-model="occupationInput"
    />
    <asideInput class="input"
                placeholderValue="Опыт работы"
                v-model="experienceInput"
    />
  </div>
</template>

<script>
import asideInput from "@/components/UI/asideInput";

export default {
  name: "asideMenu",

  props: ['placeholderValue'],

  components: {
    asideInput
  },

  data() {
    return {
      cityInput: '',
      rewardUInput: '',
      typeInput: '',
      occupationInput: '',
      experienceInput: '',
    }
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