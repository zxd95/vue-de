<template>
  <div class="c-banner">
    <div class="banner">
      <el-row :span="24">
        <el-col :span="20" :offset="2">
          <div>
            <el-row>
              <el-col :span="13">
                <el-row>
                  <template v-if="!hidden">
                    <el-col :span="7">
                      <div class="smallPic">
                        <div class="picBox" @click="image = 1" :class="{notactive:image == 2}">
                          <img style="display: inherit;" src="../../assets/images/detail2.png" alt />
                        </div>
                        <div class="picBox" @click="image = 2" :class="{notactive:image == 1}">
                          <img style="display: inherit;" src="../../assets/images/detail2.png" alt />
                        </div>
                      </div>
                    </el-col>
                  </template>
                  <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                    <div class="bigPic">
                      <img v-show="image == 1" src="../../assets/images/watch01.png" alt />
                      <img v-show="image == 2" src="../../assets/images/watch04.png" alt />
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="11">
                <div class="rightTxt" :class="{lineH:!hidden}">
                  <strong class="priceTxt">$888,888</strong>
                  <p class="medium">
                    Livraison gratuite, les taxes seront calculées au
                  </p>
                  <span>moment de l'achat</span>
                  <p class="medium line">Customization lead time 15 days</p>
                  <p class="bold">CONCEPT DE DESIGN</p>
                  <p class="line line-pad"></p>
                  <div class="icon-con">
                    <span class="icon-item">
                      <img class="img-trim" src="../../assets/images/wechat.png" alt="">
                    </span>
                    <span class="icon-item">
                      <img class="img-trim" src="../../assets/images/weibo.png" alt="">
                    </span>
                    <span class="icon-item">
                      <img class="img-trim" src="../../assets/images/instagram.png" alt="">
                    </span>
                    <span class="icon-item">
                      <img class="img-trim" src="../../assets/images/facebook.png" alt="">
                    </span>
                    <span class="icon-item">
                      <img class="img-trim" src="../../assets/images/twitter.png" alt="">
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="banner-mobile">
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="bigPic">
            <img v-show="image == 1" src="../../assets/images/bag01.jpg" alt />
            <img v-show="image == 2" src="../../assets/images/bag02.jpg" alt />
          </div>
        </el-col>
      </el-row>
      <div class="smallPic">
        <div class="picBox" @click="image = 1" :class="{notactive:image == 2}">
          <img style="display: inherit;" src="../../assets/images/detail2.png" alt />
        </div>
        <div class="picBox" @click="image = 2" :class="{notactive:image == 1}">
          <img style="display: inherit;" src="../../assets/images/detail2.png" alt />
        </div>
      </div>
    </div>
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
.c-banner {
  .banner {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .banner-mobile {
    @media screen and (max-width: 600px) {
      display: block;
      .bigPic {
        img {
          height: 220px;
        }
      }
      .smallPic {
        .picBox {
          display: inline-block;
          width: 25%;
        }
      }
    }
  }
}
.smallPic {
  padding-top: 10px;
}
.line-pad {
  padding-top: 72px;
}
.icon-con {
  padding-top: 24px;
}
.icon-item {
  padding-right: 24px;
}
.img-trim {
  transform: scale(0.8);
}
.banner {
  background-color:#f1f1f1;
  padding: 50px 0;
  .picBox {
    background-color: #fff;
    width: 68%;
    margin-bottom: 22px;
    border: 1px solid #686565;
    overflow: hidden;
    img {
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
      font-size: 34px;
      line-height: inherit;
      display: inline-block;
    }
    .medium {
      font-size: 16px;
      line-height: inherit;
      padding-top: 12px;
    }
    .line {
      padding-bottom: 22px;
      line-height: inherit;
      border-bottom: 1px solid #999;
    }
    .bold {
      font-size: 18px;
      line-height: inherit;
      padding-top: 22px;
    }
  }
  div.lineH {
    padding-top: 92px;
    padding-left: 20px;
  }
}
</style>