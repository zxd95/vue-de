<template>
  <div class="c-banner">
    <div class="banner">
      <div class="banner-con" style="background-color: #f1f1f1;">
      <el-row :span="24">
        <el-col :span="20" :offset="2">
          <div>
            <el-row>
              <el-col :span="13">
                <el-row>
                  <template>
                    <el-col :span="7">
                      <div class="smallPic">
                        <div class="picBox" @click="image = 1" :class="{notactive:image == 2}">
                          <img style="display: inherit;" :src="goodsDetailData.smallPic" alt />
                        </div>
                        <div class="picBox" @click="image = 2" :class="{notactive:image == 1}">
                          <img style="display: inherit;" :src="goodsDetailData.smallPics" alt />
                        </div>
                      </div>
                    </el-col>
                  </template>
                  <transition name="slide-fade">
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                      <div class="bigPic">
                        <img v-show="image == 1" :src="goodsDetailData.imgUrl" alt />
                        <img v-show="image == 2" :src="goodsDetailData.imgUrls" alt />
                      </div>
                    </el-col>
                  </transition>
                </el-row>
              </el-col>
              <el-col :span="11">
                <div class="rightTxt" :class="{lineH:!hidden}">
                  <p class="priceTitle">{{ goodsDetailData.priceTitle }}</p>
                  <strong class="priceTxt">Prix: €{{ goodsDetailData.priceTxt }}</strong>
                  <p class="medium">Edition limite: {{ goodsDetailData.limEdition }}</p>
                  <p class="medium">Matériaux: {{ goodsDetailData.collection }}</p>
                  <p class="medium">Prototype: {{ goodsDetailData.model }}</p>
                  <p class="medium">Mouvement: {{ goodsDetailData.caliber }}</p>
                  <p class="medium">Diamètre de surface: {{ goodsDetailData.case }}</p>
                  <p class="medium line">Strap material: {{ goodsDetailData.strapMaterial }}</p>
                  <p class="medium">{{ goodsDetailData.describe }}</p>
                  <p class="line line-pad"></p>
                  <div class="icon-con">
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
      <div class="poster-container">
        <img :src="goodsDetailData.conPic">
      </div>
    </div>
    <div class="banner-mobile">
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="bigPic">
            <img v-show="image == 1" :src="goodsDetailData.imgUrl" alt />
            <img v-show="image == 2" :src="goodsDetailData.imgUrls" alt />
          </div>
          <div class="smallPic">
            <div class="picBox" @click="image = 1" :class="{notactive:image == 2}">
              <div class="picCon">
                <img style="display: inherit;" :src="goodsDetailData.smallPic" alt />
              </div>
            </div>
            <div class="picBox" @click="image = 2" :class="{notactive:image == 1}">
              <div class="picCon">
                <img style="display: inherit;" :src="goodsDetailData.smallPics" alt />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="rightTxt" :class="{lineH:!hidden}">
            <p class="priceTitle">{{ goodsDetailData.priceTitle }}</p>
            <strong class="priceTxt">Prix: €{{ goodsDetailData.priceTxt }}</strong>
            <p class="medium">Edition limite: {{ goodsDetailData.limEdition }}</p>
            <p class="medium">Matériaux: {{ goodsDetailData.collection }}</p>
            <p class="medium">Prototype: {{ goodsDetailData.model }}</p>
            <p class="medium">Mouvement: {{ goodsDetailData.caliber }}</p>
            <p class="medium">Diamètre de surface: {{ goodsDetailData.case }}</p>
            <p class="medium line">Strap material: {{ goodsDetailData.strapMaterial }}</p>
            <p class="medium" style="margin-top:8px;">{{ goodsDetailData.describe }}</p>
          </div>
        </el-col>
      </el-row>
      <div class="poster-container">
        <img :src="goodsDetailData.conPic">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'c-detailBanner',
  props: {
    goodsDetailData: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      image: 1,
      hidden: false
    }
  },
  created() {
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
.priceTitle {
  font-weight: 700;
  font-size: 36px;
}
.poster-container {
  width: 80%;
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.c-banner {
  .banner {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .banner-mobile {
    @media screen and (min-width: 600px) {
      display: none;
    }
    @media screen and (max-width: 600px) {
      display: block;
      .bigPic {
        padding: 16px;
        img {
          width: 52%;
          height: 50%;
        }
      }
      .smallPic {
        padding-top: 2px;
        .picBox {
          display: inline-block;
          width: 22%;
          margin-left: 14px;
          .picCon {
            background-color: #fff;
            border: 1px solid #686565;
            overflow: hidden;
            cursor: pointer;
            img {
              // padding: 0 18px;
              transition: all 1s;
              transition: All 0.4s ease-in-out;
            }
            img:hover {
              transform: scale(1.1);
            }
          }
        }
      }
      .rightTxt {
        padding: 0 28px 12px 28px;
        text-align: left;
        .priceTitle {
          font-size: 22px;
        }
        .priceTxt {
          font-size: 14px;
        }
        strong {
          font-size: 22px;
          line-height: inherit;
          display: inline-block;
        }
        .medium {
          font-size: 14px;
          line-height: inherit;
          // padding-top: 8px;
        }
        .line {
          padding-bottom: 8px;
          line-height: inherit;
          border-bottom: 1px solid #999;
        }
        .textline {
          padding-top: 8px;
        }
        .bold {
          font-size: 16px;
          line-height: inherit;
        }
      }
    }
  }
}
.smallPic {
  padding-top: 20px;
}
.line-pad {
  padding-top: 48px;
}
.icon-con {
  padding-top: 20px;
}
.icon-item {
  padding-right: 24px;
}
.img-trim {
  transform: scale(0.8);
}
.banner {
  .banner-con {
    padding: 30px 0;
    .picBox {
      background-color: #fff;
      width: 68%;
      margin-bottom: 22px;
      border: 1px solid #686565;
      overflow: hidden;
      cursor: pointer;
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
        font-size: 24px;
        line-height: inherit;
        display: inline-block;
      }
      .medium {
        font-size: 16px;
        line-height: inherit;
        padding-top: 8px;
      }
      .line {
        padding-bottom: 22px;
        line-height: inherit;
        border-bottom: 1px solid #999;
      }
      .bold {
        font-size: 18px;
        line-height: inherit;
        padding-top: 14px;
      }
    }
    div.lineH {
      padding-top: 80px;
      padding-left: 20px;
    }
  } 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>