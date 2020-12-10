<template>
  <div class="footBar-wrapper">
    <div class="container">
      <div class="footer-first">
        <h1>联系我们</h1>
        <div class="first-bottom">
          <p>
            <Icon type="ios-call-outline" />
            <span>电话：010-64170741</span>
          </p>
          <p>
            <Icon type="ios-mail-outline" />
            <span>邮箱：market@zhizhongkeji.cn</span>
          </p>
          <p>
            <Icon type="ios-pin-outline" />
            <span>地址：陕西省西安市曲江新区雁塔南路318号拿铁城A座1109室</span>
          </p>
          <br/>
        </div>
      </div>
      <!-- <div class="footer-second">
        <div class="second-item weixnshare" @mousemove="openwxShare" @mouseleave="closewxShare">
          <span class="iconfont icon-wechat"></span>
          <img v-if="wxFlag" :src="weixinShare" alt="weixinShare" />
        </div>
        <div
          class="second-item xinlangshare"
          @click="toSina"
          @mousemove="xinlangFlag=true"
          @mouseleave="xinlangFlag=false"
        >
          <span class="iconfont icon-weibo"></span>
          <p v-if="xinlangFlag" class="xinlang">链接到新浪微博</p>
        </div>
        <div
          class="second-item zhihushare"
          @click="toZhihu"
          @mousemove="zhihuFlag=true"
          @mouseleave="zhihuFlag=false"
        >
          <span class="iconfont icon-zhihu"></span>
          <p v-if="zhihuFlag" class="zhihu">链接到知乎</p>
        </div>
        <div
          class="second-item jinrishare"
          @click="toToutiao"
          @mousemove="jinriFlag=true"
          @mouseleave="jinriFlag=false"
        >
          <span class="iconfont icon-jinritoutiao"></span>
          <p v-if="jinriFlag" class="jinri">链接到今日头条</p>
        </div>
      </div>
      <div class="footer-thrid">
        <div class="thrid-item">
          <p>扫码咨询服务</p>
          <img :src="footerImg1" alt="footerImg1" />
        </div>
        <div class="thrid-item">
          <p>扫码关注</p>
          <img :src="footerImg2" alt="footerImg2" />
        </div>
      </div>
      <div class="footer-four">
        <p>我要咨询</p>
        <Form :model="consult">
          <FormItem>
            <Row class="four-top">
              <Col span="7">
                <Input style="margin-left:-3px" v-model="consult.name" placeholder="姓名" />
              </Col>
              <Col span="16">
                <Input v-model="consult.phone" placeholder="手机号" />
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row>
              <Input
                v-model="consult.desc"
                type="textarea"
                :autosize="{minRows: 2,maxRows: 5}"
                placeholder="问题描述"
                style="margin-top:-10px;"
              ></Input>
            </Row>
          </FormItem>
          <FormItem>
            <Col>
              <Button type="primary" style="margin-top:-30px;" class="subDesc" @click="add">提交</Button>
            </Col>
          </FormItem>
        </Form>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import footerImg1 from "@/assets/images/footerImg1.png";
import footerImg2 from "@/assets/images/footerImg2.png";
import weixinShare from "@/assets/images/weixinShare.png";
export default {
  name: "footerBar",
  data() {
    return {
      footerImg1:footerImg1,
      footerImg2:footerImg2,
      weixinShare:weixinShare,
      wxFlag:false,
      xinlangFlag:false,
      zhihuFlag:false,
      jinriFlag:false,
      consult:{
        name:"",
        phone:"",
        desc:""
      }
    };
  },
  methods:{
    ...mapActions(['leaveMessage']),
    openwxShare(){
      this.wxFlag = true
    },
    closewxShare(){
      this.wxFlag = false
    },
    toSina(){
      window.open('https://weibo.com/p/1006067444370601/home?from=page_100606&mod=TAB&is_all=1#place%20https://weibo.com/u/7444370601?is_all=1', '_blank');
    },
    toZhihu(){
      window.open('https://www.zhihu.com/org/bei-jing-zhi-zhong-ke-ji-you-xian-gong-si', '_blank');
    },
    toToutiao(){
       window.open('https://www.toutiao.com/c/user/token/MS4wLjABAAAAPVI5RRYqB-sRdi0VYr2C502Wx0m4JOzmUGZOL77Hba6gZQ3jOVoCs_8UgyeKxMCb/#mid=1667283573197836', '_blank');
    },
    async add(){
      let params = {
        name:this.consult.name,
        phone:this.consult.phone,
        content:this.consult.desc
      };
      let result = await this.leaveMessage(params)
      if(result.flag){
        this.$Message.success("提交成功")
        this.consult.name = ''
        this.consult.phone = ''
        this.consult.desc = ''
      } else {
        this.$Message.error(result.message)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.footBar-wrapper {
  width: 100%;
  background: #2d3237;
  // font-size: 80px;
  .container {
    display: flex;
    font-display: row;
    justify-content: space-between;
    width: 85vw;
    height: 100%;
    margin: 0 auto;
    padding-top: 4.8vw;
    .footer-first {
      color: #fff;
      h1 {
        font-size: 36px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
        line-height: 36px;
      }
      .first-bottom {
        font-size: 15px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
        line-height: 22px;
        letter-spacing: 2px;
        margin-top: 4.8vw;
        p {
          margin-top: 0.7vw;
          span {
            // padding-left: 15px;
          }
        }
      }
    }
    .footer-second {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 9.2vw;
      margin: 20px 42px;
      .second-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2vw;
        height: 2vw;
        background: #ffffff;
        border-radius: 5px;
        cursor: pointer;
        .iconfont {
          font-size: 24px;
        }
      }
      .weixnshare {
        position: relative;
        img {
          width: 5.9vw;
          height: 6.2vw;
          position: absolute;
          top: -6.2vw;
        }
      }
      .xinlangshare {
        position: relative;
        .xinlang {
          position: absolute;
          top: 3vw;
          left: 0;
          width: 130px;
          text-align: center;
          background: #fff;
          color: #000;
          padding: 0.25vw 0.5vw;
          font-size: 14px;
        }
      }
      .zhihushare {
        position: relative;
        .zhihu {
          position: absolute;
          top: 3vw;
          left: 0;
          width: 130px;
          text-align: center;
          background: #fff;
          color: #000;
          padding: 0.25vw 0.5vw;
          font-size: 14px;
        }
      }
      .jinrishare {
        position: relative;
        .jinri {
          position: absolute;
          top: 3vw;
          left: 0;
          width: 130px;
          text-align: center;
          background: #fff;
          color: #000;
          padding: 0.25vw 0.5vw;
          font-size: 14px;
        }
      }
    }
    .footer-thrid {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 20.3vw;
      .thrid-item {
        display: flex;
        flex-direction: column;
        p {
          font-size: 17px;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          color: #ffffff;
          text-align: center;
          line-height: 22px;
          letter-spacing: 2px;
          margin-bottom: 2vw;
        }
        img {
          width: 8.5vw;
          height: 8.5vw;
        }
      }
    }
    .footer-four {
      width: 12.5vw;
      // height: 8.5vw
      p {
        font-size: 17px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        line-height: 22px;
        letter-spacing: 2px;
        margin-bottom: 2vw;
      }
      .four-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 1.9vw;
      }
    }
  }
}
.subDesc {
  width: 100%;
  background: #ebf3ff;
  border-radius: 3px;
  color: #3d7fff;
}
</style>
