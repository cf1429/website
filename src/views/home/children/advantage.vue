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
<<<<<<< HEAD
          conText:"原水经过精细过滤，颗粒活性碳过滤，压缩活性碳等多种过滤，水质保证，饮用安全",
          conTitle:"产品安全",
=======
          conText:"开发与部署符合三级等保要求；数据传输加密且自动保存备份，结合DDos防护、漏洞扫描与防火墙多重防护。",
          conTitle:"系统安全",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          adImg:advantageImg1
        },
        {
          id:2,
<<<<<<< HEAD
          conText:"公司设备符合法律规定质量检测数据，多家权威机构检测",
=======
          conText:"遵循仲裁规则，程序符合仲裁法及相关法律法规，充分保障仲裁当事人的程序性权利。",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          conTitle:"合法合规",
          adImg:advantageImg2
        },
        {
          id:3,
<<<<<<< HEAD
          conText:"公司为了满足市场需要，和多家设备厂商合作，设备种类多样",
          conTitle:"设备丰富",
=======
          conText:"登录方式多元化，文书自动生成，案件批量处理，卷宗一键整理和打印。",
          conTitle:"便捷高效",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          adImg:advantageImg3
        },
        {
          id:4,
<<<<<<< HEAD
          conText:"本着互惠互利的原则，公司设备皆以最公平的市场价出售，绝对是物美价廉",
=======
          conText:"相较于传统的仲裁方式来讲，互联网仲裁所需的成本更低。",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          conTitle:"成本适中",
          adImg:advantageImg4
        },
        {
          id:5,
<<<<<<< HEAD
          conText:"我们有专业的团队为您服务，现场检测，根据实际情况为您量身推荐最好，最适合的设备。",
          conTitle:"专业团队",
=======
          conText:"功能模块化，可独立升级和更改，预留数据接口便于自由对接客户。",
          conTitle:"扩展性强",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          adImg:advantageImg5
        },
        {
          id:6,
<<<<<<< HEAD
          conText:"本着客户是上帝的原则，不管是售前还是售后，我们都以最热情，最专业的服务满足您的需求",
=======
          conText:"可根据仲裁委实际需求，提供定制化互联网仲裁系统服务， 保证整个互联网仲裁系统升级、迭代时平稳、安全运行。",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
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
