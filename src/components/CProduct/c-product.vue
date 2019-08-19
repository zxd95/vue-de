<template>
  <div class="c-product">
    <template v-for="item in formatProductData">
      <div class="brand" :key="item.a">
        <img class="img-trim" src="../../assets/images/brand.png">
      </div>
      <c-product-list :key="item.b"></c-product-list>
    </template>
  </div>
</template>

<script>
import CProductList from '@/components/CProductList/c-productlist'
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
    CProductList
  },
  methods: {
    formatProductList () {
      // TODO:
      let data = this.productList
      let formatData = []

      data.forEach(item => {
        debugger
      })
    }
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
