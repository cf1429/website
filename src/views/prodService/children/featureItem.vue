<!--
 * @Author: Joker
 * @Date: 2020-09-18 11:31:05
 * @LastEditTime: 2020-10-28 11:52:26
 * @FilePath: \website\src\views\prodService\children\featureItem.vue
-->
<template>
  <div class="featureItem">
    <img :src="item.imgSrc" alt="advantageSrc" />
    <div class="featureItem-content">
      <p>{{item.title}}</p>
      <div>{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
import advantageImg1 from "@/assets/images/advantage1.png";
export default {
  name: "featureItem",
  props:['item'],
  data() {
    return {
      advantageSrc:advantageImg1
    }
  }
};
</script>

<style lang="less" scoped>
.featureItem {
  display: flex;
  flex-direction: row;
  width: 38.1vw;
  height: 12.1vw;
  padding: 1.8vw;
  background: #ffffff;
  border: 1px solid #e5eaf4;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
  margin: 10px 0;
  img {
    width: 8.3vw;
    height: 8.3vw;
  }
  .featureItem-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2vw;
    p {
      font-size: 1.2vw;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      line-height: 1.7vw;
    }
    div {
      width: 21vw;
      height: 5.9vw;
      font-size: 0.9vw;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      line-height: 1.3vw;
      margin-top: 0.9vw;
    }
  }
}
</style>
