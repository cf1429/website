<!--
 * @Author: Joker
 * @Date: 2020-09-20 14:40:46
 * @LastEditTime: 2020-11-09 13:51:03
 * @FilePath: \website\src\views\activity\children\activeCont.vue
-->
<template>
  <div class="activeCont">
    <img class="activeCont-left" :src="activeContData.coverFile.filePath" alt />
    <div class="activeCont-right">
      <router-link
        :to="{path:'/activity/detail',query:{id:activeContData.id,secType:secType}}"
        target="_blank"
        class="right-title"
      >{{activeContData.title}}<span class="topFlag" v-if="activeContData.topFlag ==1">置顶</span></router-link>
      <router-link
        :to="{path:'/activity/detail',query:{id:activeContData.id,secType:secType}}"
        target="_blank"
        class="right-cont"
      >{{activeContData.sumInfo}}</router-link>
      <p class="right-bottom">
        <router-link :to="{path:'/activity/detail',query:{id:activeContData.id,secType:secType}}" target="_blank" tag="a">全文></router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "activeCont",
  props:['activeContData','secType'],
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.activeCont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 9vw;
  width: 100%;
  margin: 10px 0;
  .activeCont-left {
    height: 100%;
    width: 21.2vw;
  }
  .activeCont-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 54.6vw;
    padding: 0.9vw 0;
    .right-title {
      font-size: 1vw;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 600;
      line-height: 1.2vw;
      color: #000;
      cursor: pointer;
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
      line-height: 16px;
      text-align: justify;
      cursor: pointer;
      &:hover {
        color: #2759b5;
      }
    }
    .right-bottom {
      text-align: right;
      font-size: 13px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #2b66d1;
      a {
        cursor: pointer;
      }
    }
  }
}
</style>
