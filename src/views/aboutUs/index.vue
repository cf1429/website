<!--
 * @Author: Joker
 * @Date: 2020-09-17 11:51:22
 * @LastEditTime: 2020-10-28 11:48:03
 * @FilePath: \website\src\views\aboutUs\index.vue
-->

<template>
  <div class="aboutUs">
    <Row>
      <div class="aboutUs-banner">
        <div class="banner-left">
          <h1 class="left-top">旭莱环保科技</h1>
          <h1 class="left-bottom">专心·专注·专业·安全</h1>
        </div>
        <img class="banner-right" :src="bannerSrc" alt />
      </div>
    </Row>
    <abstract />
    <arbitrament />
    <team />
    <joinUs />
    <photoWall />
  </div>
</template>

<script>
import aboutUsbanner from "@/assets/images/aboutUsbanner.png";
import abstract from './children/abstract'
import team from './children/team'
import joinUs from './children/joinUs'
import arbitrament from './children/arbitrament'
import photoWall from './children/photoWall'
export default {
  name: "aboutUs",
  components:{
    abstract,
    arbitrament,
    team,
    joinUs,
    photoWall
  },
  data() {
    return {
      bannerSrc:aboutUsbanner,
    };
  },
};
</script>

<style lang="less" scoped>
.aboutUs {
  .aboutUs-banner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40vw;
    padding-left: 17.1vw;
    padding-right: 17.4vw;
    color: #fff;
    background: linear-gradient(112deg, #2759b5 10%, #315392 116%);
    .banner-left {
      .left-top {
        font-size: 3.1vw;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        line-height: 4.4vw;
        text-align: center;
        letter-spacing: 18px;
      }
      .left-bottom {
        margin-top: 1.2vw;
        font-size: 1.9vw;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        line-height: 2.6vw;
      }
    }
    .banner-right {
      width: 31.2vw;
      height: 31.2vw;
    }
  }
}
</style>
