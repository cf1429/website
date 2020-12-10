
<template>
  <div class="activityItem" v-if="activeItem.extraContentInfos&&activeItem.extraContentInfos.length">
    <titleCom :title="activeItem.name" />
    <div>
      <div v-if="activeItem.extraContentInfos.length">
        <activeCont v-for="item in activeItem.extraContentInfos" :key="item.id" :activeContData="item" :secType="activeItem.name"/>
      </div>
      <div class="activityItem-none" v-else>
        暂未上传数据
      </div>
    </div>
    <div v-if="activeItem.extraContentInfos && activeItem.extraContentInfos.length > 2" class="item-bottom">
      <router-link :to="{path:'/activity/list',query:{name:'active'}}" class="more" tag="button">更多</router-link>
    </div>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import activeCont from './activeCont'
export default {
  name: "activityItem",
  props:['activeItem'],
  components:{
    titleCom,
    activeCont
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.activityItem {
  padding: 2.1vw 10.4vw;
  .activityItem-none {
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    margin-top: 5px;
  }
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
}
</style>
