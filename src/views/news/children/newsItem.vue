<template>
  <div class="newsItem">
    <div v-if="itemData.length">
      <newCont v-for="item in itemData" :key="item.id" :newsContData="item" :secType="secType" />
      <div v-if="itemData.length > 4" class="item-bottom">
        <router-link :to="{path:'/news/list',query:{name:'news'}}" class="more" tag="button">更多</router-link>
      </div>
    </div>
    <div v-else class="none">
      <img :src="noneImg" alt />
      暂无数据
    </div>
  </div>
</template>

<script>
import newCont from './newCont'
import noneImg from "@/assets/images/none.jpg";
export default {
  name: "newsItem",
  props:["itemData","secType"],
  components:{
    newCont
  },
  data() {
    return {
      noneImg:noneImg
    }
  }
};
</script>

<style lang="less" scoped>
.newsItem {
  .item-bottom {
    display: flex;
    justify-content: center;
    margin-top: 2.2vw;
    .more {
      width: 96px;
      height: 32px;
      color: #315392;
      background: #fff;
      border: 1px solid #315392;
      border-radius: 2px;
      cursor: pointer;
    }
  }
  .none {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 100%;
    text-align: center;
    img {
      width: 25.6vw;
      height: 15.6vw;
    }
  }
}
</style>
