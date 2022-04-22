<template>
  <div class="carousel-card__container" >
    <img src="" alt="">
  </div>
</template>
<script>

export default {
  data() {
    return {
      sliders: []
    }
  },
  mounted() {
    this.loadSlider()
  },
  methods: {
    add() {
      console.log(this.sliders)
    },
    async loadSlider() {
      const response = await fetch('https://vetna.info/app/get_slide.php')
      const sliders = await response.json()
      this.sliders = sliders
      console.log(this.sliders)
    }
  }
}
</script>

<style scoped>
.carousel-card__container {
  width: 100%;
  min-height: 113px;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 5px;
}

.carousel-card__wrapper {
  background: lavender;
}
</style>