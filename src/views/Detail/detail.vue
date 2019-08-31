<template>
  <div class="test">
    <c-header></c-header>
    <CdetailBanner :goodsDetailData="goodsDetailData"/>
    <div class="brand">
      <img class="img-trim" src="../../assets/images/brand01.png">
    </div>
    <div class="goods">
      <el-row>
        <el-col :span='16' :offset="4">
          <c-goods class="goods-con" :layoutFlag="layoutFlag"></c-goods>
        </el-col>
      </el-row>
    </div>
    <div class="goods-mobile">
      <el-row>
        <el-col>
          <c-goods class="goods-con" :layoutFlag="layoutFlag"></c-goods>
        </el-col>
      </el-row>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader/c-header'
import CFooter from '@/components/CFooter/c-footer';
import CdetailBanner from '@/components/CDetailBanner/detailBanner'
import CGoods from '@/components/CGoods/c-goods'

const mockData = [{
  id: '1',
  imgUrl: require('../../assets/images/differencePic03.png'),
  imgUrls: require('../../assets/images/differencePic03-2.png'),
  smallPic: require('../../assets/images/small03.png'),
  smallPics: require('../../assets/images/small03-2.png'),
  conPic: require('../../assets/images/con03.jpg'),
  priceTitle: 'Skull',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Le crâne le plus ridicule et le plus créatif, né avec une étrange odeur, semble posséder une force mystérieuse de la nuit.L 'élément crânien a évolué jusqu' à présent.Décoré dans les poignets, il y a non seulement un choc visuel spectaculaire, la mode avant - garde, mais aussi l 'expression du courage et de l' indifférence de l 'utilisateur.`
},{
  id: '2',
  imgUrl: require('../../assets/images/differencePic02.png'),
  imgUrls: require('../../assets/images/differencePic02-2.png'),
  smallPic: require('../../assets/images/small02.png'),
  smallPics: require('../../assets/images/small02-2.png'),
  conPic: require('../../assets/images/con02.jpg'),
  priceTitle: 'Skull 2',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Le crâne le plus ridicule et le plus créatif, né avec une étrange odeur, semble posséder une force mystérieuse de la nuit.L 'élément crânien a évolué jusqu' à présent.Décoré dans les poignets, il y a non seulement un choc visuel spectaculaire, la mode avant - garde, mais aussi l 'expression du courage et de l' indifférence de l 'utilisateur.`
},{
  id: '3',
  imgUrl: require('../../assets/images/differencePic01.png'),
  imgUrls: require('../../assets/images/differencePic01-2.png'),
  smallPic: require('../../assets/images/small01.png'),
  smallPics: require('../../assets/images/small01-2.png'),
  conPic: require('../../assets/images/con01.jpg'),
  priceTitle: 'Skull 3',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Le crâne le plus ridicule et le plus créatif, né avec une étrange odeur, semble posséder une force mystérieuse de la nuit.L 'élément crânien a évolué jusqu' à présent.Décoré dans les poignets, il y a non seulement un choc visuel spectaculaire, la mode avant - garde, mais aussi l 'expression du courage et de l' indifférence de l 'utilisateur.`
},{
  id: '4',
  imgUrl: require('../../assets/images/differencePic04.png'),
  imgUrls: require('../../assets/images/differencePic04-2.png'),
  smallPic: require('../../assets/images/small04.png'),
  smallPics: require('../../assets/images/small04-2.png'),
  conPic: require('../../assets/images/con04.jpg'),
  brand: require('../../assets/images/brand01.png'),
  priceTitle: 'The Exploded Dragon',
  priceTxt: '43800',
  limEdition: '5 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Le monde des enfants est pure, immaculé et sans défense; les dinosaures puissants et féroces peuvent être des dragons violents et intéressants qui nous accompagnent à grandir.Dessiner le tyrannosaure dans la mobilisation générale des jouets, c 'est dire aimer comme un enfant, l' amour pur s' éteint à tout moment et se consolide en l 'éternité.`
},{
  id: '5',
  imgUrl: require('../../assets/images/differencePic05.png'),
  imgUrls: require('../../assets/images/differencePic05-2.png'),
  smallPic: require('../../assets/images/small05.png'),
  smallPics: require('../../assets/images/small05-2.png'),
  conPic: require('../../assets/images/con05.jpg'),
  priceTitle: 'The Exploded Dragon',
  priceTxt: '43800',
  limEdition: '5 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Le monde des enfants est pure, immaculé et sans défense; les dinosaures puissants et féroces peuvent être des dragons violents et intéressants qui nous accompagnent à grandir.Dessiner le tyrannosaure dans la mobilisation générale des jouets, c 'est dire aimer comme un enfant, l' amour pur s' éteint à tout moment et se consolide en l 'éternité.`
},{
  id: '6',
  imgUrl: require('../../assets/images/street01.png'),
  smallPic: require('../../assets/images/small10.png'),
  imgUrls: require('../../assets/images/differencePic08-2.png'),
  smallPics: require('../../assets/images/samll08-2.png'),
  priceTitle: 'Golden Classic',
  priceTxt: '43800',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Chaque magicien de la rue émerveille un courage, une vitalité, une intelligence, une connotation et une imagination extraordinaires.Aujourd 'hui, le magicien insuffle dans la conception classique de la Rolex des couleurs qui représentent le courage, la motivation, la sagesse et l' imagination, des couleurs colorées, comme le magicien, qui donne un choc visuel extraordinaire.`
},{
  id: '7',
  imgUrl: require('../../assets/images/street02.png'),
  smallPic: require('../../assets/images/small09.png'),
  imgUrls: require('../../assets/images/differencePic09-2.png'),
  smallPics: require('../../assets/images/small09-2.png'),
  conPic: require('../../assets/images/con09.jpg'),
  priceTitle: 'Racing Orange',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Chaque magicien de la rue émerveille un courage, une vitalité, une intelligence, une connotation et une imagination extraordinaires.Aujourd 'hui, le magicien insuffle dans la conception classique de la Rolex des couleurs qui représentent le courage, la motivation, la sagesse et l' imagination, des couleurs colorées, comme le magicien, qui donne un choc visuel extraordinaire.`
},{
  id: '8',
  imgUrl: require('../../assets/images/street03.png'),
  smallPic: require('../../assets/images/small08.png'),
  imgUrls: require('../../assets/images/differencePic10-2.png'),
  smallPics: require('../../assets/images/small10-2.png'),
  priceTitle: 'Classic Black And White',
  priceTxt: '43800',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Chaque magicien de la rue émerveille un courage, une vitalité, une intelligence, une connotation et une imagination extraordinaires.Aujourd 'hui, le magicien insuffle dans la conception classique de la Rolex des couleurs qui représentent le courage, la motivation, la sagesse et l' imagination, des couleurs colorées, comme le magicien, qui donne un choc visuel extraordinaire.`
},{
  id: '9',
  imgUrl: require('../../assets/images/street04.png'),
  smallPic: require('../../assets/images/small11.png'),
  imgUrls: require('../../assets/images/differencePic11-2.png'),
  smallPics: require('../../assets/images/small11-2.png'),
  conPic: require('../../assets/images/con11.jpg'),
  priceTitle: 'Racing Green',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Chaque magicien de la rue émerveille un courage, une vitalité, une intelligence, une connotation et une imagination extraordinaires.Aujourd 'hui, le magicien insuffle dans la conception classique de la Rolex des couleurs qui représentent le courage, la motivation, la sagesse et l' imagination, des couleurs colorées, comme le magicien, qui donne un choc visuel extraordinaire.`
},{
  id: '10',
  imgUrl: require('../../assets/images/sun01.png'),
  imgUrls: require('../../assets/images/differencePic06-2.png'),
  smallPic: require('../../assets/images/small06.png'),
  smallPics: require('../../assets/images/samll06-2.png'),
  conPic: require('../../assets/images/con06.jpg'),
  priceTitle: 'Sun Flower 2',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Inspiré par les fleurs de soleil du village japonais "fantôme", riche en couleurs et charmant sourire, le stratifié nous apporte un festin visuel coloré.Il y a de belles illusions et des symboles artistiques très créatifs, qui font briller les yeux, donnent à la Rolex classique de concevoir une nouvelle vitalité, et permettent aux classiques et aux courants de heurter la force de la jeune mode.`
},{
  id: '11',
  imgUrl: require('../../assets/images/sun02.png'),
  smallPic: require('../../assets/images/small07.png'),
  imgUrls: require('../../assets/images/differencePic07-2.png'),
  conPic: require('../../assets/images/con07.jpg'),
  smallPics: require('../../assets/images/small07-2.png'),
  priceTitle: 'Sun Flower',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Inspiré par les fleurs de soleil du village japonais "fantôme", riche en couleurs et charmant sourire, le stratifié nous apporte un festin visuel coloré.Il y a de belles illusions et des symboles artistiques très créatifs, qui font briller les yeux, donnent à la Rolex classique de concevoir une nouvelle vitalité, et permettent aux classiques et aux courants de heurter la force de la jeune mode.`
},{
  id: '12',
  imgUrl: require('../../assets/images/differencePic06.png'),
  imgUrls: require('../../assets/images/differencePic12-2.png'),
  smallPic: require('../../assets/images/small12.png'),
  smallPics: require('../../assets/images/small12-2.png'),
  conPic: require('../../assets/images/con12.jpg'),
  priceTitle: 'Red Skull',
  priceTxt: '43800',
  limEdition: '5 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Le monde des enfants est pure, immaculé et sans défense; les dinosaures puissants et féroces peuvent être des dragons violents et intéressants qui nous accompagnent à grandir.Dessiner le tyrannosaure dans la mobilisation générale des jouets, c 'est dire aimer comme un enfant, l' amour pur s' éteint à tout moment et se consolide en l 'éternité.`
},{
  id: '13',
  imgUrl: require('../../assets/images/sun13.png'),
  imgUrls: require('../../assets/images/sun13-2.png'),
  smallPic: require('../../assets/images/small13-2.png'),
  smallPics: require('../../assets/images/small13.png'),
  conPic: require('../../assets/images/con13.jpg'),
  priceTitle: 'Game Panda',
  priceTxt: '45000',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Lorsque les pandas épais atteignent le jeu sanglant, saisissez l'arme dans leurs mains - la manette de jeu, instantanément transformée en guerrier plein d'esprit de combat, Cronusart gravera cet esprit de combat dans une génération du Daytona classique, combattez le panda!`
},{
  id: '14',
  imgUrl: require('../../assets/images/street14.png'),
  smallPic: require('../../assets/images/small14.png'),
  imgUrls: require('../../assets/images/street14-2.png'),
  smallPics: require('../../assets/images/small14-2.png'),
  conPic: require('../../assets/images/con14.jpg'),
  priceTitle: 'Cronus Art',
  priceTxt: '43800',
  limEdition: '8 PCS',
  collection: 'fibre de carbone ',
  model: 'Cosmograph Daytona',
  caliber: '4130',
  case: '40MM',
  strapMaterial: 'Canvas strap',
  describe: `Chaque magicien de la rue émerveille un courage, une vitalité, une intelligence, une connotation et une imagination extraordinaires.Aujourd 'hui, le magicien insuffle dans la conception classique de la Rolex des couleurs qui représentent le courage, la motivation, la sagesse et l' imagination, des couleurs colorées, comme le magicien, qui donne un choc visuel extraordinaire.`
}]

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
      goodsDetailData: [],
      showFlag: false
    }
  },
  created () {
    this.showFlag = this.$route.params.id === 4 ? true : false
    if (this.$route.params.id) {
      let index = this.$route.params.id - 1
      this.goodsDetailData = mockData[index]
    }
  },
  mounted () {
    // this.getGoodsList()
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
.test {
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
</style>
