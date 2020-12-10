<template>
  <div class="systemItem" :class="[item.sysType=='right'?'grey':'']">
    <div class="systemItem-left">
      <img v-if="item.sysType == 'left'" :src="item.sysSrc" alt="systemImg" />
      <div v-else class="left-cont">
        <h1 class="left-title">{{item.title}}</h1>
        <p class="left-content">{{item.desc}}</p>
      </div>
    </div>
    <div class="systemItem-right">
      <img v-if="item.sysType == 'right'" :src="item.sysSrc" alt="systemImg" />
      <div v-else class="right-cont">
        <h1 class="right-title">{{item.title}}</h1>
        <p class="right-content">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import systemImg1 from "@/assets/images/system1.png";
export default {
  name: "systemItem",
  props:['item'],
  data() {
    return {
      imgSrc:systemImg1
    };
  }
};
</script>

<style lang="less" scoped>
.systemItem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 39.4vw;
  padding: 0 10.4vw;
  .systemItem-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 34.1vw;
    height: 39.4vw;
    img {
      width: 34.1vw;
      height: 33.4vw;
    }
    .left-cont {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 39.6vw;
      height: 33.9vw;
      .left-title {
        font-size: 1.6vw;
        font-family: MFShangYa_Noncommercial, MFShangYa_Noncommercial-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 37px;
        margin-bottom: 2.3vw;
      }
      .left-content {
        font-size: 22px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 25px;
      }
    }
  }
  .systemItem-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 34.1vw;
    height: 39.4vw;
    img {
      width: 34.1vw;
      height: 33.4vw;
    }
    .right-cont {
      .right-title {
        font-size: 1.6vw;
        font-family: MFShangYa_Noncommercial, MFShangYa_Noncommercial-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 37px;
        margin-bottom: 2.3vw;
      }
      .right-content {
        font-size: 22px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 25px;
      }
    }
  }
}
.grey {
  background: rgba(229, 236, 255, 0.2);
}
</style>
