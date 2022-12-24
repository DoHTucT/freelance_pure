<template>
  <div class="">
    <navBar/>
    <div class="container">
      <div class="account-header">
        <div class="avatar">
          <img class="avatar-main-layer" src="../../public/pic/ava@2x.png" height="80" width="80"/>
          <img class="avatar-hover-layer" src="../../public/pic/avaHover.svg" height="80" width="80"/>
        </div>
        <div class="your-profile">Ваш профиль</div>
        <div class="h1">Ярославцев Иван</div>
      </div>
      <div class="header-menu-container">
        <div class="header-menu">
          <headerButton class="button">Личные данные</headerButton>
          <headerButton class="button">Опыт работы</headerButton>
          <headerButton class="button">Образование</headerButton>
          <headerButton class="button">Портфолио</headerButton>
          <headerButton class="button">Уведомления</headerButton>
          <headerButton class="button">Безопасность</headerButton>
          <headerButton class="button">Настройки входа</headerButton>
        </div>
      </div>
      <div class="h2">Личные данные</div>
      <div class="input-frame">
        <accountInput class="input" labelValue="Ваше имя"/>
        <accountInput class="input" labelValue="Ваша Фамилия"/>
        <accountRadio/>
        <accountInput class="input" label-value="Страна"/>
        <accountInput class="input" label-value="Город"/>
        <div class="line"></div>
        <accountInput class="input" label-value="Телефон"/>
        <accountInput class="input" label-value="Email"/>
        <accountInput class="input" label-value="Ваш сайт (если есть)"/>
        <div class="line"></div>
        <div class="button-frame">
          <button id="cancel">Отменить</button>
          <button id="save">Сохранить</button>
        </div>
      </div>
      <div class="description-frame">
        <div class="description tab-btn">Как меня видят другие?</div>
        <div class="description">Секция для дескрипций и пояснений, здесь оставляем подсказки и дополнительный
          интерактив к заполняемым слева формам
        </div>
        <div class="description"></div>
        <div class="description"></div>
        <div class="description" id="big-margin"></div>
        <div class="description tab-btn">Подтвердить</div>
        <div class="description tab-btn">Подтвердить</div>
        <div class="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import headerButton from "@/components/UI/headerButton";
import accountInput from "@/components/UI/accountInput";
import accountRadio from "@/components/UI/accountRadio";

export default {
  name: "personalAccount",
  props: ['labelValue'],
  components: {
    navBar,
    headerButton,
    accountInput,
    accountRadio,
  }
}
</script>

<style scoped>
.container {
  width: 1216px;
  margin-left: auto;
  margin-right: auto;
}

.account-header {
  margin-top: 116px;
}

.avatar {
  float: left;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 24px;
  cursor: pointer;
}

.avatar-main-layer {
  z-index: 2;
}

.avatar-hover-layer {
  position: relative;
  bottom: 85px;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
}

.avatar-hover-layer:hover {
  opacity: 0.7;
}

.your-profile {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
  padding-top: 6px;
}

.h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #252931;
}

.header-menu-container {
  margin-top: 40px;
  padding: 0;
  height: 64px;
  border-bottom: 1px solid #E0E7EE;
}

.header-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1045px;
}

.button:hover {
  background: #11316A;
  box-shadow: 0px 4px 6px rgba(17, 49, 106, 0.15), 0px 8px 20px rgba(17, 49, 106, 0.07);
  color: #FFFFFF;
  transition: 0.5s;
}

.h2 {
  margin-top: 45px;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #252931;
}

.input-frame {
  float: left;
  margin-top: 23px;
}

.line {
  width: 592px;
  height: 0px;
  border-bottom: 1px solid #E0E7EE;
  margin-bottom: 40px;
  margin-top: 8px;
}

.button-frame {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 592px;
  height: 56px;
  margin-bottom: 54px;
}

#cancel {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 36px;
  gap: 8px;
  width: 276px;
  height: 56px;
  background: transparent;
  border: 1.5px solid #11316A;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #11316A;
  cursor: pointer;
}

#save {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  gap: 8px;
  width: 276px;
  height: 56px;
  background: #11316A;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  cursor: pointer;
}

.description-frame {
  width: 592px;
  float: left;
  margin-top: 23px;
  margin-left: 32px;
}

.description {
  width: 592px;
  height: 56px;
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
}

#big-margin {
  margin-bottom: 80px;
}

.tab-btn {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #11316A;
  cursor: pointer;
}
</style>