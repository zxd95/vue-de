<template>
  <div>
    <c-header></c-header>
    <c-swiper :swiperList="swiperList"></c-swiper>
    <div class="c-container">
      <c-product></c-product>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader/c-header'
import CSwiper from '@/components/CSwiper/c-swiper'
import CProduct from '@/components/CProduct/c-product'
import CFooter from '@/components/CFooter/c-footer'
import { getBannerApi } from '@/api/index'

export default {
  name: 'index',
  components: {
    CHeader,
    CSwiper,
    CProduct,
    CFooter
  },
  data () {
    return {
      swiperList: [],
      productList: []
    }
  },
  mounted () {
  },
  methods: {
    // 获取轮播图
    getSwiperList() {
      getBannerApi().then(res => {
        if (res.message === 'success') {
          this.swiperList = res.result
        }
      })
    },
    // 获取产品
    getProductList() { 
      this.$axios.get().then(res => {
        if (res.code === 0) {
          this.productList = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
