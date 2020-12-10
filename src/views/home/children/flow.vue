<template>
  <div class="flow">
    <titleCom title="系统对接流程" />
    <div class="flow-content">
      <div class="first-row">
        <flowItem v-for="(item) in firstData" :key="item.id" :item="item" row="first" />
      </div>
      <Row class="second-row">
        <hr />
      </Row>
      <div class="three-row">
        <flowItem v-for="(item) in secondData" :key="item.id" :item="item" row="three" />
      </div>
    </div>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import flowItem from './flowItem'
export default {
  name: "flow",
  components:{
    titleCom,
    flowItem
  },
  data() {
    return {
      msg:'flow',
      firstData:[
        {
          id:1,
          flowNum:"01",
          text:'签署协议',
          line:true
        },
        {
          id:2,
          flowNum:"02",
          text:'确认需求',
          line:true
        },
        {
          id:3,
          flowNum:"03",
          text:'规则发布',
          line:true
        },
        {
          id:4,
          flowNum:"04",
          text:'定制方案',
          line:false
        },
      ],
      secondData:[
         {
          id:1,
          flowNum:"09",
          text:'定制服务',
          line:true
        },
        {
          id:2,
          flowNum:"08",
          text:'上线运行',
          line:true
        },
        {
          id:3,
          flowNum:"07",
          text:'测试验收',
          line:true
        },
        {
          id:4,
          flowNum:"06",
          text:'系统开发',
          line:true
        },
        {
          id:5,
          flowNum:"05",
          text:'技术对接',
          line:false
        },
      ]
    } 
  }
};
</script>


<style lang="less" scoped>
.flow {
  padding: 2.1vw;
  .flow-content {
    display: flex;
    flex-direction: column;
    padding: 2.1vw 0;
    // padding: 2.1vw 8.3vw;
    .first-row {
      display: flex;
      flex-direction: row;
      padding: 0 8.3vw;
    }
    .three-row {
      display: flex;
      flex-direction: row;
      padding: 0 5vw;
    }
    .second-row {
      padding: 0 17vw;
      hr {
        height: 6.4vw;
        border: none;
        border-right: 1px dashed #979797;
      }
    }
  }
}
</style>
