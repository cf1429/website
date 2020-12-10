
<template>
  <div class="resumeItem">
    <p class="item-top">java开发工程师</p>
    <p class="item-second">技术类</p>
    <div class="item-third">
      <span>职位描述</span>
      <hr />
    </div>
    <p class="item-four">岗位描述：</p>
    <p class="item-five">1、主导和参与系统分析设计工作，承担核心架构的代码实现，负责系统改造和升级</p>
    <p class="item-five">2、主导和参与系统性能优化，持续提升系统在高并发、高访问量下的性能和系统稳定性；</p>
    <p class="item-four">岗位要求：</p>
    <p class="item-five">1、2年及以上 Java 开发经验，精通 Java 及面向对象设计开发，对部分 Java 技术有深入研究，研究过优秀开源软件的源码并有心得者优先; </p>
    <p class="item-five">2、熟悉常见设计模式，精通 Spring， MyBatis等流行开源框架； </p>
    <p class="item-five">3、精通 MySQL 应用开发，熟悉数据库原理和常用性能优化技术，以及 NoSQL，消息队列 的原理、使用场景以及限制；</p>
    <p class="item-five">4、参与过大型复杂分布式互联网系统的设计开发者优先，拥有和工作年限相称的广度和（或）深度； </p>
    <p class="item-five">5、有较强的逻辑思维能力，善于分析、归纳、解决问题；能够带队进行项目开发；</p>
  </div>
</template>

<script>
export default {
  name: "resumeItem",
  data() {
    return {
      
    };
  }
};
</script>

<style lang="less" scoped>
.resumeItem {
  width: 37.2vw;
  // height: 19.8vw;
  // height: 380px;
  padding: 1vw;
  background: #f9f9f9;
  .item-top {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
    line-height: 22px;
  }
  .item-second {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;
    margin-top: 8px;
  }
  .item-third {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
      margin-top: 8px;
    }
    hr {
      margin-top: 20px;
      width: 31.3vw;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  .item-four {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 600;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
    line-height: 20px;
    margin: 8px 0;
  }
  .item-five {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
    line-height: 20px;
  }
}
</style>
