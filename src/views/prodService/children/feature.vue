<template>
  <div class="feature">
    <titleCom title="系统特点" />
    <div class="feature-wrapper">
      <featureItem v-for="item in featureData" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import featureItem from './featureItem'
import feature1 from "@/assets/images/feature1.png";
import feature2 from "@/assets/images/feature2.png";
import feature3 from "@/assets/images/feature3.png";
import feature4 from "@/assets/images/feature4.png";
import feature5 from "@/assets/images/feature5.png";
import feature6 from "@/assets/images/feature6.png";
export default {
  name: "feature",
  components:{
    titleCom,
    featureItem
  },
  data() {
    return {
      featureData:[
        {
          id:'1',
          imgSrc:feature1,
<<<<<<< HEAD
          title:'设备安全',
=======
          title:'系统安全',
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          desc:"开发与部署符合三级等保要求；系统多层交互运行；具备SSL安全证书，数据传输加密且自动保存备份，结合DDos防护、漏洞扫描与防火墙实现多重防护。"
        },
        {
          id:'2',
          imgSrc:feature2,
          title:'合法合规',
          desc:"遵循仲裁规则，程序符合仲裁法及相关法律法规，充分保障仲裁当事人的程序性权利；电子证据一键固化，文件加密后生成哈希值，在保证数据安全的同时兼顾证据真实性。"
        },
        {
          id:'3',
          imgSrc:feature3,
          title:'便捷高效',
          desc:'立案、受理、视频开庭等全流程在线进行，权限角色可随时随地跟进案件进度；系统案件智能管理、文书自动生成，有效缩减仲裁所需时间，案件处理更加便捷高效。'
        },
        {
          id:'4',
          imgSrc:feature4,
          title:'成本适中',
          desc:'相较于传统的仲裁方式，互联网仲裁可大大降低仲裁流程的人工成本和时间成本，所需的成本更低。'
        },
        {
          id:'5',
          imgSrc:feature5,
          title:'扩展性强',
          desc:'功能模块化，可独立删除、升级和更改；预留数据接口，便于客户对接和区块链存证、自然语言处理、图像识别、语音识别、电子公正等功能扩展。'
        },
        {
          id:'6',
          imgSrc:feature6,
          title:'定制服务',
          desc:"可根据仲裁委实际需求，提供定制化互联网仲裁系统服务，保证整个互联网仲裁系统升级、迭代时平稳、安全运行。"
        }
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.feature {
  .feature-wrapper {
    display: flex;
    font-display: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0.8vw 0;
    padding: 0 10.4vw;
  }
}
</style>
