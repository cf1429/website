<template>
  <div class="funcItem">
    <div class="funcItem-left">
      <div
        class="btnItem"
        v-for="item in btnData"
        :key="item.id"
        :class="[item.id==value?'active':'']"
        @click="handleClick(item.id)"
      >{{item.title}}</div>
    </div>
    <div class="funcItem-right">
      <Carousel v-model="value" autoplay loop dots="none" :radius-dot="true" arrow="always">
        <CarouselItem v-for="item in carsoulImg" :key="item.id">
          <img :src="item.imgSrc" :alt="item.imgSrc" />
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
import carsoul1 from "@/assets/images/fun1.png";
import carsoul2 from "@/assets/images/fun2.png";
import carsoul3 from "@/assets/images/fun3.png";
import carsoul4 from "@/assets/images/fun4.png";
import carsoul5 from "@/assets/images/fun5.png";
import carsoul6 from "@/assets/images/fun6.jpg";
import carsoul7 from "@/assets/images/fun7.png";
import carsoul8 from "@/assets/images/fun8.png";

export default {
  name: "funcItem",
  data() {
    return {
      value:0,
      btnData:[
        {
          id:0,
          title:'注册登录',
          src:''
        },
        {
          id:1,
          title:'在线立案',
        },
        {
          id:2,
          title:'证据校验',
        },
        {
          id:3,
          title:'案件受理',
        },
        {
          id:4,
          title:'通知送达',
        },
        {
          id:5,
          title:'案件审理',
        },
        {
          id:6,
          title:'文书送达',
        },
        {
          id:7,
          title:'文书归档',
        },
      ],
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
        },
        {
          id:4,
          imgSrc:carsoul4
        },
        {
          id:5,
          imgSrc:carsoul5
        },
        {
          id:6,
          imgSrc:carsoul6
        },
        {
          id:7,
          imgSrc:carsoul7
        },
        {
          id:8,
          imgSrc:carsoul8
        }
      ]
    }
  },
  methods:{
    handleClick(id){
      this.value  = id
    }
  }
};
</script>

<style lang="less" scoped>
.funcItem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .funcItem-left {
    display: flex;
    flex-direction: column;
    width: 11.5vw;
    height: 33.3vw;
    .btnItem {
      width: 11.5vw;
      height: 3.1vw;
      line-height: 3.1vw;
      font-size: 18px;
      text-align: center;
      margin-bottom: 1vw;
      border-radius: 4px;
      cursor: pointer;
    }
    .active {
      background: #315392;
      color: #fff;
    }
  }
  .funcItem-right {
    width: 62.8vw;
    height: 33.3vw;
    margin-left: 3vw;
  }
  /deep/ .ivu-carousel-item {
    
    img {
      height: 33.3vw;
      // width: 100%;
    }
  }
}
</style>
