<template>
  <div>
    <c-header></c-header>
    <CdetailBanner :goodsDetailData="goodsDetailData"/>
    <div class="poster-container">
      <img src="../../assets/images/con.jpg">
      <img src="../../assets/images/con.jpg"> 
    </div>
    <el-row>
      <el-col :span='16' :offset="4">
          <c-goods class="goods-con" :layoutFlag="layoutFlag"></c-goods>
      </el-col>
    </el-row>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader/c-header'
import CFooter from '@/components/CFooter/c-footer';
import CdetailBanner from '@/components/CDetailBanner/detailBanner'
import CGoods from '@/components/CGoods/c-goods'

export default {
  name: 'detail',
  components: {
    CHeader,
    CFooter,
    CdetailBanner,
    CGoods
  },
  data () {
    return {
      layoutFlag: true,
      goodsDetailData: []
    }
  },
  created () {
  },
  mounted () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      let id = this.$route.params.id
      this.$axios.get().then(res => {
        this.$axios.get().then(res => {
        if (res.code === 0) {
            this.goodsDetailData = res.data
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.poster-container {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 12px;
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
