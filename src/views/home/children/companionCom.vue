<template>
  <div class="companionCom">
    <img v-for="item in imgData" :key="item" :src="item" alt />
    <!-- <div v-for="item in imgData" >{{item}}</div> -->
  </div>
</template>

<script>
import carsoul1 from "@/assets/images/companion1.png";
import carsoul2 from "@/assets/images/companion2.png";
import carsoul3 from "@/assets/images/companion3.png";
import carsoul4 from "@/assets/images/companion4.png";
import carsoul5 from "@/assets/images/companion5.png";
import carsoul6 from "@/assets/images/companion6.png";
import carsoul7 from "@/assets/images/companion7.png";
import carsoul8 from "@/assets/images/companion8.png";
import carsoul9 from "@/assets/images/companion9.png";
import carsoul10 from "@/assets/images/companion10.png";
import carsoul11 from "@/assets/images/companion11.png";
import carsoul12 from "@/assets/images/companion12.png";
import carsoul13 from "@/assets/images/companion13.png";
import carsoul14 from "@/assets/images/companion14.png";
import carsoul15 from "@/assets/images/companion15.png";
import carsoul16 from "@/assets/images/companion16.png";
import carsoul17 from "@/assets/images/companion17.png";
import carsoul18 from "@/assets/images/companion18.png";
export default {
  name: "companionCom",
  data() {
    return {
      imgData:[carsoul1,carsoul2,carsoul3,carsoul4,carsoul5,carsoul6,carsoul7,carsoul8,carsoul9,carsoul10,carsoul11,carsoul12,carsoul13,carsoul14,carsoul15,carsoul16,carsoul17,carsoul18]
    };
  }
};
</script>


<style lang="less" scoped>
.companionCom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10.4vw;
  img {
    width: 24.6vw;
    height: 8.1vw;
    margin-bottom: 2.6vw;
  }
}
</style>
