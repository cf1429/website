<template>
  <div class="flowItem">
    <div class="flowItem-left">
      <p class="num">{{item.flowNum}}</p>
      <p class="text">{{item.text}}</p>
    </div>
    <div :class="[row=='first'?'flowItem-right':'flowItem-next']" v-if="item.line">
      <hr />
    </div>
  </div>
</template>

<script>

export default {
  name:"flowItem",
  props:["item","row"],
  data(){
    return {
      
    }
  }
}
</script>
<style lang="less" scoped>
.flowItem {
  display: flex;
  flex-direction: row;
  // align-items: center;
  // width: 25vw;
  // height: 17.6vw;
  .flowItem-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #315392;
    width: 11.1vw;
    height: 11.1vw;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 1px solid #ccc;
      box-shadow: 10px 10px 5px #888888;
      -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
    }
    .num {
      font-size: 2.5vw;
    }
    .text {
      font-size: 1.9vw;
      line-height: 2.6vw;
    }
  }
  .flowItem-right {
    display: flex;
    align-items: center;
    width: 10.3vw;
    height: 11.1vw;
    hr {
      width: 100%;
      border: none;
      border-bottom: 1px dashed #979797;
    }
  }
  .flowItem-next {
    display: flex;
    align-items: center;
    width: 5.8vw;
    height: 11.1vw;
    hr {
      width: 100%;
      border: none;
      border-bottom: 1px dashed #979797;
    }
  }
}
</style>
