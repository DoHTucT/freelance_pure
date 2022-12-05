<template>
  <div>
    <navBar/>
    <div class="container">
      <div class="h1">
        <div class="back" @click="$router.push('/')">
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.33366 1.33325L1.66699 3.99992L4.33366 6.66659" stroke="#8A9197" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="back-text">В каталог специалистов</div>
        </div>
        <div class="freelancer-name">Ярославцев Иван</div>
        <div class="freelancer-frame">
          <div class="freelancer-level">
            <div class="level-option">Уровень</div>
            <div class="level-option">Опыт</div>
            <div class="level-value">Senior</div>
            <div class="level-value">11 лет</div>
          </div>

          <div class="about">О себе</div>
          <div class="description">
            За десять лет в дизайне я работал в типографии, где готовил файлы к печати на широкоформатном принтере; в
            рекламном агентстве, в котором рисовал логотипы и иллюстрации; в рекламной сети, где рисовал и
            программировал интерактивные баннеры на flash и html5; в компании-производителе товаров для детского
            творчества, где оформлял и верстал упаковку.
          </div>
          <div class="line"/>
          <div class="work-table">
            <div class="work-option">Занятость</div>
            <div class="work-option">Ожидания по оплате</div>
            <div class="work-value">Полный день</div>
            <div class="work-value">от 250 000р/месяц</div>
            <div class="work-value">Удалённая занятость</div>
            <div class="work-value">2000р/час</div>
          </div>
        </div>
        <div class="freelancer-info">
          <div class="card-header">
            <div class="freelancer-h1">
              <svg id="ava" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
              <div class="freelancer-name-card">Ярославцев Иван</div>
              <div class="rating">
                <div class="stars">
                  <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                        fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                        fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                        fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                        fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                        fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="rating-num">(5.0)</div>
              </div>
            </div>
          </div>
          <div class="spec">Специализация</div>
          <div class="spec-frame">
          <div class="specialization">Арт-директор</div>
          <div class="specialization">Product-designer</div>
          <div class="specialization">UX/UI</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";

export default {
  name: "freelancerProfile",
  components: {
    navBar,

  }
}
</script>

<style scoped>
.container {
  width: 1216px;
  margin-left: auto;
  margin-right: auto;
}

.h1 {
  margin-top: 116px;
}

.back {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 250px;
  height: 24px;
}

.back-text {
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
}

.freelancer-name {
  margin-bottom: 36px;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
}

.freelancer-frame {
  width: 800px;
  height: auto;
  float: left;
  border-top: 1px solid #E0E7EE;
}

.freelancer-level {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding-bottom: 30px;
  border-bottom: 1px solid #E0E7EE;
  margin-bottom: 30px;
  column-gap: 16px;

}

.level-option {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
  margin-top: 30px;
}

.level-value {
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #252931;
}

.freelancer-info {
  float: left;
  width: 384px;
  height: 544px;
  margin-left: 32px;
  background: #FFFFFF;
  box-shadow: 0px 17px 46px rgba(17, 49, 106, 0.1), 0px 7px 14px rgba(17, 49, 106, 0.06), 0px 2px 4px rgba(17, 49, 106, 0.04);
  border-radius: 12px;
}

.about {
  margin-top: 30px;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #252931;
}

.description {
  margin-top: 13px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

.line {
  border: 1px solid #E0E7EE;
  margin-top: 42px;
}

.work-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 16px;
}

.work-option {
  font-weight: 800;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
  align-self: end;
  margin-bottom: 12px;
  margin-top: 28px;
}

.work-value {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
  padding: 8px 16px;
  margin-bottom: 8px;
  width: auto;
  height: 40px;
  background: rgba(224, 231, 238, 0.5);
  border: 1px solid #E0E7EE;
  border-radius: 4px;
  justify-self: start;
}

.card-header{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 24px 0;
  padding-bottom: 24px;
  height: 56px;
  border-bottom: 1px solid #E0E7EE;
}
.freelancer-h1 {
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 336px;
  height: 56px;
}

#ava {
  float: left;
  margin-right: 8px;
}

.freelancer-name-card {
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}

.rating {
  margin-top: 5px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
}

.stars {
  float: left;
}

.star {
  margin-left: 2px;
}

.rating-num {
  float: left;
  font-size: 10px;
  margin-left: 10px;
}

.spec{
  font-weight: 800;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
  margin-top: 21px;
  margin-left: 24px;
}

.spec-frame{
  margin-left: 24px;
  margin-top: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E0E7EE;
}
.specialization{
  box-sizing: border-box;
  display: inline-block;
  padding: 8px 16px;
  width: auto;
  margin-right: 8px;
  margin-bottom: 8px;
  height: 40px;
  background: rgba(224, 231, 238, 0.5);
  border: 1px solid #E0E7EE;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}
</style>