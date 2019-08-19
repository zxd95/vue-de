<template>
  <div class="c-header">
    <div class="void"></div>
    <div class="logo">
      <a href="#">
        <img class="img-trim" src="../../assets/images/logo.png">
      </a>
    </div>
    <div class="burger">
      <span class="burger-icon">
        <img class="img-trim" src="../../assets/images/menu.png">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-header'
}
</script>

<style lang="scss" scoped>
.c-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 82px;
  @media screen and (max-width: 600px) {
    height: 54px;
  }
  .void {
    width: 40px;
    flex-grow: 1;
  }
  .burger {
    width: 40px;
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .burger-icon {
    padding-right: 24px;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      padding-right: 12px;
    }
  }
}
.img-trim {
  display: flex;
  transform: scale(0.6);
  @media screen and (max-width: 600px) {
    transform: scale(0.4);
  }
}
</style>
