<!--
 * @Author: Joker
 * @Date: 2020-09-15 10:16:14
 * @LastEditTime: 2020-10-28 18:37:32
 * @FilePath: \website\src\App.vue
-->
<template>
  <div id="app">
    <navBar/>
    <router-view />
    <footBar/>
    <consultancy/>
  </div>
</template>

<script>
import navBar from "@/components/navBar/navBar";
import footBar from '@/components/footBar/footBar'
import consultancy from '@/components/consultancy/consultancy'
export default {
  name: "App",
  components: {
    navBar,
    footBar,
    consultancy
  },
};
</script>

<style>
html,
body,
#app {
  min-height: 100%;
}
</style>
