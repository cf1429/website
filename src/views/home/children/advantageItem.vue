<!--
 * @Author: Joker
 * @Date: 2020-09-17 15:20:51
 * @LastEditTime: 2020-10-29 10:28:25
 * @FilePath: \website\src\views\home\children\advantageItem.vue
-->
<template>
  <div class="advantageItem">
    <img :src="conImg" alt />
    <p class="title">{{conTitle}}</p>
    <p class="content">{{conText}}</p>
  </div>
</template>

<script>

export default {
  name:"advantageItem",
  props:['conImg','conText','conTitle'],
  data(){
    return {
      
    }
  }
}
</script>
<style lang="less" scoped>
.advantageItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
  height: 17.6vw;
  img {
    width: 9.5vw;
    height: 8.4vw;
  }
  .title {
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #315392;
    margin-top: 8px;
    font-size: 22px;
  }
  .content {
    height: 6.5vw;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    margin-top: 1.6vw;
    letter-spacing: 2px;
    line-height: 20px;
  }
}
</style>
