<template>
  <div class="c-goods">
    <div class="container">
    <div class="columns is-desktop">
      <el-row :gutter="10" v-if="!this.layoutFlag">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-for="item in goodsList" :key="item.id">
          <div class="column"  @click="handleDetail(item.id)">
            <div class="goods-item">
              <img :src="item.imgUrl">
              <span class="btn">EN SAVOIR PLUS</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-else>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" v-for="item in goodsList" :key="item.id">
          <div class="column"  @click="handleDetail(item.id)">
            <div class="goods-item">
              <img :src="item.imgUrl">
              <span class="btn">EN SAVOIR PLUS</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-goods',
  props: {
    layoutFlag: {
      type: Boolean,
      default () {
        return false
      }
    }
    // goodsList: {
    //   type: Array,
    //   default () {
    //     return []
    //   }
    // }
  },
  data () {
    return {
      goodsList: [{
        id: '0001',
        imgUrl: require('../../assets/images/watch01.png')
      },{
        id: '0002',
        imgUrl: require('../../assets/images/watch02.png')
      },{
        id: '0003',
        imgUrl: require('../../assets/images/watch03.png')
      }]
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
img {
  transition: all 1s;
  transition: All 0.4s ease-in-out;
}
img:hover {
  transform: scale(1.02);
}
.btn {
  display: inline-block;
  margin: 20px 0;
  padding: 4px 30px;
  border: 1px solid #332c2b;
}
</style>
