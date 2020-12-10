<template>
  <div class="newCont">
    {{newsContData.filePath}}
    <img class="newCont-left" :src="newsContData.coverFile.filePath" alt />
    <div class="newCont-right">
      <router-link
        :to="{path:'/news/detail',query:{id:newsContData.id,secType:secType}}"
        class="right-title"
        target="_blank"
      >{{newsContData.title}}<span class="topFlag" v-if="newsContData.topFlag ==1">置顶</span></router-link>

      <router-link
        :to="{path:'/news/detail',query:{id:newsContData.id,secType:secType}}"
        class="right-cont"
        target="_blank"
      >{{newsContData.sumInfo}}</router-link>

      <p class="right-bottom">
        <span class="bottom-left">
          <Icon type="ios-eye-outline"></Icon>
          阅读({{newsContData.browseNumber}})
          <Icon type="ios-time-outline"></Icon>
          {{newsContData.createTime}}
        </span>
        <router-link :to="{path:'/news/detail',query:{id:newsContData.id,secType:secType}}" tag="a" target="_blank">全文></router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "newCont",
  props:['newsContData','secType'],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.newCont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 9vw;
  width: 100%;
  margin: 10px 0;
  .newCont-left {
    height: 100%;
    width: 21.2vw;
  }
  .newCont-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 42.7vw;
    padding: 0.9vw 0;
    .right-title {
      font-size: 1vw;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 600;
      line-height: 1.2vw;
      cursor: pointer;
      color: #000;
      .topFlag {
        background: red;
        color: #fff;
        font-size: 12px;
        margin-left: 5px;
        padding: 0 4px;
        border-radius: 2px;
      }
      &:hover {
        color: #2759b5;
      }
    }
    .right-cont {
      font-size: 13px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #787878;
      cursor: pointer;
      text-align: justify;
      line-height: 16px;
      &:hover {
        color: #2759b5;
      }
    }
    .right-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .bottom-left {
        font-size: 0.7vw;
        color: rgba(0, 0, 0, 0.45);
        .ivu-icon-ios-eye-outline {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.45);
        }
        .ivu-icon-ios-time-outline {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-left: 2.1vw;
        }
      }
      a {
        font-size: 0.7vw;
        cursor: pointer;
      }
    }
  }
}
</style>
