/*
 * @Author: Joker
 * @Date: 2020-09-15 10:16:14
 * @LastEditTime: 2020-10-26 16:14:51
 * @FilePath: \website\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import echarts from 'echarts'
import 'view-design/dist/styles/iview.css'
import '@/style/reset.css'
import '@/style/icon/iconfont.css'
import VueClipboard from 'vue-clipboard2'
import store from './vuex/store'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
// Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.use(ViewUI)

router.afterEach(to => {
    window.scrollTo(0, 0)
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})