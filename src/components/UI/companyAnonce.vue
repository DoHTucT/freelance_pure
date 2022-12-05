<template>
  <div class="card">
    <div class="container">
      <companyAnonceHeader class="header"/>
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
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66699 6.66659L4.33366 3.99992L1.66699 1.33325" stroke="#11316A" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import companyAnonceHeader from "@/components/UI/companyAnonceHeader";

export default {
  name: "companyAnonce",
  components: {
    companyAnonceHeader
  }
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

.header {
  position: relative;
  right: 24px;
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
</style>