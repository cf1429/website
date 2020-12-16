<template>
  <div class="system">
    <titleCom title="设备简介" />

    <!-- <systemItem />-->
    <systemItem v-for="item in systemData" :key="item.id" :item="item" />
  </div>
</template>

<script>
import titleCom from '@/components/titleCom/titleCom'
import systemImg1 from "@/assets/images/system1.jpg";
import systemImg2 from "@/assets/images/system2.jpg";
import systemImg3 from "@/assets/images/system3.jpg";
import systemImg4 from "@/assets/images/system4.jpg";
import systemImg5 from "@/assets/images/system5.jpg";
import systemImg6 from "@/assets/images/system6.png";
import systemImg7 from "@/assets/images/system7.png";
import systemImg8 from "@/assets/images/system8.png";
import systemItem from './systemItem'
export default {
  name: "system",
  components:{
    titleCom,
    systemItem
  },
  data() {
    return {
      systemData:[
        {
          id:1,
          sysType:"left",
          sysSrc:systemImg1,
          title:"供水设备",
          desc:"  单位时间内输出一定流量、扬程的自动启停的给水装置。按用途分：消防、生活、生产、污水处理四类。"
        },
        {
          id:2,
          sysType:"right",
          sysSrc:systemImg2,
          title:"加药设备",
          desc:"  采用时间程序控制，此控制方式无需仪表的支持，首先根据系统的运转需要设定自动加药的周期、加药量、加药时间和加药频率。在以后的系统运转过程中，到加药周期，计量泵自动打开加药，加到规定的时间计量泵关闭；到排污周期，计量泵停止加药，排到规定的时间后，计量泵继续开启，补充排污损失掉的药剂，把系统的含药量维持在正常的水平、加到规定的时间计量泵关闭。"
        },
        {
          id:3,   
          sysType:"left",
          sysSrc:systemImg3,
          title:"净水设备",
          desc:"  生产净水的设备。大多采用反渗透工艺，反渗透是在室温条件下，采用无相变的物理方法将含盐水进行脱盐、除盐。"
        },
        {
          id:4,
          sysType:"right",
          sysSrc:systemImg4,
          title:"软化设备",
          desc:"降低水硬度的设备，主要除祛水中的钙、镁离子。软化水设备在软化水的过程中，不能降低水中的总含盐量，在热水锅炉系统、热交换系统、工业冷却系统、中央空调系统以及其他用水设备系统中都有广泛的应用。"
        },
        {
          id:5,   
          sysType:"left",
          sysSrc:systemImg5,
          title:"污水处理设备",
          desc:"主要针对生活废水;屠宰厂废水;养殖厂废水;车间废水;农村等日常生活中排出的废水进行处理,使出水水质达到地方及国家排放标准。"
        },
        /*{ 
          title:"智慧文书",
          desc:"仲裁流程中每个节点都可自动生成，文书可一键下载打印装订形成线下卷宗"
        },
        { 
          id:6,
          sysType:"right",
          sysSrc:systemImg6,
          title:"多重送达",
          desc:"开庭通知、裁决书等文书可通过短信、电子邮件与线下邮寄等多种方式送达"
        },
        {
          id:7,   
          sysType:"left",
          sysSrc:systemImg7,
          title:"权限分配",
          desc:"通过网络仲裁系统办案端不同角色权限分配，实现层级审核在线化，便于仲裁案件管理"
        },
        {
          id:8,
          sysType:"right",
          sysSrc:systemImg8,
          title:"档案管理",
          desc:"案件流程结束后，文书自动整理形成案件归档文件，实现案件智能存储归档"
        }*/
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.system {
  display: flex;
  flex-direction: column;
  padding: 2.1vw 0;
}
</style>
