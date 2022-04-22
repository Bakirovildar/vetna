<template>
  <div class="main-screen__container">
    <div style="margin-bottom: 80px">
      <app-header/>
    </div>

    <app-swiper/>
    <app-card/>
    <app-products/>
    <app-footer/>
  </div>

</template>

<script>
import AppHeader from "@/components/header/AppHeader";
import AppCard from "@/components/card/AppCard";
import AppProducts from "@/components/products/AppProducts";
import AppSwiper from "@/components/swiper/AppSwiper";
import AppFooter from "@/components/footer/AppFooter";

export default {
  components: {AppFooter, AppSwiper, AppProducts, AppCard, AppHeader}
}
</script>

<style>
.main-screen__container {
  margin: 20px;
}
</style>