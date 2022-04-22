<template>
  <div>
    <div class="product">
      <p class="header18">Товары по акции</p>
      <div style="display: flex; justify-content: space-around">
        <product-item v-for="n in 2" :key="n"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/products/ProductItem";
export default {
  components: {ProductItem}
}
</script>

<style>

.product {
  margin: 30px 10px;
  width: 100%;
}

.product__container {
  min-width: 140px;
  min-height: 280px;
  margin: 20px 5px;
  display: inline-block;
}

.product__img {
  min-width: 140px;
  min-height: 90px;
  position: relative;
  margin-bottom: 12px;
  background: #F9F9F9;
}

.product__favorite {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 5;
}

.product__sale {
  position: absolute;
  bottom: 8px;
  left: 8px;
}

.product__price {
  margin-bottom: 12px;
}

.new-price {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #E31E24;
}

.old-price {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-decoration-line: line-through;
  color: #393939;
}

.product__title p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #393939;
}

.btn {
  border: none;
  background: #9665FF;
  border-radius: 18px;
  color: #FFFFFF;
  width: 97px;
  height: 34px;
  ont-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;

}
</style>