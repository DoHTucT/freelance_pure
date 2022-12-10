<template>
  <div>
    <vacancyResponseModal
        v-show="isShowModal"
        :show="isShowModal"
        @close="toggleModal"/>
    <myHeader/>
    <div class="container">
      <div class="h1">
        <div class="back" @click="$router.push('/')">
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.33366 1.33325L1.66699 3.99992L4.33366 6.66659" stroke="#8A9197" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="back-text">В каталог вакансий</div>
        </div>
        <div class="vacancy-name">Дизайнер в рекламное агенство</div>
      </div>
      <div class="vacancy-frame">
        <div class="vacancy-info">
          <div class="info-table" id="frame1">
            <div class="info-table-inner">
              <div class="option">Занятость:</div>
              <div class="value">Постоянная</div>
            </div>
          </div>
          <div class="info-table" id="frame2">
            <div class="info-table-inner">
              <div class="option">Тип работы:</div>
              <div class="value">Удалённая</div>
            </div>
          </div>
          <div class="info-table" id="frame3">
            <div class="info-table-inner">
              <div class="option">Вознаграждение:</div>
              <div class="value">от 250 000 р.</div>
            </div>
          </div>
          <div class="info-table" id="frame4">
            <div class="info-table-inner">
              <div class="option">Опыт:</div>
              <div class="value">от 6 лет</div>
            </div>
          </div>
        </div>
        <div class="description">
          Ищем UI/UX веб-дизайнера, готового помочь с техническим дизайном проекта Workspace.ru.
          Нужен ответственный продуктовый дизайнер, внимательный к мелочам. От специалиста потребуются хорошие знания
          Figma и, в меньшей степени, Sketch. Большим плюсом будет знание редактуры (например, по книгам Максима
          Ильяхова) — для изложения в макетах своих мыслей кратко, ясно и убедительно
        </div>
        <myButton @click="toggleModal">Откликнуться</myButton>
        <div class="line"/>
        <div class="vacancy-name">Похожие вакансии</div>
        <vacancyAnonce/>
      </div>
      <div class="company-info">
        <companyAnonce/>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/navBar";
import myButton from "@/components/UI/button";
import vacancyAnonce from "@/components/vacancyAnonce";
import companyAnonce from "@/components/UI/companyAnonce";
import vacancyResponseModal from "@/components/vacancyResponseModal";

export default {
  name: "vacancyCard",

  components: {
    myHeader,
    myButton,
    vacancyAnonce,
    companyAnonce,
    vacancyResponseModal,
  },

  data() {
    return {
      isShowModal: false,
    }
  },

  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal
    }
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

.vacancy-name {
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
}

.vacancy-frame {
  width: 800px;
  height: auto;
  float: left;
}

.company-info {
  float: right;
  border-radius: 12px;
  box-shadow: 0px 17px 46px rgba(17, 49, 106, 0.1), 0px 7px 14px rgba(17, 49, 106, 0.06), 0px 2px 4px rgba(17, 49, 106, 0.04);
}

.vacancy-info {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  width: 800px;
  height: 228px;
  background: #FFFFFF;
  border: 1px solid #E0E7EE;
  border-radius: 12px;
}

.info-table {

}

#frame1 {
  border-bottom: solid 1px #E0E7EE;
}

#frame2 {
  border-bottom: solid 1px #E0E7EE;
  border-left: solid 1px #E0E7EE;
}

#frame4 {
  border-left: solid 1px #E0E7EE;
}

.info-table-inner {
  margin-top: 29px;
  margin-left: 32px;
}

.option {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

.value {
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #11316A;
}

.description {
  margin-top: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

.line {
  border: 1px solid #E0E7EE;
  margin-top: 54px;
  margin-bottom: 44px;

}
</style>