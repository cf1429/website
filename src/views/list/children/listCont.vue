<!--
 * @Author: Joker
 * @Date: 2020-09-23 14:21:23
 * @LastEditTime: 2020-10-29 10:37:10
 * @FilePath: \website\src\views\list\children\listCont.vue
-->
<template>
  <div class="listCont">
    <div>
      <div v-for="item in contData.dataList" :key="item.id" class="listCont-item">
        <span class="pointe"></span>
        <router-link
          :to="{path:`/${type}/detail`,query:{id:item.id,secType:item.categoryName}}"
          target="_blank"
          class="title"
        >{{item.title}}</router-link>
        <span class="readerNum">
          <Icon type="ios-eye-outline"></Icon>
          阅读:({{item.browseNumber}})
        </span>
        <span class="time">
          <Icon type="ios-time-outline"></Icon>
          {{item.createTime?item.createTime.substring(0,10):''}}
        </span>
      </div>
    </div>
    <div class="page">
      <Page
        @on-change="changePage"
        :page-size="pageSize"
        :total="contData.totalCount"
        size="small"
        show-elevator
        show-total
        id="pageId"
        ref="myPage"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "listCont",
  props:['contData','totalNum','type'],
  data() {
    return {  
      totalCountNum:"",
      pageSize:5,
    };
  },
  methods:{
    changePage(index){
      this.$emit('changePage',index)
    },
  }
};
</script>

<style lang="less" scoped>
.listCont {
  display: flex;
  flex-direction: column;
  align-items: start;
  .listCont-item {
    display: flex;
    flex-direction: row;
    // justify-content: space-around;
    align-items: center;
    height: 2.2vw;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 10px;
    .pointe {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: rgba(0, 0, 0, 0.65);
      margin-right: 10px;
    }
    .title {
      min-width: 34vw;
      color:#000;
      cursor: pointer;
    }
    .readerNum {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
      min-width: 7vw;
    }
    .time {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .page {
    margin: 2vw auto;
  }
}
</style>
