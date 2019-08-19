<template>
  <div>
    <c-header></c-header>
    <c-swiper :swiperList="swiperList"></c-swiper>
    <div class="c-container">
      <c-product :productList="productList"></c-product>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader/c-header'
import CSwiper from '@/components/CSwiper/c-swiper'
import CProduct from '@/components/CProduct/c-product'
import CFooter from '@/components/CFooter/c-footer'

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
    this.getSwiperList()
    this.getProductList()
  },
  methods: {
    getSwiperList() { // 获取轮播图
      this.$axios.get().then(res => {
        if (res.code === 0) {
          this.swiperList = res.data
        }
      })
    },
    getProductList() { // 获取产品
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
