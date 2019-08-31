<template>
  <div class="c-productlist">
    <div>
      <div class="poster-container">
        <img src="../../assets/images/bag02.jpg">
      </div>
      <div class="goods">
        <el-row>
          <el-col :span='16' :offset="4">
            <c-goods-difference class="goods-con"></c-goods-difference>
          </el-col>
        </el-row>
      </div>
      <div class="goods-mobile">
        <el-row>
          <el-col>
            <c-goods-difference class="goods-con"></c-goods-difference>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import CGoodsDifference  from '@/components/CGoods/c-goods-difference'
export default {
  name: 'c-productlist',
  components: {
    CGoodsDifference
  },
  props: {
    formatProductData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.c-productlist {
  .goods-mobile {
    display: none;
  }
  @media screen and (max-width: 700px) {
    .goods {
      display: none;
    }
    .goods-mobile {
      display: block;
    }
  }
}
.poster-container {
  width: 68%;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 0;
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  img{
    width: 100%;
  }
}
</style>
