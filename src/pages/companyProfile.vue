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
          <div class="back-text">В каталог вакансий</div>
        </div>
        <div class="company-name">Ozon. Информационные технологии</div>
        <div class="company-frame">
          <div class="about">О компании</div>
          <div class="description">
            Ozon — ведущая универсальная e-commerce платформа в России. Оборот от продаж товаров и услуг (GMV) Ozon
            вырос на 74% год к году в третьем квартале 2022 года. Группа также управляет ведущим российским
            онлайн-турагентством Ozon. Travel, показатели которого не учитываются в GMV, и имеет долю в группе компаний
            «Литрес» — крупнейшей российской платформе электронных книг.
          </div>
          <div class="line"/>
          <div class="company-name">Вакансии этой компании</div>
          <vacancyAnonce/>
        </div>
        <div class="company-info">
          <companyAnonceSmall/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import navBar from "@/components/main/navBar";
import companyAnonceSmall from "@/components/cards/companyAnonceSmall";
import vacancyAnonce from "@/components/cards/vacancyAnonce";

export default {
  name: "companyProfile",
  components: {
    navBar,
    companyAnonceSmall,
    vacancyAnonce,
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
  width: 174px;
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

.company-name {
  margin-bottom: 36px;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
}

.company-frame {
  width: 800px;
  height: auto;
  float: left;
  border-top: 1px solid #E0E7EE;
}

.about {
  margin-top: 29px;
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
  margin-bottom: 28px;
}
</style>