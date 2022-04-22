<template>
  <div class="footer">
    <div class="home">Главная</div>
    <div class="catalog">Каталог</div>
    <div class="basket">Корзина</div>
    <div class="booking">Бронь</div>
    <div class="profile">Профиль</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 1px solid #ECECEC;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>