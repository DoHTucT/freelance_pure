<template>
  <div class="">
    <div @click="closeModal" class="background"/>
    <div @click.stop class="response-frame">
      <div class="response-container">
        <div class="header">Ваш отклик на вакансию</div>
        <div class="h1">Дизайнер в рекламное агенство</div>
        <div class="vacancy-info">
          <div class="info-table">
            <div class="option">Занятость:</div>
            <div class="value">Постоянная</div>
          </div>
          <div class="info-table">
            <div class="option">Тип работы:</div>
            <div class="value">Удалённая</div>
          </div>
          <div class="info-table">
            <div class="option">Вознаграждение:</div>
            <div class="value">от 250 000 р.</div>
          </div>
        </div>
        <div class="name-frame">
          <div class="name-frame-inner">
            <img class="ava" src="../../public/pic/ava@2x.png" alt="">
            Ярославцев Иван
          </div>
          <div class="eye-frame">
            <img class="eye" src="../../public/pic/EyeBig.svg" alt="">
          </div>
        </div>
        <textarea class="textarea"
                  placeholder="Вставить текст из предыдущего отклика?"
                  v-model="vacancyResponseText"
        />
        <div class="insert">Вставить</div>
        <div class="button-frame">
          <myButton @click="closeModal" class="button" id="cancel">Отмена</myButton>
          <myButton class="button" id="response">Откликнуться</myButton>
        </div>
      </div>
      <img @click="closeModal" class="cross" src="../../public/pic/close.svg" alt="">

    </div>
  </div>
</template>

<script>
import myButton from "@/components/UI/button";

export default {
  name: "vacancyResponseModal",

  components: {
    myButton
  },

  data() {
    return {
      vacancyResponseText: ''
    }
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    }

  },

  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0px;
  background: rgba(37, 41, 49, 0.6);;
  backdrop-filter: blur(3px);
  z-index: 5;
}

.response-frame {
  position: fixed;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 656px;
  height: 480px;
  background: #FFFFFF;
  box-shadow: 0px 40px 100px rgba(17, 49, 106, 0.07), 0px 15px 32px rgba(17, 49, 106, 0.05), 0px 3px 9px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  z-index: 6;
}

.response-container {
  width: 592px;
  margin: 29px 32px 40px;
  float: left;
}

.cross {
  position: relative;
  bottom: 460px;
  float: right;
  margin-right: 24px;
  cursor: pointer;
}

.header {
  font-weight: 800;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
}

.h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
  margin-bottom: 14px;
}

.vacancy-info {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 84px;
  padding-bottom: 22px;
  border-bottom: 1px solid #E0E7EE;
}

.info-table {
  width: 124px;
  height: 41px;
}

.option {
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #7A7D83;
}

.value {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #11316A;
}

.name-frame {
  height: 82px;
}

.ava {
  width: 40px;
  height: 40px;
}

.name-frame-inner {
  float: left;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #252931;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-top: 23px;
  gap: 8px;
}

.eye-frame {
  float: right;
  width: 40px;
  height: 40px;
  border: 1px solid #E0E7EE;
  border-radius: 4px;
  margin-top: 23px;
}

.eye {
  margin-top: 8px;
  margin-left: 8px;
}

.textarea {
  box-sizing: border-box;
  width: 592px;
  height: 104px;
  background: #FFFFFF;
  border: 1px solid #E0E7EE;
  border-radius: 8px;
  resize: none;
  padding: 16px;
}

.textarea::placeholder {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
}

.insert {
  position: relative;
  z-index: 7;
  left: 505px;
  bottom: 90px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #11316A;
  cursor: pointer;
}

.button-frame {
  display: flex;
  gap: 32px;
  height: 56px;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  gap: 8px;
  width: 280px;
  height: 56px;
  cursor: pointer;
}

#cancel {
  box-sizing: border-box;
  border: 1.5px solid #E0E7EE;
  background-color: #FFFFFF;
  color: #7A7D83;

}
</style>