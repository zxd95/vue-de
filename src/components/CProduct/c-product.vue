<template>
  <div class="c-product">
    <!-- <template v-for="item in formatProductData"> -->
    <template>  
      <div class="brand">
        <img class="img-trim" src="../../assets/images/brand01.png">
      </div>
      <c-product-list></c-product-list>
      <div style="margin-top: 36px;"></div>
      <c-product-lists></c-product-lists>
    </template>
  </div>
</template>

<script>
import CProductList from '@/components/CProductList/c-productlist'
import CProductLists from '@/components/CProductList/c-productlists'

export default {
  name: 'c-product',
  props: {
    productList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      formatProductData: []
    }
  },
  components: {
    CProductList,
    CProductLists
  },
  methods: {
    // formatProductList () {
    //   let data = this.productList
    //   let formatData = []
    //   data.forEach(item => {})
    // }
  }
}
</script>

<style lang="scss" scoped>
.c-product {
  .brand {
    width: 100%;
    padding: 12px 0 12px 22px;
    @media screen and (max-width: 600px) {
      padding: 0 0 0 12px;
    }
    .img-trim {
      transform: scale(0.72);
      @media screen and (max-width: 600px) {
        transform: scale(0.5);
      }
    }
  }
}
</style>
