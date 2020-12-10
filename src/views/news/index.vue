<template>
  <div class="news">
    <div v-if="newsData.length">
      <Tabs :value="key" :animated="false">
        <Tab-pane
          icon="md-apps"
          v-for="item in newsData"
          :label="item.name"
          :name="item.name"
          :key="item.id"
        >
          <newsItem :itemData="item.extraContentInfos" :secType="item.name" />
        </Tab-pane>
      </Tabs>
    </div>
    <div class="none" v-else>
      <img :src="noneImg" alt />
      <p>未找到数据</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import activeItem from "@/assets/images/activeItem.jpg";
import noneImg from "@/assets/images/none.jpg";
import newsItem from "./children/newsItem"
export default {
  name: "news",
  components:{
    newsItem
  },
  data() {
    return {
      key:"",
      noneImg:noneImg,
      newsData:[
      ]
    };
  },
  methods:{
    ...mapActions(['getActive']),
    async getData(){
      let params = { type: 2 };
      let result = await this.getActive(params)
      if(result.flag){
        this.$Spin.hide();
        this.newsData = result.data
        this.key = this.newsData[0].name
        // this.newsData.forEach(item=>{
        //   if(item.extraContentInfos){
        //     item.extraContentInfos.sort((a,b) => b.sort-a.sort)
        //   } 
        // })
      }
    },

  },
  mounted(){
    this.$Spin.show({
      render: (h) => {
          return h('div', [
              h('Icon', {
                  'class': 'demo-spin-icon-load',
                  props: {
                      type: 'ios-loading',
                      size: 18
                  }
              }),
              h('div', 'Loading')
          ])
        }
    });
    this.getData()
    this.$store.commit('setType','新闻动态')
  }
};
</script>

<style lang="less" scoped>
.news {
  padding: 3.6vw 10vw;
  min-height: 500px;
  /deep/ .ivu-tabs-bar {
    border: none;
  }
  /deep/ .ivu-tabs-ink-bar {
    background-color: #fff;
  }
  /deep/ .ivu-tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /deep/ .ivu-tabs-content {
      width: 65vw;
    }
    /deep/ .ivu-tabs-nav {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      .ivu-tabs-tab-active {
        color: #fff;
        background: #315392;
      }
    }
  }
  .none {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 79.2vw;
    height: 600px;
    margin: 0 auto;
    img {
      margin-top: 100px;
    }
    p {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      margin-top: 50px;
    }
  }
}
</style>
