<template>
  <div class="c-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.rowId">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'c-swiper',
  props: {
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 5000
        },
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: require('../../assets/images/swiper01.png')
        },
        {
          id: '0002',
          imgUrl: require('../../assets/images/swiper02.png')
        },
        {
          id: '0003',
          imgUrl: require('../../assets/images/swiper03.png')
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  methods: {
    handleDetail (id) {
      this.$router.push({
        path: `/detail/${id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
