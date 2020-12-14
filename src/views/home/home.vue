<template>
  <div class="home">
    <Row v-if="headerBanner.length" class="carousel-wrapper">
      <carousel :carouselData="headerBanner" />
    </Row>
    <Row class="banner-wrapper">
      <img :src="bannerSrc" alt />
      <div class="banner-wrapper-content">
        <h1 class="fs60 content-first">陕西旭莱环保科技有限公司</h1>
        <!-- <h2 class="fs26 content-second">Shaanxi Xulai Environmental Protection </h2> -->
      </div>
    </Row>
    <Row class="advantage">
      <advantage />
    </Row>
    <Row v-if="middleBanner.length" class="carousel-wrapper">
      <carousel :carouselData="middleBanner" />
    </Row>
    <!-- <Row class="flow">
      <flow />
    </Row> -->
    <Row class="flow">
      <flow />
    </Row>
    <Row class="mapCom">
      <mapCom />
    </Row>
    <Row class="companion">
      <companionCom />
    </Row>
    <Row v-if="bottomBanner.length" class="carousel-wrapper">
      <carousel :carouselData="bottomBanner"  />
    </Row>
  </div>
</template>

<script>
import carousel from './children/carousel'
import advantage from './children/advantage'
import flow from './children/flow'
import mapCom from './children/mapCom'
import companionCom from './children/companionCom'
import bannerImg from "@/assets/images/banner.png";
import { mapActions } from 'vuex'
export default {
  name: "home",
  components:{
    carousel,
    advantage,
    flow,
    mapCom,
    companionCom,
  },
  data() {
    return {
      bannerSrc:bannerImg,
      headerBanner:[],
      middleBanner:[],
      bottomBanner:[]
    };
  },
  methods:{
    ...mapActions(['getBanner']),
    async getData(){
      let params = {
        type:4,
        pageNum:0,
        pageSize:999,
        state:2
      };
      try{
        let result = await this.getBanner(params)
        if(result.flag){
          let {dataList} = result.data;
          this.headerBanner = dataList.filter(item=>item.categoryName === '头部').sort((a,b)=>a.sort-b.sort)
          this.middleBanner = dataList.filter(item=>item.categoryName === '中部').sort((a,b)=>{a.sort-b.sort})
          this.bottomBanner = dataList.filter(item=>item.categoryName === '底部').sort((a,b)=>{a.sort-b.sort})
        }
      }catch(e){
        throw new Error(e)
      }
    }
  },
  mounted(){
    this.getData()
  }
};
</script>

<style lang="less" scoped>
.home {
  .carousel-wrapper {
    height: 7.6vw;
  }
  .banner-wrapper {
    position: relative;
    width: 100%;
    margin-top: -1px;
    img {
      height: 100%;
      width: 100%;
    }
    .banner-wrapper-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 79.2vw;
      height: 18.2vw;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      .content-first {
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        line-height: 84px;
      }
      .content-second {
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        line-height: 37px;
      }
      .fs60 {
        font-size: 3.1vw;
      }
      .fs26 {
        font-size: 1.4vw;
      }
    }
  }
}
</style>
