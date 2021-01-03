<!--
 * @Author: Joker
 * @Date: 2020-09-20 21:18:39
 * @LastEditTime: 2020-10-29 11:01:50
 * @FilePath: \website\src\views\aboutUs\children\joinUs.vue
-->
<template>
  <div class="joinUs">
    <titleCom style="margin-bottom:2vw" title="加入我们" />
    <div class="adderss">
       <Icon type="ios-mail-outline" />简历投递邮箱：hr@139.com
    </div>
    <Tabs :active-key="dataList[0]">
      <Tab-pane v-for="item in dataList" :key="item.key" :label="item.key">
        <resume :content="item.data" :title="item.title" />
      </Tab-pane>
    </Tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import titleCom from '@/components/titleCom/titleCom'
import resume from './resume'
export default {
  name: "abstract",
  components:{
    titleCom,
    resume
  },
  data() {
    return {
      dataList:[]
    };
  },
  methods:{
    ...mapActions(['getResume']),
    async getData(){
      let params = {
        type:3,
        pageNum:0,
        pageSize:999,
        state:2
      }
      let result = await this.getResume(params)
      if(result.flag){
        for (let key in result.data){
          this.dataList.push({key:key,data:result.data[key]})
        }
      }
    }
  },
  mounted(){
    this.getData()
  }
};
</script>

<style lang="less" scoped>
.joinUs {
  position: relative;
  width: 80vw;
  margin: 0 auto;
  padding: 2.1vw;
  span {
    font-size: 16px;
    line-height: 30px;
  }
  .adderss {
    display: flex;
    align-items: center;
    font-size: 12px;
    position: absolute;
    top: 7vw;
    right: 2.1vw;
    font-weight: 600;
    font-size: 16px;
    /deep/ .ivu-icon-ios-mail-outline {
      color: #000;
      font-size: 16px;
      padding-right: 0.25vw;
      font-weight: 600;
      font-size: 18px;
    }
  }
  /deep/ .ivu-tabs-tab {
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
