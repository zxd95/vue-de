<template>
  <div class="c-footer">
    <div class="logo">
      <img src="../../assets/images/footerLogo.png">
    </div>
    <div class="container">
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
        <span class="contact-btn">CONTACT</span>
        <span class="contact-btn btn-right">SERVICE</span>
        <div class="border-con"></div>
      </div>
      <div class="submit-con">
        <span class="input-con">Email address</span>
        <span class="input-submit">SIGN UP</span>
        <span class="text-con">
          <p>Sign up for our newsletter and get exclusive</p>
          <p>content and discou</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-footer'
}
</script>

<style lang="scss" scoped>
.c-footer {
  background-color: #f1f1f1;
  .logo {
    padding: 28px 0;
    transform: scale(0.72);
    @media screen and (max-width: 600px) {
      transform: scale(0.42);
    }
  }
}
.icon-item {
  padding-right: 30px;
  position: relative;
  top: 4px;
  @media screen and (max-width: 600px) {
    padding-right: 10px;
    padding-left: 18px;
  }
  .img-trim {
    transform: scale(0.9);
    @media screen and (max-width: 600px) {
      transform: scale(0.7);
    }
  }
}
.container {
  top: -12px;
}
.contact-btn {
  position: relative;
  left: 18px;
  padding: 2px 30px;
  border: 1px solid #332c2b;
  color: #332c2b;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 46px;
    left: 25%;
    right: 25%;
    padding: 2px 30px;
  }
}
.btn-right {
  margin-left: 32px;
  @media screen and (max-width: 600px) {
    top: 88px;
    margin: 0;
  }
}
.border-con {
  width: 1060px;
  padding-top: 24px;
  margin: 0 auto;
  border-bottom: 1px solid #332c2b;
  @media screen and (max-width: 600px) {
    padding-top: 118px;
    width: 320px;
  }
}
.submit-con {
  margin-top: 40px;
  padding-bottom: 80px;
  @media screen and (max-width: 600px) {
    margin-top: 28px;
    padding-bottom: 32px;
  }
  .input-con {
    display: inline-block;
    position: relative;
    right: 158px;
    padding: 8px 90px 8px 10px;
    border: 2px solid #332c2b;
    @media screen and (max-width: 600px) {
      right: 0;
      padding: 4px 50px 4px 4px;
    }
  }
  .input-submit {
    position: relative;
    right: 164px;
    display: inline-block;
    padding: 8px 10px;
    border: 2px solid #332c2b;
    background-color: #332c2b;
    color: #fff;
    @media screen and (max-width: 600px) {
      right: 8px;
      padding: 4px 4px;
    }
  }
  .text-con {
    display: inline-block;
    position: absolute;
    right: 382px;
    font-size: 14px;
    @media screen and (max-width: 600px) {
      position: static;
      padding-top: 12px;
    }
  }
}
</style>
