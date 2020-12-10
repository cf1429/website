<!--
 * @Author: Joker
 * @Date: 2020-09-21 09:47:09
 * @LastEditTime: 2020-11-11 16:43:48
 * @FilePath: \website\src\views\aboutUs\children\photoWall.vue
-->

<template>
  <div class="photoWall">
    <Row>
      <Col span="6" class="colum">
        <img :src="photoWall11" alt />
        <img :src="photoWall12" alt />
      </Col>
      <Col span="6" class="colum">
        <img :src="photoWall21" alt />
        <img :src="photoWall22" alt />
      </Col>
      <Col span="6" class="colum">
        <img :src="photoWall31" alt />
        <img :src="photoWall32" alt />
      </Col>
      <Col span="6" class="colum">
        <img :src="photoWall41" alt />
        <img :src="photoWall42" alt />
      </Col>
    </Row>
 
  </div>
</template>

<script>

import photoWall11 from "@/assets/images/photoWall11.png";
import photoWall12 from "@/assets/images/photoWall12.png";
import photoWall21 from "@/assets/images/photoWall21.png";
import photoWall22 from "@/assets/images/photoWall22.png";
import photoWall31 from "@/assets/images/photoWall31.png";
import photoWall32 from "@/assets/images/photoWall32.png";
import photoWall41 from "@/assets/images/photoWall41.png";
import photoWall42 from "@/assets/images/photoWall42.png";
export default {
  name: "photoWall",
  data() {
    return {
      photoWall11:photoWall11,
      photoWall12:photoWall12,
      photoWall21:photoWall21,
      photoWall22:photoWall22,
      photoWall31:photoWall31,
      photoWall32:photoWall32,
      photoWall41:photoWall41,
      photoWall42:photoWall42,
    };
  }
};
</script>

<style lang="less" scoped>
.photoWall {
  // display: flex;
  // flex-direction: row;
  height: 39.1vw;
  overflow: hidden;
  .colum {
    // flex-direction: column;
    img {
      width: 100%;
      &:nth-child(2) {
        margin-top: -2px;
      }
    }
  }
}
</style>
