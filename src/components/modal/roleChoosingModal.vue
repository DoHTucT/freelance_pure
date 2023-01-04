<template>
  <div @click="closeModal" class="background">
    <div @click.stop class="role-frame">
      <div class="h1">Что вы ищете?</div>
      <button class="button">
        <img class="icon" src="../../../public/pic/Customer.svg" alt="">
        <div class="button-frame">
          <div class="h2">Я - заказчик</div>
          <div class="description">Ищу исполнителей, сотрудников</div>
          <img class="arrow" src="../../../public/pic/Arrowinround.svg" alt="">
        </div>
      </button>
      <button class="button">
        <img class="icon" src="../../../public/pic/employee.svg" alt="">
        <div class="button-frame">
          <div class="h2">Я - исполнитель</div>
          <div class="description">Ищу вакансии, проекты или задачи</div>
          <img class="arrow" src="../../../public/pic/Arrowinround.svg" alt="">
        </div>
      </button>
      <img @click="closeModal"
           class="cross"
           src="../../../public/pic/close.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "roleChoosingModalModal",

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

.role-frame {
  position: fixed;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 448px;
  height: 368px;
  background: #FFFFFF;
  box-shadow: 0px 40px 100px rgba(17, 49, 106, 0.07), 0px 15px 32px rgba(17, 49, 106, 0.05), 0px 3px 9px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}

.h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
  margin: 28px 32px;
}

.button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 384px;
  height: 104px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid #E0E7EE;
  border-radius: 8px;
  margin-bottom: 24px;
  margin-left: 32px;
  padding-top: 24px;
  cursor: pointer;
}

.button:hover {
  background: #FFFFFF;
  border: 1px solid #E0E7EE;
  box-shadow: 0px 17px 46px rgba(17, 49, 106, 0.1), 0px 7px 14px rgba(17, 49, 106, 0.06), 0px 2px 4px rgba(17, 49, 106, 0.04);
}

.icon {
  float: left;
  margin-left: 24px;
}

.button-frame {
  margin-left: 16px;
}

.h2 {
  float: left;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #7A7D83;
}

.button:hover .h2 {
  color: #11316A;
}

.description {
  float: left;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #B9BCC1;
}

.button:hover .description {
  color: #7A7D83;
}

.arrow {
  float: right;
  position: relative;
  bottom: 20px;
  right: 14px;
  display: none;
}

.button:hover .arrow {
  display: block;
}

.cross {
  position: relative;
  bottom: 340px;
  left: 420px;
  cursor: pointer;
}

</style>
