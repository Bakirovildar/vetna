<template>
  <main-screen/>
</template>

<script>
import MainScreen from "@/components/MainScreen";

export default {
  components: {
    MainScreen
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Lato:wght@400;700&family=Montserrat:wght@700&family=Rubik:wght@400;500;600&display=swap');

.header__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #393939;
  z-index: 10;
}

.header18 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #393939;
}
</style>
