<template>
  <div class="home">
    <Row v-if="headerBanner.length" class="carousel-wrapper">
      <carousel :carouselData="headerBanner" />
    </Row>
    <Row class="banner-wrapper">
      <div class="slideBox1">
        <div class="nameff">
          <p><span>关于我们 /</span> <label>ABOUT US</label></p>
          <router-link  to="/aboutUs" title="更多 ">更多+</router-link>
           
        </div>
        <div class="conetnt">
          <img src="https://www.sxlzhb.com/skin/images/about.jpg" alt="">
          <a href="javascript:;">
             陕西旭莱环保科技有限公司是一家国家级高新技术企业、“村镇环境科技产业联盟”副理事长单位，位于西安市高新技术开发区，公司具有环保工程专业承包一级、市政公用工程施工总...
          </a>
          <div>
            <!-- <a href="javascript:;" class="detail">了解详情</a> -->
          </div>
        </div>
      </div>
      <div class="slideBox2">
         <div class="nameff">
          <p><span>咨询中心  /</span> <label>consulting center</label></p>
     
          <router-link  to="/news" title="更多 ">更多+</router-link>
        </div>
        <div class="conetnt">
         <ul>
              <div class="iop">
                <a href="javascript:;" title="朗正生产工人的自白" class="top"><i><img src="https://www.sxlzhb.com/images/defaultpic.gif" alt="朗正生产工人的自白" style="height:80px; width:80px;"></i>
                <p>旭莱生产工人的自白
                  <span>我们没有悦耳的歌声，灵动的舞姿， 我 们有按图组铆，掌控焊花的灵巧双手， 我 们有不怕脏累，挥汗如雨的拼搏精神； 我们没有文采飞扬，妙笔生花的...</span></p>
                </a></div>

			               
              <li>
                <a href="javascript:;" title="旭莱环保西安高新区装备制造基地"><span class="date">旭莱环保西安高新区装备制造基地</span><i>2020-12-31</i></a></li>
            <li>
            <a href="javascript:;" title="员工关怀 | 温暖前行   与旭莱共同"><span class="date">员工关怀 | 温暖前行   与旭莱共同</span><i>2020-12-21</i></a></li>
            <li><a href="javascript:;" title="助力杨凌农村人居环境改善   坚决"><span class="date">助力杨凌农村人居环境改善   坚决</span><i>2020-08-05</i></a></li>
            </ul>
        </div>
      </div>
      <div class="slideBox3">
       <div class="nameff">
          <p><span>产品风采  /</span> <label>xxxxx</label></p>
         
           <router-link  to="/prodService" title="更多 ">更多+</router-link>
        </div>
        <div class="conetnt">
         <ul>
           <li>
             <img  src="/static/img/system3.f0a2d14.jpg" alt="systemImg">
             <a href="javascript:;">
               <span>净水设备</span>
               <p>单位时间内输出一定流量、扬程的自动启停的给水装置。按用途分：消防、生活、生产、污水处理四类。</p>
             </a>
            </li>
             <li>
             <img  src="/static/img/system1.efc678a.jpg" alt="systemImg">
            <a href="javascript:;">
               <span>供水设备</span>
             <p>采用时间程序控制，此控制方式无需仪表的支持，首先根据系统的运转需要设定自动加药的周期、加药量、加药时间和加药频率。在以后的系统运转过程中，到加药周期，计量泵自动打开加药，加到规定的时间计量泵关闭</p>
            </a>
            </li>
             <li>
             <img  src="/static/img/system2.ac9d3e8.jpg" alt="systemImg">
            <a href="javascript:;">
               <span>加药设备</span>
             <p>生产净水的设备。大多采用反渗透工艺，反渗透是在室温条件下，采用无相变的物理方法将含盐水进行脱盐、除盐。</p>
             </a>
            </li>
         </ul>
        </div>
      </div>
    </Row>
  </div>
</template>

<script>
import carousel from "./children/carousel";
import advantage from "./children/advantage";
import flow from "./children/flow";
import mapCom from "./children/mapCom";
import companionCom from "./children/companionCom";
import bannerImg from "@/assets/images/banner.png";
import { mapActions } from "vuex";
export default {
  name: "home",
  components: {
    carousel,
    advantage,
    flow,
    mapCom,
    companionCom,
  },
  data() {
    return {
      bannerSrc: bannerImg,
      headerBanner: [],
      middleBanner: [],
      bottomBanner: [],
    };
  },
  methods: {
    ...mapActions(["getBanner"]),
    async getData() {
      let params = {
        type: 4,
        pageNum: 0,
        pageSize: 999,
        state: 2,
      };
      try {
        let result = await this.getBanner(params);
        if (result.flag) {
          let { dataList } = result.data;
          this.headerBanner = dataList
            .filter((item) => item.categoryName === "头部")
            .sort((a, b) => a.sort - b.sort);
          this.middleBanner = dataList
            .filter((item) => item.categoryName === "中部")
            .sort((a, b) => {
              a.sort - b.sort;
            });
          this.bottomBanner = dataList
            .filter((item) => item.categoryName === "底部")
            .sort((a, b) => {
              a.sort - b.sort;
            });
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.home {
  .carousel-wrapper {
    height: 27vw;
  }
  .banner-wrapper {
    position: relative;
    width: 100%;
    margin-top: 2px;
    img {
      height: 100%;
      width: 100%;
    }
    .banner-wrapper-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 79.2vw;
      height: 18.2vw;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      .content-first {
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        line-height: 84px;
      }
      .content-second {
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        line-height: 37px;
      }
      .fs60 {
        font-size: 3.1vw;
      }
      .fs26 {
        font-size: 1.4vw;
      }
    }
  }
  .banner-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 1200px;
    margin: 0 auto;
  }
  .slideBox1,
  .slideBox2,
  .slideBox3 {
    width: 33.33%;
    height: 316px;
    border: 1px solid #d3d3d3;
    background: #fff;
    padding: 0 13px;
    margin: 15px 10px;
    .nameff {
      display: flex;
      justify-content: space-between;
      padding: 25px 0 0 0;
      border-bottom: 1px solid #d3d3d3;
      p {
        padding: 0 0 5px 0;
        font-weight: bold;
        span {
          color: #1e9e01;
        }
        label {
          color: #a3a3a3;
        }
      }
      a {
        padding: 0px 0 0 0;
        color: #1e9e01;
        font-size: 14px;
      }
    }
  }
  .slideBox1 {
    
    .conetnt {
      a{
        color: #333;
        font-size: 14px;
        line-height: 2;
      }
      a:hover {
                color: #009882;
              }
      .detail{
        color: #009882;
      }
    }
  }
  .slideBox2 {
    .conetnt {
      font-size: 14px;
      
      .iop{
            height: 126px;
            width: 100%;
            border-bottom: #dddddd solid 1px;
            margin-bottom: 12px;
            a{
              p{
                    width: 74%;
                  font-size: 18px;
                  color: #333333;
                  padding-top: 12px;
                      display: inline-block;
                  span{
                    font-size: 12px;
                    display: inline-block;
                    font-weight: normal;
                    color: #666666;
                    line-height: 20px;
                    padding-top: 12px;
                  }
              }
            }
            .top {
            display: flex;
          }
          
      }
      li{
            display: block;
            line-height: 32px;
            a:hover span{
                color: #009882;
              }
            a{
              display: flex;
            justify-content: space-between;
              color: #333;
              span{
                color: #333333;
                padding-left: 10px;
                background:url("../../assets/images/b_03.jpg") 0 14px no-repeat
              }
              
              i{
                display: inline-block;
                font-size: 14px;
                color: #999999; 
              }
            }
          }
    }
  }
  .slideBox3 {
    .conetnt {
       a:hover p{
                color: #009882;
              }
              a{
                color: #333333;
              }
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px  0;
      }
      img{
        width: 150px;
        height: 60px;
        margin-right: 10px;
      }
      span {
        display: inline-block;
            font-size: 18px;
             line-height: 1.5;
      }
      p{
        color: #333333;
        font-size: 14px;
         text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.5;
      }
    }
  }
}
</style>
