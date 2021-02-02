<template>
  <div class="carousel">
    <Carousel v-model="value" autoplay loop dots="none" :radius-dot="true" arrow="always" @on-click="goPath">
      <CarouselItem v-for="(item) in carouselData" :key="item.filePath">
          <img :src="item.coverFile.filePath" :alt="item.filePath" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import carsoul1 from "@/assets/images/carsoul1.png";
import carsoul2 from "@/assets/images/carsoul2.png";
import carsoul3 from "@/assets/images/carsoul3.png";
export default {
  name: "carousel",
  props:['carouselData'],
  data() {
    return {
      value:0,
      carsoulImg:[
        {
          id:1,
          imgSrc:carsoul1
        },
        {
          id:2,
          imgSrc:carsoul2
        },
        {
          id:3,
          imgSrc:carsoul3
        }
      ]
    };
  },
  methods:{
    goPath(index){
      let path = this.carouselData[index].bannerLink
      window.open(`http://${path}`, '_blank');
    },
  }
};
</script>


<style lang="less" scoped>
/deep/ .ivu-carousel-arrow.left {
  left: 7.3vw;
  top: 45%;
}
/deep/ .ivu-carousel-arrow.right {
  right: 7.3vw;
  top: 45%;
}
/deep/ .ivu-carousel-item {
  img {
    width: 100%;
    cursor: pointer;
  }
}
</style>
