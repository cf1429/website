
<template>
  <div class="team">
    <titleCom style="margin-bottom:2vw" title="我们的团队"/>
    <span>
      知仲团队拥有专业的法律和计算机软件开发人员，核心成员深耕于互联网仲裁相关研究与实践多年，对互联网仲裁应用拥有深刻的理解。通过与国内知名仲裁机构广泛合作，深入挖掘仲裁机构办案流程与实务工作的需求，积累了丰富的设计、开发、应用、维护与拓展等实践经验。公司更从全球型名校储备诸多专业人才加入，打造具有高素养、精专业，同时富有活力的团队。
    </span>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
export default {
  name: "team",
  components:{
    titleCom
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
.team{
  width:80vw;
  margin: 0 auto;
  padding:2.1vw;
  span {
    font-size: 16px;
    line-height: 30px;
  }
}

</style>
