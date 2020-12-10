<!--
 * @Author: Joker
 * @Date: 2020-09-22 14:36:21
 * @LastEditTime: 2020-10-29 15:31:20
 * @FilePath: \website\src\views\detail\children\detailTitle.vue
-->

<template>
  <div class="detailTitle">
    <p class="datail-type">{{this.$store.state.type}} >> {{secType}} </p>
    <div class="container">
      <p>{{detailData.title}}</p>
      <p class="psTitle">
        <span>责任编辑: {{detailData.editorCharge}}</span>
        <span>资料来源: {{detailData.dataSource}}</span>
        <span class="icontype">
          <Icon type="ios-eye-outline"></Icon>
          阅读:({{detailData.browseNumber}})
        </span>
        <span class="icontype">
          <Icon type="ios-time-outline"></Icon>
          {{detailData.createTime?detailData.createTime.substring(0,10):''}}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailTitle",
  props:['detailData'],
  data() {
    return {
      secType:""
    };
  },
  mounted(){
    this.secType = this.$route.query.secType
  }
};
</script>

<style lang="less" scoped>
.detailTitle {
  .datail-type {
    width: 79.2vw;
    margin: 1vw auto;
    color: #315392;
    // padding-left: 2vw;
  }
  .container {
    width: 79.2vw;
    margin: 2.2vw auto 1.1vw;
    p {
      text-align: center;
      font-size: 30px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      line-height: 30px;
    }
    .psTitle {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 1vw auto;
      font-size: 0.7vw;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: justify;
      color: rgba(0, 0, 0, 0.85);
      line-height: 14px;
      span {
        margin: 0 1vw;
      }
      .icontype {
        color: rgba(0, 0, 0, 0.45);
        display: flex;
        align-items: center;
        // .ivu-icon {
        //   font-size: 16px;
        // }
      }
    }
    .psTitle:nth-child(1),
    .psTitle:nth-child(2) {
      font-weight: 600;
    }
  }
}
</style>
