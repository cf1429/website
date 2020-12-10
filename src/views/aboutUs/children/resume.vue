
<template>
  <div class="resume">
    <div class="resume-item" v-for="item in content" :key="item.id" >
      <p class="resume-title">{{item.title}}</p>
      <p class="resume-cate">{{item.categoryName}}</p>
      <div class="resume-content" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import resumeItem from './resumeItem'
export default {
  name: "resume",
  props:['content','title'],
  components:{
    resumeItem
  }
};
</script>

<style lang="less" scoped>
.resume {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  // background: #f9f9f9;
  // padding-top: 1.6vw;
  .resume-item {
    width:49%;
    padding: 10px 15px;
    background: #f9f9f9;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    padding: 10px 15px;
    background: #f9f9f9;
    .resume-title {
      margin: 0.5vw 0;
      font-weight: 600;
    }
    .resume-cate {
      margin: 0.5vw 0;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.35);
    }
    .resume-content {
      line-height: 20px;
    }
  }
}
</style>
