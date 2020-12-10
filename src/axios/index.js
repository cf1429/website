import axios from 'axios'
import qs from 'qs'
import { Message } from 'view-design'

axios.defaults.withCredentials = true // 设置cookie
axios.defaults.crossDomain = true
axios.defaults.retry = 2
axios.defaults.retryDelay = 500
axios.defaults.baseURL = '/api/'
const service = axios.create()

service.interceptors.request.use(config => {
  config.headers = Object.assign(
    config.method === 'get'
      ? {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      }
      : {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }, config.headers
  )
  // let token = Cookies.get('zhizhong_token')
  // if (token) {
  //   config.headers.Cookie = Cookies.get('zhizhong_token')
  // }
  config.data = qs.stringify(config.data)
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
service.interceptors.response.use(res => {
  console.log(res, '-------response')
  if (res.data.flag) {
    return res.data
  } else {
    // console.log(123)
    // if (res.data.code === '000121') {
    //   router.push('/login')
    //   Message.error({
    //     content: res.data.message,
    //     duration: 3
    //   })
    // } else if (res.data.code === '000110') {
    //   Message.error({
    //     content: res.data.message,
    //     duration: 3
    //   })
    //   router.push('/login')
    // } else {
    //   Message.error({
    //     content: res.data.message,
    //     duration: 3
    //   })
    // }
    Promise.reject(res.data.message)
  }
}, error => {
  // console.log(error.response.status)
  // if (error.response.status === 401) {
  //   Message.error({
  //     content: '登录已过期，请重新登录',
  //     duration: 3
  //   })
  // }
  // else if (error.response.status === 401) {
  //   // 401: 未登录
  //   // 未登录则跳转登录页面，并携带当前页面的路径
  //   // 在登录成功后返回当前页面，这一步需要在登录页操作。
  //   Message.error({
  //     content: '登录已过期，请重新登录',
  //     duration: 3
  //   })
  //   router.push({ path: '/login' })
  // }
  // else if (error.response.status === 403) {
  //   Message.error({
  //     content: '登录已过期，请重新登录',
  //     duration: 3
  //   })
  //   setTimeout(() => {
  //     router.push('/login')
  //   }, 1000)
  // } else if (error.response.status === 500) {
  //   Message.error({
  //     content: '服务器内部错误code:' + error.response.status,
  //     duration: 3
  //   })
  // } else if (error.response.status === 404) {
  //   Message.error({
  //     content: '网络请求不存在code:' + error.response.status,
  //     duration: 3
  //   })
  // } else if (error.response.status === 504) {
  //   Message.error({
  //     content: '网络请求超时code:' + error.response.status,
  //     duration: 3
  //   })
  // } else {
  //   Message.error({
  //     content: error,
  //     duration: 3
  //   })
  // }
  return Promise.reject(error)
})

export default service