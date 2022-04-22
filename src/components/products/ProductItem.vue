<template>
  <div class="product__container" v-for="product in saleProducts" :key="product.id">
    <div class="product__img">
      <img :src="product.img" alt="">
      <div class="product__favorite">icon
      </div>
      <div class="product__sale"><p>- 10%</p></div>
    </div>
    <div class="product__price">
      <div class="product__title"><span class="new-price">{{ product.price_akc }}</span> <span class="old-price">{{ product.price }}</span>
        <p style="padding-right: 10px">{{ product.name }}</p></div>
    </div>
    <button class="btn">В корзину</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      saleProducts: null
    }
  },
  mounted() {
    this.getSaleProduct()
  },
  methods: {
    async getSaleProduct() {
      const response = await fetch('https://vetna.info/app/get_slide_akc.php')
      const saleProducts = await response.json()
      this.saleProducts = saleProducts
    }
  }
}
</script>

<style scoped>
.product__sale {
  width: 39px;
  height: 17px;
  background: #E8B40B;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product__img {
  background: no-repeat ;
}

.product__sale p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: #FFFFFF;
}
</style>