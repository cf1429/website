<!--
 * @Author: Joker
 * @Date: 2020-09-17 11:28:54
 * @LastEditTime: 2020-10-29 10:33:48
 * @FilePath: \website\src\views\prodService\index.vue
-->
<template>
  <div class="prodService">
    <Row>
      <system />
    </Row>
    <Row ref="feature" id="feature">
      <feature /> 
    </Row>
    <Row>
      <func />
    </Row>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import system from './children/system'
import feature from './children/feature'
import func from './children/func'
export default {
  name: "prodService",
  components:{
    system,
    feature,
    func
  },
  watch: {
    $route: {
      handler() {
        this.pos = this.$route.query.position;
        if(this.pos == 1) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }else if(this.pos == 2) {
          window.scrollTo({
            top: document.body.clientWidth/100*330,
            behavior: 'smooth'
          })
         this.$route.query.position = ''
        }else if (this.pos == 3) {
          window.scrollTo({
            top: document.body.clientWidth/100*376,
            behavior: 'smooth'
          })
         this.$route.query.position = ''
        }
     },
    }
  },
  data() {
    return {
      pos:''
    };
  },
  mounted(){
    this.pos = this.$route.query.position
    if(this.$route.query.position == 2){
      window.scrollTo({
        top: document.body.clientWidth/100*330,
        behavior: 'smooth'
      })
      this.$route.query.position = ''
    }else if(this.$route.query.position == 3) {
      window.scrollTo({
        top: document.body.clientWidth/100*376,
        behavior: 'smooth'
      })
      this.$route.query.position = ''
    }
  }
};
</script>

<style>
</style>
