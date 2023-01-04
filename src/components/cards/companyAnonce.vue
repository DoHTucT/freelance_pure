<template>
  <div class="card">
    <div class="container">
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
      <div class="description">
        Ozon — российский интернет-магазин, предоставляющий своим покупателям более 100 млн товарных наименований в 20
        категориях, среди которых: электроника, бытовая техника, товары для дома и сада, товары для мам и детей, ремонт,
        спорт и отдых, красота и здоровье, одежда и обувь, автотовары, зоотовары, продукты питания, книги, мультимедиа,
        DVD, программное обеспечение, игры, музыка, антиквариат и другие.Подробнее на
        Retail.ru:https://www.retail.ru/rbc/tradingnetworks/ozon/
      </div>
      <div class="detail">
        <div class="detail-text" @click="$router.push('/companyprofile')">Подробнее</div>
        <div class="arrow">
          <img src="../../../public/pic/arrowDetail.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "companyAnonce",
}
</script>

<style scoped>
.card {
  box-sizing: border-box;
  width: 384px;
  height: 408px;
  background: #FCFDFF;
  border: 1px solid #E0E7EE;
  border-radius: 12px;
}

.container {
  width: 336px;
  margin-left: 24px;
  margin-top: 24px;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  width: 336px;
  height: 76px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7A7D83;
  padding-top: 14px;
  border-top: 1px solid #E0E7EE;
}

.detail {
  margin-top: 12px;
  cursor: pointer;
}

.detail-text {
  float: left;
  font-weight: 800;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #11316A;
}

.arrow {
  float: left;
  margin-left: 11px;
  position: relative;
  bottom: 5px;
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

a {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #11316A;
}
</style>