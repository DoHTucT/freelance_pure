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
        <freelancerProfileCard/>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/main/navBar";
import freelancerProfileCard from "@/components/cards/freelancerProfileCard";

export default {
  name: "freelancerProfile",
  components: {
    navBar,
    freelancerProfileCard,
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
  cursor: pointer;
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
  padding: 8px 16px 3px;
  margin-bottom: 8px;
  width: auto;
  height: 30px;
  background: rgba(224, 231, 238, 0.5);
  border: 1px solid #E0E7EE;
  border-radius: 4px;
  justify-self: start;
}

</style>