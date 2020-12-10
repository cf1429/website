<!--
 * @Author: Joker
 * @Date: 2020-09-17 14:55:36
 * @LastEditTime: 2020-10-28 14:24:09
 * @FilePath: \website\src\views\home\children\advantage.vue
-->
<template>
  <div class="advantage">
    <titleCom title="我们的优势" />
    <div class="advantage-content">
      <advantageItem
        v-for="item in advantageData"
        :key="item.id"
        :conImg="item.adImg"
        :conText="item.conText"
        :conTitle="item.conTitle"
      />
    </div>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import advantageItem from './advantageItem'
import advantageImg1 from "@/assets/images/advantage1.png";
import advantageImg2 from "@/assets/images/advantage2.png";
import advantageImg3 from "@/assets/images/advantage3.png";
import advantageImg4 from "@/assets/images/advantage4.png";
import advantageImg5 from "@/assets/images/advantage5.png";
import advantageImg6 from "@/assets/images/advantage6.png";
export default {
  name:"advantage",
  components:{
    titleCom,
    advantageItem
  },
  data(){
    return {
      advantageData:[
        {
          id:1,
          conText:"开发与部署符合三级等保要求；数据传输加密且自动保存备份，结合DDos防护、漏洞扫描与防火墙多重防护。",
          conTitle:"系统安全",
          adImg:advantageImg1
        },
        {
          id:2,
          conText:"遵循仲裁规则，程序符合仲裁法及相关法律法规，充分保障仲裁当事人的程序性权利。",
          conTitle:"合法合规",
          adImg:advantageImg2
        },
        {
          id:3,
          conText:"登录方式多元化，文书自动生成，案件批量处理，卷宗一键整理和打印。",
          conTitle:"便捷高效",
          adImg:advantageImg3
        },
        {
          id:4,
          conText:"相较于传统的仲裁方式来讲，互联网仲裁所需的成本更低。",
          conTitle:"成本适中",
          adImg:advantageImg4
        },
        {
          id:5,
          conText:"功能模块化，可独立升级和更改，预留数据接口便于自由对接客户。",
          conTitle:"扩展性强",
          adImg:advantageImg5
        },
        {
          id:6,
          conText:"可根据仲裁委实际需求，提供定制化互联网仲裁系统服务， 保证整个互联网仲裁系统升级、迭代时平稳、安全运行。",
          conTitle:"定制服务",
          adImg:advantageImg6
        },
      ]
    }
  }
}
</script>


<style lang="less" scoped>
.advantage {
  padding: 2.1vw;
  .advantage-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2.1vw 8.3vw;
  }
}
</style>
