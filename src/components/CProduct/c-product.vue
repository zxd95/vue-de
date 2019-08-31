<template>
  <div class="c-product">
    <template>  
      <div class="brand">
        <img class="img-trim" src="../../assets/images/brand01.png">
      </div>
      <c-product-list></c-product-list>
      <div style="margin-top: 36px;"></div>
      <c-product-lists></c-product-lists>
      <div style="margin-top: 36px;"></div>
      <c-product-listss></c-product-listss>
    </template>
  </div>
</template>

<script>
import CProductList from '@/components/CProductList/c-productlist'
import CProductLists from '@/components/CProductList/c-productlists'
import CProductListss from '@/components/CProductList/c-productlistss'

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
    CProductLists,
    CProductListss
  },
  methods: {
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
