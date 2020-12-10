<template>
  <div class="func">
    <titleCom title="系统流程" />
    <div class="func-wrapper">
      <funcItem/>
    </div>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import funcItem from './funcItem'
export default {
  name: "func",
  components:{
    titleCom,
    funcItem
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
.func {
  margin-top: 2vw;
  .func-wrapper {
    padding: 0 10.4vw;
    margin-top: 2vw;
  }
}
</style>
