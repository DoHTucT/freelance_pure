<template>
  <div class="freelancer-info">
    <div class="card-header">
      <div class="freelancer-h1">
        <svg id="ava" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="48" height="48" rx="24" fill="url(#pattern0)"/>
          <rect width="48" height="48" rx="24" fill="url(#pattern1)"/>
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_215_218" transform="scale(0.00390625)"/>
            </pattern>
            <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_215_218" transform="scale(0.00390625)"/>
            </pattern>
            <image id="image0_215_218" width="256" height="256"
                   xlink:href="data:image/jpeg;base64,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"/>
          </defs>
        </svg>
        <div class="freelancer-name-card">Ярославцев Иван</div>
        <div class="rating">
          <div class="stars">
            <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                  fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                  fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                  fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                  fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="star" width="14" height="13" viewBox="0 0 14 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7 10.49L3.11933 12.3333L3.92533 8.25333L1 5.26133L5.11933 4.74733L7 1L8.88067 4.74733L13 5.26133L10.0747 8.25333L10.8807 12.3333L7 10.49Z"
                  fill="#FECD40" stroke="#FECD40" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="rating-num">(5.0)</div>
        </div>
      </div>
    </div>
    <div class="spec">Специализация:</div>
    <div class="spec-frame">
      <div class="specialization">Арт-директор</div>
      <div class="specialization">Product-designer</div>
      <div class="specialization">UX/UI</div>
    </div>
    <div class="contacts-frame">
      <div class="spec" id="contacts">Контакты специалиста:</div>
      <div class="phone contact">
        <svg class="pic" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M5.23678 6.76274C4.45678 5.98274 3.86878 5.10941 3.47811 4.22341C3.39545 4.03608 3.44411 3.81674 3.58878 3.67208L4.13478 3.12674C4.58211 2.67941 4.58211 2.04674 4.19145 1.65608L3.40878 0.87341C2.88811 0.352743 2.04411 0.352743 1.52345 0.87341L1.08878 1.30808C0.594779 1.80208 0.388779 2.51474 0.522113 3.22141C0.851446 4.96341 1.86345 6.87074 3.49611 8.50341C5.12878 10.1361 7.03611 11.1481 8.77811 11.4774C9.48478 11.6107 10.1974 11.4047 10.6914 10.9107L11.1254 10.4767C11.6461 9.95608 11.6461 9.11208 11.1254 8.59141L10.3434 7.80941C9.95278 7.41874 9.31945 7.41874 8.92945 7.80941L8.32745 8.41208C8.18278 8.55674 7.96345 8.60541 7.77611 8.52274C6.89011 8.13141 6.01678 7.54274 5.23678 6.76274Z"
              fill="#B9BCC1"/>
        </svg>
        +7 (499) 226-26-38
      </div>
      <div class="adress contact">
        <svg class="pic" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.417969 4.582V4.69667C0.417969 7.004 3.3393 10.4773 4.51664 11.784C4.77597 12.072 5.22397 12.072 5.4833 11.784C6.66064 10.4773 9.58197 7.004 9.58197 4.69667V4.582C9.58197 2.05133 7.53064 0 4.99997 0C2.4693 0 0.417969 2.05133 0.417969 4.582ZM4.99996 5.9699C4.26329 5.9699 3.66663 5.37323 3.66663 4.63656V4.6119C3.66663 3.87523 4.26329 3.27856 4.99996 3.27856C5.73663 3.27856 6.33329 3.87523 6.33329 4.6119V4.63656C6.33329 5.37323 5.73663 5.9699 4.99996 5.9699Z"
                fill="#B9BCC1"/>
        </svg>
        Россия, г. Москва, ул. Работная, 4, оф. 52
      </div>
      <div class="link contact">
        <svg class="pic" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M5.82117 7.3739C4.77983 6.33257 4.77983 4.644 5.82117 3.60266L6.99968 2.42415C8.17112 1.25271 10.0709 1.25271 11.2423 2.42415C12.4138 3.59559 12.4138 5.49535 11.2423 6.66679L11.0066 6.90249"
              stroke="#B9BCC1" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path
              d="M8.17821 5.95966C9.21955 7.00099 9.21955 8.68956 8.17821 9.73089L6.9997 10.9094C5.82826 12.0808 3.9285 12.0808 2.75706 10.9094C1.58562 9.73797 1.58562 7.83821 2.75706 6.66677L2.99276 6.43106"
              stroke="#B9BCC1" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <a href="https://ozon.ru">ozon.ru</a>
      </div>
      <div class="benet contact">
        <svg class="pic" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.7142 11.7139C14.3177 9.11047 14.3177 4.88937 11.7142 2.28587C9.11071 -0.317621 4.88961 -0.317621 2.28612 2.28587C-0.317377 4.88934 -0.317377 9.11044 2.28612 11.7139C4.88958 14.3174 9.11069 14.3174 11.7142 11.7139ZM8.75367 3.99536C8.47753 3.99536 8.25367 4.21922 8.25367 4.49536C8.25367 4.7715 8.47753 4.99536 8.75367 4.99536H10.5823C10.8585 4.99536 11.0823 4.7715 11.0823 4.49536C11.0823 4.21922 10.8585 3.99536 10.5823 3.99536H8.75367ZM3.58301 6.16736V5.0007H4.79701C5.11887 5.0007 5.38034 5.26217 5.38034 5.58403C5.38034 5.90573 5.11912 6.1671 4.79748 6.16736L4.79701 6.16736H3.58301ZM6.38034 5.58403C6.38034 5.88881 6.29413 6.17354 6.14477 6.41515C6.70358 6.73699 7.07973 7.34005 7.08034 8.03092L7.08034 8.03136C7.08034 9.06166 6.24499 9.89603 5.21567 9.89603H3.24967C2.88153 9.89603 2.58301 9.5975 2.58301 9.22936V6.66736V4.66736C2.58301 4.29922 2.88153 4.0007 3.24967 4.0007H4.79701C5.67115 4.0007 6.38034 4.70989 6.38034 5.58403ZM4.79701 7.16736L4.79779 7.16736H5.21501C5.69285 7.16736 6.07978 7.55421 6.08034 8.03155C6.08024 8.50916 5.69296 8.89603 5.21567 8.89603H3.58301V7.16736L4.79657 7.16736L4.79701 7.16736ZM10.7033 7.16203H8.63342C8.77025 6.72051 9.18171 6.40003 9.66834 6.40003C10.155 6.40003 10.5664 6.72051 10.7033 7.16203ZM7.58501 7.48336V7.66009L7.58436 7.74555L7.58434 7.74555V7.74936C7.58434 8.93577 8.54646 9.89669 9.73234 9.89669C10.2789 9.89669 10.826 9.68783 11.244 9.27409C11.4403 9.07985 11.442 8.76327 11.2477 8.56699C11.0535 8.37071 10.7369 8.36906 10.5406 8.5633C10.3161 8.78555 10.0245 8.89669 9.73234 8.89669C9.2438 8.89669 8.82663 8.59177 8.66083 8.16203H11.0997C11.4634 8.16203 11.7489 7.86742 11.7517 7.514H11.7517V7.51003V7.48336C11.7517 6.33255 10.8191 5.40003 9.66834 5.40003C8.51753 5.40003 7.58501 6.33255 7.58501 7.48336Z"
                fill="#B9BCC1"/>
        </svg>
        <a href="https://be.net/stephanstudeny">be.net/stephanstudeny</a>
      </div>
      <div class="git contact">
        <svg class="pic" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M4.75533 3.862L3.372 3.362C3.064 3.25067 2.73667 3.474 2.728 3.80133L2.69333 5.09C2.35267 5.51 2.154 5.998 2.154 6.52133C2.154 8.01267 3.22867 9.22067 4.58267 9.31533C3.98867 10.2287 4 11.3093 4 11.3093V11.7867C3.328 11.5127 2.052 10.8747 1.182 9.71C0.467333 8.75333 0 7.474 0 6.12333C0 4.338 0.685333 2.92867 1.608 1.93133C2.826 0.616 4.502 0 6 0C7.498 0 9.174 0.616 10.392 1.93133C11.3147 2.92867 12 4.338 12 6.12333C12 7.47467 11.5327 8.75333 10.818 9.71C9.948 10.8747 8.672 11.5127 8 11.7867V11.3093C8 11.3093 8.01133 10.2287 7.41733 9.31533C8.77133 9.22067 9.846 8.01267 9.846 6.52133C9.846 5.998 9.64667 5.51 9.30667 5.09L9.272 3.802C9.26333 3.47467 8.936 3.25133 8.628 3.36267L7.24467 3.86267C6.854 3.76467 6.436 3.70933 6 3.70933C5.564 3.70933 5.146 3.76467 4.75533 3.862Z"
              fill="#B9BCC1"/>
        </svg>
        <a href="https://github.com/stephanstudeny">github.com/stephanstudeny</a>
      </div>
    </div>
    <button class="hire">Хочу нанять специалиста</button>
  </div>
</template>

<script>
export default {
  name: "freelancerProfileCard"
}
</script>

<style scoped>
.freelancer-info {
  float: left;
  width: 384px;
  height: 544px;
  margin-left: 32px;
  background: #FFFFFF;
  box-shadow: 0px 17px 46px rgba(17, 49, 106, 0.1), 0px 7px 14px rgba(17, 49, 106, 0.06), 0px 2px 4px rgba(17, 49, 106, 0.04);
  border-radius: 12px;
}

.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 24px 0;
  padding-bottom: 24px;
  height: 56px;
  border-bottom: 1px solid #E0E7EE;
}

.freelancer-h1 {
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 336px;
  height: 56px;
}

#ava {
  float: left;
  margin-right: 8px;
}

.freelancer-name-card {
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

.spec {
  font-weight: 800;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7A7D83;
  margin-top: 21px;
  margin-left: 24px;
}

.spec-frame {
  margin-left: 24px;
  margin-top: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E0E7EE;
}

.specialization {
  box-sizing: border-box;
  display: inline-block;
  padding: 8px 16px;
  width: auto;
  margin-right: 8px;
  margin-bottom: 8px;
  height: 40px;
  background: rgba(224, 231, 238, 0.5);
  border: 1px solid #E0E7EE;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

.contacts-frame {
  margin-left: 24px;
  margin-bottom: 26px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #252931;
}

#contacts {
  margin-bottom: 10px;
}

.pic {
  float: left;
  margin-right: 10px;
  position: relative;
  top: 7px;

}

.contact {
  margin-bottom: 8px;
}

a {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #11316A;
}

.hire {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  gap: 8px;
  width: 384px;
  height: 56px;
  background: #E0E7EE;
  border-radius: 0px 0px 12px 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #11316A;
  border: none;
  cursor: pointer;
}

.hire:hover {
  background: #11316A;
  color: #FFFFFF;
}
</style>