<template>
  <div class="card">
  <div class="card-container">
    <div class="card-header">
      <div class="company-h1">
        <img id="logo" src="../../../public/pic/ozon.png" height="48" width="48"/>
        <div class="company-name">Озон информационные технологии</div>
        <div class="rating">
          <div class="stars">
            <img class="star" src="../../../public/pic/starFull.svg"/>
            <img class="star" src="../../../public/pic/starFull.svg"/>
            <img class="star" src="../../../public/pic/starFull.svg"/>
            <img class="star" src="../../../public/pic/starFull.svg"/>
            <img class="star" src="../../../public/pic/starFull.svg"/>
          </div>
          <div class="rating-num">(5.0)</div>
        </div>
      </div>
    </div>
    <div class="coordinates">
      <div class="office">Головной офис:</div>
      <div class="contacts tel">
        <div class="pic">
          <img src="../../../public/pic/tel.svg"/>
        </div>
        <div>+7 (499) 226-26-38</div>
      </div>
      <div class="contacts adress">
        <div class="pic">
          <img src="../../../public/pic/adress.svg"/>
        </div>
        <div class="">Россия, г. Москва, Одесская д 2</div>
      </div>
      <div class="contacts link">
        <div class="pic">
          <img src="../../../public/pic/link.svg"/>
        </div>
        <div class=""><a href="https://www.ozon.ru/">ozon.ru</a></div>
      </div>
    </div>
  </div>
  <button class="i-wont-work">Хочу здесь работать</button>
  </div>
</template>

<script>
export default {
  name: "companyAnonceSmall"
}
</script>

<style scoped>
.card{
  float: left;
  box-sizing: border-box;
  width: 384px;
  height: 320px;
  margin-left: 32px;
  background: #FCFDFF;
  border: 1px solid #E0E7EE;
  border-radius: 12px;
  box-shadow: 0px 17px 46px rgba(17, 49, 106, 0.1), 0px 7px 14px rgba(17, 49, 106, 0.06), 0px 2px 4px rgba(17, 49, 106, 0.04);
}
.card-container {
  width: 336px;
  margin-left: 24px;
  margin-top: 24px;
}

.card-header {
  height: 80px;
  border-bottom: 1px solid #E0E7EE;
}

.company-h1 {
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 336px;
  height: 56px;
}

#logo {
  float: left;
  margin-right: 8px;
}

.company-name {
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

.coordinates {
  height: 145px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
  border: 1px solid #FCFDFF;
  margin-bottom: 10px;
}

.office {
  font-weight: 800;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
  margin-top: 21px;
  margin-bottom: 12px;
}

.contacts {
  margin-bottom: 8px;
}

.pic {
  float: left;
  margin-right: 10px;
}

a{
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #11316A;
}

.i-wont-work{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  gap: 8px;
  width: 384px;
  height: 56px;
  background: rgba(17, 49, 106, 0.1);
  border: 1px solid #E0E7EE;
  border-radius: 0px 0px 12px 12px;
}
</style>