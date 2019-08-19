<template>
  <div class="banner">
    <el-row :span="24">
      <el-col :span="20" :offset="2">
        <div>
          <el-row>
            <el-col :span="12">
              <el-row>
                <template v-if="!hidden">
                  <el-col :span="8">
                    <div class="smallPic">
                      <div class="picBox" @click="image = 1" :class="{notactive:image == 2}">
                        <img src="../../assets/images/detail2.png" alt />
                      </div>
                      <div class="picBox" @click="image = 2" :class="{notactive:image == 1}">
                        <img src="../../assets/images/detail2.png" alt />
                      </div>
                    </div>
                  </el-col>
                </template>
                <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                  <div class="bigPic">
                    <img v-show="image == 1" src="../../assets/images/detail1.png" alt />
                    <img v-show="image == 2" src="../../assets/images/detail1.png" alt />
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <div class="rightTxt" :class="{lineH:!hidden}">
                <strong>$888,888</strong>
                <p class="medium">
                  Livraison gratuite, les taxes seront calculées au
                  moment de l'achat
                </p>
                <p class="medium line">Customization lead time 15 days</p>
                <p class="bold">CONCEPT DE DESIGN</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'c-detailBanner',
  data() {
    return {
      image: 1,
      hidden: false
    }
  },
  mounted() {
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
    }
  }
};
</script>
<style lang='scss' scoped>
.banner {
  background-color: lightgray;
  padding: 50px 0;
  .picBox {
    background-color: #fff;
    width: 50%;
    margin-bottom: 10px;
    padding: 13px 0;
    border: 1px solid #686565;
    overflow: hidden;
    img {
      // width: 90%;
      transition: all 1s;
      transition: All 0.4s ease-in-out;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
  div.notactive {
    opacity: 0.5;
  }
  .rightTxt {
    text-align: left;
    strong {
      font-size: 30px;
      line-height: inherit;
      display: inline-block;
    }
    .medium {
      font-size: 16px;

      line-height: inherit;
      margin-bottom: 10px;
    }
    .line {
      padding-bottom: 10px;

      line-height: inherit;
      border-bottom: 1px solid #999;
    }
    .bold {
      font-size: 20px;
      line-height: inherit;
    }
  }
  div.lineH {
    line-height: 3;
    padding: 0 5%;
  }
}
</style>