<template>
  <div class="card" @click="$router.push('/freelancerprofile')">
    <svg class="avatar" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="48" height="48" rx="24" fill="url(#pattern0)"/>
      <rect width="48" height="48" rx="24" fill="url(#pattern1)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_215_218" transform="scale(0.00390625)"/>
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_215_218" transform="scale(0.00390625)"/>
        </pattern>
        <image id="image0_215_218" width="256" height="256" xlink:href="data:image/jpeg;base64,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"/>
      </defs>
    </svg>
    <div class="content">
      <div class="card-header">
        <div class="specialization">Дизайн и проектирование</div>
        <div class="city">Москва</div>
          <div class="date">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1V3" stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 1V3" stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.5 4.5H10.5" stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                  d="M9.5 2H2.5C1.9475 2 1.5 2.4475 1.5 3V9.5C1.5 10.0525 1.9475 10.5 2.5 10.5H9.5C10.0525 10.5 10.5 10.0525 10.5 9.5V3C10.5 2.4475 10.0525 2 9.5 2Z"
                  stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 6.5H8.5" stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 8.5H8.5" stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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
        Добрый день! Ищу студию или компанию, которой я могу предложить свои навыки веб-дизайнера. Мое портфолио по ссылке. Также в данный момент продолжаю обучение по специальности «UX/UI Дизайн» в UPROCK.В формате удаленной работы более 6 лет.
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
.card {
  width: 800px;
  height: 272px;
  background: #FFFFFF;
  box-shadow: 0px 40px 100px rgba(17, 49, 106, 0.07), 0px 15px 32px rgba(17, 49, 106, 0.05), 0px 3px 9px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  margin-bottom: 40px;
}

.avatar {
  float: left;
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
  /*align-items: flex-start;*/
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

.specialization{
  justify-content: flex-start;
}

.city{
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