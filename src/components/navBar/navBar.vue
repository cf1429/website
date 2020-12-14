<template>
  <div class="navbar-wrapper">
    <div class="navbar-container">
      <img class="navbar-left" :src="logoImg" alt="logo" />
      <div class="navbar-right">
        <div
          v-for="item in linkData"
          :key="item.id"
          class="navbar-right-item"
          @mousemove="handleOpenFlag(item)"
          @mouseleave="handleCloseFlag(item)"
        >
          <router-link active-class="active" :to="item.src">
            {{item.title}}
            <p></p>
          </router-link>
          <div
            class="second-nav"
            v-if="item.flag"
            @mousemove="handleOpenFlag(item)"
            @mouseleave="handleCloseFlag(item)"
          >
            <div class="second-content">
              <a @click="scrollFun(item)">系统功能</a>
              <!-- <router-link @click="closeFlag(item)" :to="{path:'/prodService',query:{position:1}}" tag="a">系统功能</router-link>
              <router-link :to="{path:'/prodService',query:{position:2}}" tag="a">系统特点</router-link>
              <router-link :to="{path:'/prodService',query:{position:3}}" tag="a">系统流程</router-link>-->
              <a @click="scrollFeature(item)">系统特点</a>
              <a @click="scrollFlow(item)">系统流程</a>
            </div>
          </div>
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
      linkData:[
        {
          id:"1",
          title:"首页",
          flag:false,
          src:"/index",
        },
        {
          id:"2",
<<<<<<< HEAD
          title:"产品",
=======
          title:"产品与服务",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          flag:false,
          src:"/prodService",
        },{
          id:"3",
<<<<<<< HEAD
          title:"工程案例",
=======
          title:"知仲活动",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
          flag:false,
          src:"/activity",
        },{
          id:"4",
<<<<<<< HEAD
          title:"技术服务",
=======
          title:"新闻动态",
>>>>>>> ed79fe6d38e8daba367abfa82391453a9bf2bebd
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
  methods:{
    handleOpenFlag(msg){
      msg.id == 2 ? msg.flag = true : ""
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
  height: 7.2vw;
  box-shadow: 0px 2px 21px 0px rgba(0, 0, 0, 0.1);
  .navbar-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 100%;
    padding-right:5vw;
    .navbar-left {
      width: 118px;
      height: 59px;
    }
    .navbar-right {
      display: flex;
      flex-direction: row;
      font-size: 18px;
      padding-top:10px;
      .navbar-right-item {
        padding: 0 3vw;
        position: relative;
        .active {
          p {
            display: inline;
          }
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #000;
          p {
            display: none;
            width: 1.9vw;
            height: 0.2vw;
            background: #2759b5;
            margin-top: 0.8vw;
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
    }
  }
}
</style>
