<template>
  <div class="consultancy">
    <div class="consult" @mousemove="handleChangeFlag" @mouseleave="handleCloseFlag">
      <span class="iconfont icon-erji"></span>
      <p>咨询服务</p>
    </div>
    <transition name = "fade"     
      enter-class="fade-in-enter"
      enter-active-class="fade-in-active"
      leave-class="fade-out-enter"
      leave-active-class="fade-out-active"
    >
      <div class="scan" v-show="flag" @mousemove="handleChangeFlag" @mouseleave="handleCloseFlag">
        <div class="scan-content">
          <div class="content-left">
            <Icon type="ios-call-outline" />
            <p>咨询电话</p>
            <p>010-64170741</p>
          </div>
<<<<<<< HEAD
          <!-- <div class="content-right">
=======
          <div class="content-right">
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
            <p>扫码咨询</p>
            <div class="right-content">
              <img :src="footerImg1" alt />
            </div>
<<<<<<< HEAD
          </div> -->
=======
          </div>
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import footerImg1 from "@/assets/images/footerImg1.png";
export default {
  name: "footerBar",
  data() {
    return {
      flag:false,
      footerImg1:footerImg1
    };
  },
  methods:{
    handleChangeFlag(){
      this.flag = true
    },
    handleCloseFlag(){
      this.flag = false
    }
  }
};
</script>

<style lang="less" scoped>
.fade-in-active,
.fade-out-active {
  transition: all 0.01s ease;
}
.fade-in-enter,
.fade-out-active {
  opacity: 0;
}
.consultancy {
  // width: 21.6vw;
  height: 160px;
  position: fixed;
  right: 5px;
  top: 50%;
  // border: 1px solid #ccc;
  .scan {
    width: 16.6vw;
    height: 8.3vw;
    float: right;
    padding-right: 1vw;
    transition: opacity 0.4s ease-in-out;
    -moz-transition: opacity 0.4s ease-in-out;
    -webkit-transition: opacity 0.4s ease-in-out;
    .scan-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      width: 300px;
      height: 160px;
      background: #fff;
      float: right;
      border: 1px solid #ccc;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -6px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        background: #fff;
      }
      // padding-right: 1vw;
      .content-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 150px;
        padding-top: 20px;
        /deep/.ivu-icon {
          font-size: 26px;
          margin: 10px 0;
          font-weight: 600;
        }
        p {
          text-align: center;
          font-size: 15px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          padding: 5px 0;
        }
      }
      .content-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;
        height: 100%;
        p {
          padding: 12px 0 6px;
          text-align: center;
          letter-spacing: 3px;
          font-size: 18px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          // line-height: 1.1vw;
          letter-spacing: 12px;
        }
        .right-content {
          display: flex;
          justify-content: center;
          width: 100%;
          border-left: 1px solid #ccc;
          img {
            width: 114px;
            height: 114px;
          }
        }
      }
    }
  }
  .consult {
    float: right;
    width: 64px;
    height: 160px;
    color: #315392;
    cursor: pointer;
    background: #fff;
    text-align: center;
    padding: 10px;
    span {
      font-size: 26px;
    }
    p {
      writing-mode: horizontal-tb;
      font-size: 24px;
      padding-top: 5px;
      text-align: center;
      line-height: 28px;
    }
  }
}
</style>
