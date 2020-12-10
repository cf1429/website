<template>
  <div class="list">
    <div class="list-content">
      <Tabs :value="key" :animated="false">
        <TabPane icon="md-apps" label="知仲活动" name="active">
          <listCont :contData="activeData" :type="activity" @changePage="changeActivePage" />
        </TabPane>
        <TabPane icon="md-apps" label="新闻动态" name="news">
          <listCont :contData="newsData" :type="news" @changePage="changeNewsPage" />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import listCont from './children/listCont'
export default {
  name: "list",
  components:{
    listCont
  },
  data() {
    return {
      listData:[],
      activeData:[],
      newsData:[],
      totalCount:"",
      key:"",
      activity:"activity",
      news:"news"
    };
  },
  methods:{
    ...mapActions(['getBanner']),
    async getActData(pageNum){
      let params = {
        type:1,
        pageNum:pageNum,
        pageSize:5,
        state:2
      }
      let result = await this.getBanner(params)
      if(result.flag){
        this.activeData = result.data
        this.activeData.dataList.sort((a,b)=>a.sort-b.sort)
      }
    },
    async getNewsData(pageNum){
      let params = {
        type:2,
        pageNum:pageNum,
        pageSize:5,
        state:2
      }
      let result = await this.getBanner(params)
      if(result.flag){
        this.newsData = result.data
        this.newsData.dataList.sort((a,b)=>a.sort-b.sort)
      }
    },
    changeActivePage(msg){
      this.getActData(msg)
    },
    changeNewsPage(msg){
      this.getNewsData(msg)
    }
  },
  mounted(){
    this.key = this.$route.query.name 
    this.getActData(1)
    this.getNewsData(1)
  } 
};
</script>

<style lang="less" scoped>
.list {
  min-height: 500px;
  .list-content {
    padding: 3.6vw 10vw;
    /deep/ .ivu-tabs-ink-bar {
      background-color: #fff;
    }
    /deep/ .ivu-tabs-bar {
      border: none;
    }
    /deep/ .ivu-tabs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .ivu-tabs-content {
        width: 54.5vw;
      }
      /deep/ .ivu-tabs-nav {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        .ivu-tabs-tab-active {
          color: #fff;
          background: #315392;
        }
      }
    }
  }
}
</style>
