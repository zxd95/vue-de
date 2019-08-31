<template>
  <div class="c-goods">
    <el-row v-if="!this.layoutFlag">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="item in goodsList" :key="item.id">
        <div class="column col"  @click="handleDetail(item.id)">
          <div class="goods-item">
            <img :src="item.imgUrl">
            <span class="btn">{{ item.priceTitle }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
      <el-row v-else>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="item in goodsList" :key="item.id">
        <div class="column col" @click="handleDetail(item.id)">
          <div class="goods-item">
            <img :src="item.imgUrl">
            <span class="btn">{{ item.priceTitle }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'c-goods-difference',
  props: {
    layoutFlag: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      goodsList: [{
        id: '1',
        imgUrl: require('../../assets/images/differencePic03.png'),
        priceTitle: 'Skull'
      },{
        id: '2',
        imgUrl: require('../../assets/images/differencePic02.png'),
        priceTitle: 'Skull 2'
      },{
        id: '3',
        imgUrl: require('../../assets/images/differencePic01.png'),
        priceTitle: 'Skull 3'
      },{
        id: '4',
        imgUrl: require('../../assets/images/differencePic04.png'),
        priceTitle: 'The Exploded Dragon'
      },{
        id: '5',
        imgUrl: require('../../assets/images/differencePic05.png'),
        priceTitle: 'The Exploded Dragon'
      },{
        id: '12',
        imgUrl: require('../../assets/images/differencePic06.png'),
        priceTitle: 'Red Skull'
      },{
        id: '13',
        imgUrl: require('../../assets/images/sun13.png'),
        priceTitle: 'Game Panda'
      }]
    }
  },
  mounted () {
    this.changeClient()
    let _this = this
    window.onresize = () => {
      return (() => {
        _this.changeClient()
      })()
    }
  },
  methods: {
    changeClient() {
      let width = document.body.clientWidth
      if (width <= 600) {
        this.hidden = true
      } else {
        this.hidden = false
      }
    },
    handleDetail(id) {
      this.$router.push({ name: 'detail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.poster-container {
  width: 100%;
  margin: 0 auto;
  padding-top: 18px;
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
.col {
  cursor: pointer;
  .goods-item {
    img {
      padding: 15px;
    }
    @media screen and (max-width: 600px) {
      box-shadow: 0 0 10px 0 rgba(150, 108, 108, 0.1);
    }
  }
  .btn {
    width: 190px;
    display: inline-block;
    position: relative;
    margin: 0px 0 20px 0;
    padding: 4px 0;
    border: 1px solid #332c2b;
    // display: inline-block;
    // position: relative;
    // margin: 0px 0 20px 0;
    // padding: 4px 30px;
    // border: 1px solid #332c2b;
    @media screen and (max-width: 1300px) {
      display: inline-block;
      position: relative;
      padding: 2px 6px;
      border: 1px solid #332c2b;
      max-width: 174px;
    }
    @media screen and (max-width: 600px) {
      font-size: 12px;
      display: inline-block;
      position: relative;
      border: 1px solid #332c2b;
      max-width: 140px;
    }
  }
}
.col:hover {
  .goods-item {
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    img {
      padding: 15px;
      display: inline-block;
      transform: scale(1.04);
      transition: all 1s;
      transition: All 0.4s ease-in-out;
    }
    .btn {
      @media screen and (max-width: 1000px) {
        display: inline-block;
        position: relative;
        padding: 2px 6px;
        border: 1px solid #332c2b;
      }
      // display: inline-block;
      // position: relative;
      // margin: 0px 0 20px 0;
      // padding: 4px 30px;
      // border: 1px solid #332c2b;
    }
    .btn:before {
      position: absolute;
      top: 0px;
      content: '';
      width: 0;
      height: 32px;
      transition: 0.4s all ease;
      background: #332c2b;
      left: 0;
      z-index: -1;
      @media screen and (max-width: 600px) {
        height: 26px;
      }
    }
    .btn:hover {
      color: white;
    }
    .btn:hover:before {
      width: 100%;
      transition: 0.4s all ease;
    }
  }
}
</style>
