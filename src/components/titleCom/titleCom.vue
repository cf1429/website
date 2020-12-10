<!--
 * @Author: Joker
 * @Date: 2020-09-17 14:59:28
 * @LastEditTime: 2020-10-29 10:22:01
 * @FilePath: \website\src\components\titleCom\titleCom.vue
-->
<template>
  <div class="titleCom">{{title}}
    <p class="fs24"></p>
  </div>
</template>

<script>

export default {
  name: "navBar",
  props:['title'],
  data() {
    return {

    };
  },
};
</script>

<style lang="less" scoped>
.titleCom {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  color: #262626;
  line-height: 24px;
  font-size: 30px;
  p {
    width: 4.8vw;
    height: 0.2vw;
    background: #2759b5;
    margin-top: 15px;
  }
}
.fs24 {
  font-size: 1.2vw;
}
</style>
