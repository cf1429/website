/*
 * @Author: Joker
 * @Date: 2020-09-15 10:16:14
 * @LastEditTime: 2020-11-05 12:01:35
 * @FilePath: \website\src\router\index.js
 */
import Vue from 'vue'
import ViewUI from 'view-design'
import Router from 'vue-router'
import home from '@/views/home/home'
import prodService from '@/views/prodService/index'
import activity from '@/views/activity/index'
import news from '@/views/news/index'
import aboutUs from '@/views/aboutUs/index'
import detail from '@/views/detail/index'
import list from '@/views/list/index'
Vue.use(ViewUI)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [{
            path: '/',
            redirect: "/index"
        }, {
            path: '/index',
            name: 'home',
            component: home
        },
        {
            path: '/prodService',
            name: 'prodService',
            component: prodService
        },
        {
            path: '/activity',
            name: 'activity',
            component: activity,
        },
        {
            path: '/activity/detail/:id',
            name: 'detail',
            component: detail,
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/news/detail/:id',
            name: 'detail',
            component: detail
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: aboutUs
        },
        {
            path: '/activity/list',
            name: 'list',
            component: list
        },{
            path: '/news/list',
            name: 'list',
            component: list
        }
    ]
})