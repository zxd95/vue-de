<template>
  <div class="c-productlist">
    <div>
      <!-- <el-row>
        <el-col :span='16' :offset="4"> -->
            <div class="poster-container">
              <img src="../../assets/images/bag01.jpg"> 
            </div>
        <!-- </el-col>
      </el-row> -->
      <el-row>
        <el-col :span='16' :offset="4">
            <c-goods class="goods-con"></c-goods>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CGoods from '@/components/CGoods/c-goods'
export default {
  name: 'c-productlist',
  components: {
    CGoods
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.poster-container {
  width: 76%;
  margin: 0 auto;
  padding-bottom: 40px;
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
