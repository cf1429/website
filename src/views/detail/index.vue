
<template>
  <div class="detail">
    <detailTitle :detailData="detailData"></detailTitle>
    <div class="detail-content" v-html="detailData.content"></div>
    <div class="share">
      分享 :
      <span class="iconfont icon-wechat first-share" @click="creatQrCode">
        <!-- <div class="qr-code" ref="qrCodeUrl"></div> -->
      </span>
      <div class="toSina">
        <a :href="toSinaShare" target="_blank"><span class="iconfont icon-weibo"></span></a>
      </div>
      <button
        v-clipboard:copy="address"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >复制链接</button>
    </div>
    <wxShare :shareFlag="shareFlag" @popclose="popclose"></wxShare>
  </div>
</template>

<script>
import weiboicon from "@/assets/images/weiboicon.png";
import { mapActions } from 'vuex'
import detailTitle from './children/detailTitle'
import wxShare from './children/wxShare'
import QRCode from 'qrcodejs2'
export default {
  name: "detail",
  components:{
    detailTitle,
    wxShare
  },
  data() {
    return {
      detailData:"",
      address:'',
      shareFlag:false,
      toUrl :encodeURIComponent(window.location.href),
      toSinaShare:""
    };
  },
  methods:{
    ...mapActions(['getDetail']),
    async getData(id){
      let result = await this.getDetail(id)
        if(result.flag == true){
          this.detailData = result.data
        }
    },
    creatQrCode() {
      this.shareFlag = true
    },
    // sinaShare(){
    //     window.open('http://service.weibo.com/share/share.php?url=http://www.zzkj.com&title="分享内容"', '_blank');
    // },
    sinsaShare(title,url) {
        var param = {
<<<<<<< HEAD
            // title:  '来自旭莱环保科技有限公司', /** 分享的文字内容(可选，默认为所在页面的title)*/
=======
            // title:  '来自知仲科技有限公司', /** 分享的文字内容(可选，默认为所在页面的title)*/
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
            url: url || window.location.href,
            type: '3',
            count: '1', /** 是否显示分享数，1显示(可选)*/
            appkey: 1231031946, /** 您申请的应用appkey,显示分享来源(可选)*/
            ralateUid:'7444370601', /**关联用户的UID，分享微博会@该用户(可选)*/
            rnd: new Date().valueOf()
        }
        var temp = [];
        for( var p in param ) {
            temp.push(p + '=' +encodeURIComponent( param[p] || '' ) )
        }
        var targetUrl = 'http://service.weibo.com/share/share.php?' + temp.join('&');
        window.open(targetUrl, 'sinaweibo');
    },
    sinaShare(event){
        event.preventDefault();
        var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?';    
            _shareUrl += '&url='+ encodeURIComponent(`${window.location.href}`);     //参数url设置分享的内容链接|默认当前页location，可选参数
            // _shareUrl += '&url='+ encodeURIComponent(`http://www.baidu.com`);     //参数url设置分享的内容链接|默认当前页location，可选参数
            // _shareUrl += '&title=' + encodeURIComponent(`<a href="${window.location.href}">分享</a>`);    //参数title设置分享的标题|默认当前页标题，可选参数
            // _shareUrl += '&source=' + encodeURIComponent('');
            _shareUrl += '&appkey=' + 1231031946;
            _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
            // _shareUrl += '&pic=' + encodeURIComponent('');  //参数pic设置图片链接|默认为空，可选参数
            window.open(_shareUrl,'_blank');
    },
    onCopy(e) {
        this.$Message.success("复制成功")
    },
    onError(e) {
        this.$Message.error("复制失败")
    },
    popclose(){
      this.shareFlag=false
    }
  },
  mounted(){
    this.getData(this.$route.query.id)
    this.address = window.location.href
    this.toSinaShare = 'http://service.weibo.com/share/share.php?appkey=1231031946&title=知仲仲裁研究中心&url='+encodeURIComponent(window.location.href)+'&searchPic=false&style=simple'
  }
};
</script>

<style lang="less" scoped>
.toSina {
  position: relative;
  top: 8px;
  display: inline-block;
  overflow: hidden;
  size: 120%;
  a {
    color: #515a6e;
  }
}
.detail {
  .detail-content {
    width: 79.2vw;
    margin: 0 auto;
    min-height: 600px;
    line-height: 2vw;
  }
  .share {
    padding: 0 10.4vw;
    margin: 2vw 0;
    .first-share {
      &:hover {
        background: #04be02;
        color: #fff;
      }
    }
    .toSina {
      &:hover {
        background: #e6162d;
        a {
          color: #fff;
        }
      }
    }
    span {
      position: relative;
      display: inline-block;
      font-size: 18px;
      text-align: center;
      width: 2vw;
      height: 2vw;
      line-height: 2vw;
      // background: #e9e9e9;
      // border: 1px dashed #ccc;
      cursor: pointer;
      .qr-code {
        // display: none;
        position: absolute;
        top: -100px;
        width: 100px;
        height: 100px;
        background: red;
      }
    }
    button {
      display: inline-block;
      cursor: pointer;
      background: #fff;
      border: none;
      &:active {
        border: none;
      }
    }
  }
}
.WB_share_button .related_list_container {
  display: none !important;
}
</style>
