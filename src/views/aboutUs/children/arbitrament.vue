
<template>
  <div class="arbitrament">
    <titleCom style="margin-bottom:2vw" title="什么是互联网仲裁" />
    <span>互联网仲裁是指利用大数据、云计算、人工智能等技术提供仲裁服务的争议解决途径，依靠互联网仲裁系统来解决争议。互联网仲裁系统根据仲裁委的需求将仲裁的全部或主要程序，包括立案、受理、审理到裁决、送达等运用互联网线上实现。</span>
    <div class="arbitrament-show">
      <div class="showItem" v-for="item in arbitramentData" :key="item.id">
        <img :src="item.arbitramentImg" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import arbitramentImg from "@/assets/images/arbitrament1.png";
export default {
  name: "arbitrament",
  components:{
    titleCom  
  },
  data() {
    return {
      arbitramentData:[
        {
          id:'1',
          arbitramentImg:arbitramentImg,
          title:"便捷"
        },
        {
          id:'2',
          arbitramentImg:arbitramentImg,
          title:"高效"
        },
        {
          id:'3',
          arbitramentImg:arbitramentImg,
          title:"安全"
        },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.arbitrament {
  width: 80vw;
  margin: 0 auto;
  padding: 2.1vw;
  span {
    font-size: 16px;
    line-height: 30px;
  }
  .arbitrament-show {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4.9vw;
    .showItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 25vw;
      height: 8.3vw;
      background: #ffffff;
      border: 1px solid #e5eaf4;
      border-radius: 8px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
      padding: 0 3.1vw;
      img {
        width: 5.1vw;
        height: 6.8vw;
      }
      p {
        font-size: 1.9vw;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #315392;
        line-height: 2.6vw;
        margin-left: 4.2vw;
      }
    }
  }
}
</style>
