<template>
  <div class="card">
    <img src="../../public/pic/ozon.png" height="48" width="48"/>
    <div class="content">
      <div class="place">
        <div class="firm">Ozon Информационные технологии</div>
        <div class="city">Москва</div>
        <div class="info">
          <div class="views">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M1.55888 6.2335C1.48037 6.088 1.48037 5.9115 1.55888 5.766C2.50487 4.0165 4.25238 2.5 5.99988 2.5C7.74738 2.5 9.49488 4.0165 10.4409 5.7665C10.5194 5.912 10.5194 6.0885 10.4409 6.234C9.49488 7.9835 7.74738 9.5 5.99988 9.5C4.25238 9.5 2.50487 7.9835 1.55888 6.2335V6.2335Z"
                  stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                  d="M7.06066 4.93934C7.64644 5.52512 7.64644 6.47487 7.06066 7.06066C6.47487 7.64644 5.52512 7.64644 4.93934 7.06066C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.52512 4.35355 6.47487 4.35355 7.06066 4.93934Z"
                  stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            250
          </div>
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
      </div>
      <div class="vacancy-name">Дизайнер в рекламное агенство</div>
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
        Ищем UI/UX веб-дизайнера, готового помочь с техническим дизайном проекта Workspace.ru. Нужен ответственный
        продуктовый дизайнер, внимательный к мелочам. От специалиста потребуются хорошие знания Figma и, в меньшей
        степени, Sketch. Большим плюсом будет знание редактуры (например, по книгам Максима Ильяхова) — для изложения в
        макетах своих мыслей кратко, ясно и убедительно.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vacancyAnonceInactive"
}
</script>

<style scoped>
.card{
  box-sizing: border-box;
  width: 800px;
  height: 272px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #E0E7EE;
  border-radius: 12px;
}

img {
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

.place {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  height: 15px;
  font-weight: 600;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  margin-left: 200px;
  gap: 16px;
  height: 16px;
  width: 150px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  text-align: right;
  letter-spacing: 0.01em;
  color: #7A7D83;
}

.vacancy-name {
  height: 36px;
  margin-bottom: 13px;
  font-style: normal;
  font-weight: 600;
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
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #7A7D83;
}

.value {
  font-style: normal;
  font-weight: 600;
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