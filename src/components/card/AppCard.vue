<template>
  <div class="card__container">
    <p class="header18">Карта покупателя</p>
    <div class="card-main">
      <div class="card-info__container">
        <div class="card-info-logo"></div>
        <p class="card-info-person">Карта постоянного покупателя</p>
        <p class="card-info-site_info">Действует во всех магазинах “ВЕТНА” на сайте Vetna.info и в мобильном приложении</p>
        <p class="card-info-pure">С правилами использования карты вы можете ознакомиться на сайте Vetna.info</p>
      </div>
      <div class="card-qr__container">
        <div class="card-qr-partners">
          <p class="card-qr-partners-title">Партнер сети:</p>
          <div class="card-qr-partners-img"></div>
        </div>
        <div class="card-qr-code"></div>
        <p class="card-qr-message">Карта является собственностью компании ВЕТНА, которая оставляет за собой право вносить изменения в правила действия карты</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card__container {
  width: 100%;
  min-height: 229px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.card-main {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
}

.card-info__container {
  width: 50%;
  background: #923133;
  padding: 15px;
  border-radius: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-info-logo {
  background: no-repeat  url("../../assets/images/1339901248.png");
  min-width: 115px;
  min-height: 18px;
}

.card-info-person {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 11.9145px;
  line-height: 125%;
  text-transform: uppercase;
  color: #FFFFFF;
}

.card-info-site_info {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 7px;
  line-height: 125%;
  color: #FFFFFF;
}

.card-info-pure {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 7px;
  line-height: 125%;
  color: #FFFFFF;
  opacity: 0.5;
  padding-bottom: 15px;
}

.card-qr__container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px 12px;
  border-radius: 0 15px 15px 0;
  border: solid 1px #ECECEC;
}

.card-qr-partners-title {
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 7px;
  text-transform: uppercase;
  color: #393939;
  display: flex;
  justify-content: center;
}

.card-qr-partners-img{
  background: no-repeat url("../../assets/images/лого x0020 Роял x0020 новый x0020 2016.cdr 2.png");
  width: 95px;
  height: 50px;
}

.card-qr-code{
  background: no-repeat url("../../assets/images/1.png");
  width: 110px;
  height: 60px;
}

.card-qr-message {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 6px;
  line-height: 125%;
  text-align: center;
  color: #393939;
}
</style>