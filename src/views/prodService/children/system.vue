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
          desc:"通过网络仲裁系统实现案件材料审核受理、组庭、出裁等全流程在线化，提高仲裁流程工作效率"
        },
        {
          id:2,
          sysType:"right",
          sysSrc:systemImg2,
          title:"加药设备",
          desc:"所有当事人证据提交后自动生成“哈希值”固化储存，保证证据的安全性、真实性、不可更改，进而保障仲裁的公正性"
        },
        {
          id:3,   
          sysType:"left",
          sysSrc:systemImg3,
          title:"净水设备",
          desc:"通过合同编号、申请人、被申请人、案号、申请时间等关键字段信息，实现案件精准和模糊检索"
        },
        {
          id:4,
          sysType:"right",
          sysSrc:systemImg4,
          title:"软化设备",
          desc:"支持远程视频开庭审理，在线确认笔录，并审理全过程音频视频记录"
        },
        {
          id:5,   
          sysType:"left",
          sysSrc:systemImg5,
          title:"污水处理设备",
          desc:"仲裁流程中每个节点都可自动生成，文书可一键下载打印装订形成线下卷宗"
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
