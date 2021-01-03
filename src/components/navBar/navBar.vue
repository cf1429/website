<template>
  <div class="navbar-wrapper">
    <div class="navbar-container">
      <img class="navbar-left" :src="logoImg" alt="logo" />
      <div class="navbar-right">
        <div
          v-for="(item, index) in linkData"
          :key="item.id"
          :class="{'navbar-right-item': true, '_active': active===index}"
          @mousemove="handleOpenFlag(index)"
          @mouseleave="handleCloseFlag(item)"
          
        >
          <router-link active-class="active" :to="item.src">
            {{item.title}}
            <p></p>
          </router-link>
           <!--  <div
            class="second-nav"
            v-if="item.flag"
            @mousemove="handleOpenFlag(item)"
            @mouseleave="handleCloseFlag(item)"
          >
          <div class="second-content">
              <a @click="scrollFun(item)">设备简介</a>
              <router-link @click="closeFlag(item)" :to="{path:'/prodService',query:{position:1}}" tag="a">系统功能</router-link>
              <router-link :to="{path:'/prodService',query:{position:2}}" tag="a">系统特点</router-link>
              <router-link :to="{path:'/prodService',query:{position:3}}" tag="a">系统流程</router-link>
              <a @click="scrollFeature(item)">设备细化</a>
              <a @click="scrollFlow(item)">系统流程</a>
            </div> 
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoImg from "@/assets/images/logo.png";
export default {
  name: "navBar",
  data() {
    return {
      logoImg:logoImg,
      flag:false,
      active: null,
      linkData:[
        {
          id:"1",
          title:"网站首页",
          flag:false,
          src:"/index",
        },
        {
          id:"2",
          title:"产品风采",

          flag:false,
          src:"/prodService",
        },{
          id:"3",
          title:"公司动态",

          flag:false,
          src:"/activity",
        },{
          id:"4",
          title:"资讯中心",

          flag:false,
          src:"/news",
        },{
          id:"5",
          title:"关于我们",
          flag:false,
          src:"/aboutUs",
        }
      ]
    };
  },
  watch:{
    $route(to,from){
    console.log(to.path);
    if(to.path) {
      let index = this.linkData.map(v=>v.src).indexOf(to.path);
 
      if(index>-1) {
        this.active = index;
      }
    }
  }
  },
  methods:{
    handleOpenFlag(index){
      this.active = index;
      // msg.id == 2 ? msg.flag = true : ""
      // msg.flag=!msg.flag;
    },
    handleCloseFlag(msg){
      msg.id == 2 ? msg.flag = false : ""
    },
    scrollFun(msg){
      msg.id == 2 ? msg.flag = false : ""
      this.$router.push('/prodService')
    },
    scrollFeature(msg){
      msg.id == 2 ? msg.flag = false : ""
      this.$router.push({
        path:'/prodService',
        query:{
          position:2
        }
      })
    },
    scrollFlow(msg){
      msg.id == 2 ? msg.flag = false : ""
      this.$router.push({
        path:'/prodService',
        query:{
          position:3
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.navbar-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  // background-color: #2d831a;
  box-shadow: 0px 2px 21px 0px rgba(0, 0, 0, 0.1);
  .navbar-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color:#1e9e01;
    width: 100%;
    height: 100%;
    line-height: 50px;
    padding-right: 10vw;
    padding-left: 10vw;
    .navbar-left {
      width: 118px;
      height: 100%;
    }
    .navbar-right {
      display: flex;
      flex-direction: row;
      font-size: 18px;
      // padding-top:10px;
      ._active {
        background-color: #ff981f;
      }
      .navbar-right-item {
        // padding: 0 3vw;
        position: relative;
        // margin-right: 10px;
        border-right: 1px solid #26af08;
        width: 109px;
        .active {
          p {
            display: inline;
          }
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          p {
            display: none;
            width: 1.9vw;
            // height: 0.2vw;
            // background: #2759b5;
            // margin-top: 0.8vw;
          }
        }
        .second-nav {
          position: absolute;
          height: 7vw;
          width: 36.5vw;
          padding-top: 0.7vw;
          left: 50%;
          transform: translate(-50%, 0); /* 50%为自身尺寸的一半 */
          z-index: 99;
          cursor: pointer;
          .second-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 5.3vw;
            background: #fff;
            border-radius: 0px 0px 1px 0px 0px 0px 0px;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
            a {
              width: 33.33%;
              text-align: center;
              &:nth-child(2) {
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
              }
              &:hover {
                color: #2759b5;
              }
            }
          }
        }
      }
      .navbar-right-item:last-child{
        border-right: none;
      }
    }
  }
}
</style>
