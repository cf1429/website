import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along'
import axios from '../api/config'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: ""
  },
  mutations: {
    setType(state, type) {
      state.type = type
    }
  },
  actions: {
    async getBanner({ commit }, params) {
      return await axios.post('/cms/contentInfo/list', params)
    },
    // 知仲活动
    async getActive({ commit }, params) {
      return await axios.post('/cms/category/cateGoryContentInfolist', params)
    },
    // 添加留言
    async leaveMessage({ commit }, params) {
      return await axios.post('/cms/leaving/add', params)
    },
    // 获取详情
    async getDetail({ commit }, params) {
      return await axios.get('/cms/contentInfo/detail/' + params)
    },
    // 获取招聘详情
    async getResume({ commit }, params) {
      return await axios.post('/cms/contentInfo/recruitList/', params)
    },
  },
  plugins: [createVuexAlong({
    name: "type-vuex-along",
    session: {
      list: ["type"]
    }
  })]
})