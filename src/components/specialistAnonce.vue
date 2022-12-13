<template>
  <div class="card" @click="$router.push('/freelancerprofile')">
    <img class="avatar" src="../../public/pic/ava@2x.png"/>
    <div class="content">
      <div class="card-header">
        <div class="specialization">Дизайн и проектирование</div>
        <div class="city">Москва</div>
        <div class="date">
          <img src="../../public/pic/Calendar.svg" alt="" style="margin-right: 6px">
          15.11.2022
        </div>
      </div>
      <div class="name">Ярославцев Иван</div>
      <div class="vacancy-type">
        <div class="payment">
          <div class="option">Вознаграждение:</div>
          <div class="value">от 250 000₽</div>
        </div>
        <div class="type">
          <div class="option">Тип работы:</div>
          <div class="value">Удалённая работа</div>
        </div>
        <div class="experience">
          <div class="option">Опыт:</div>
          <div class="value">от 6 лет</div>
        </div>
      </div>
      <div class="description">
        Добрый день! Ищу студию или компанию, которой я могу предложить свои навыки веб-дизайнера. Мое портфолио
        по ссылке. Также в данный момент продолжаю обучение по специальности «UX/UI Дизайн» в UPROCK.В формате удаленной
        работы более 6 лет.
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "specialistAnonce"
}
</script>

<style scoped>
.card{
  width: 800px;
  height: 272px;
  border-radius: 12px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #E0E7EE;
  cursor: pointer;
}
.card:hover {
  background: #FFFFFF;
  box-shadow: 0px 40px 100px rgba(17, 49, 106, 0.07), 0px 15px 32px rgba(17, 49, 106, 0.05), 0px 3px 9px rgba(0, 0, 0, 0.03);
}

.avatar {
  float: left;
  height: 48px;
  width: 48px;
  margin-left: 32px;
  margin-top: 32px;
}

.content {
  float: left;
  width: 664px;
  margin-top: 32px;
  margin-left: 24px;
}

.card-header {
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 664px;
  gap: 16px;
  height: 15px;
  font-weight: 700;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
}

.specialization {
  justify-content: flex-start;
}

.city {
  justify-content: flex-start;
}

.date {
  position: relative;
  left: 362px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 16px;
  width: 70px;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  text-align: right;
  letter-spacing: 0.01em;
  color: #7A7D83;
}

.name {
  height: 36px;
  margin-bottom: 13px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #11316A;
}

.vacancy-type {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 576px;
  height: 44px;
}

.payment {
  width: 208px;
  height: 44px;
  border-right: 1px solid #E0E7EE;
}

.type {
  width: 208px;
  height: 44px;
  border-right: 1px solid #E0E7EE;
}

.experience {
  width: 208px;
  height: 44px;
}

.option {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #7A7D83;
}

.value {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  width: 664px;
  height: 74px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #252931;
}
</style>