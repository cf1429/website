/*
 * @Author: Joker
 * @Date: 2020-10-19 09:58:30
 * @LastEditTime: 2020-11-11 18:11:40
 * @FilePath: \website\src\api\config.js
 */
import axios from 'axios'
import qs from 'qs'

/*
 * 根据环境变量设置api地址
 */

switch (process.env.NODE_ENV) {
	case 'production':
		  axios.defaults.baseURL = 'http://8.133.170.159:8086/'
		//  axios.defaults.baseURL = 'http://192.168.189.1:8086/'
		// axios.defaults.baseURL = 'http://103.90.189.226:12562/api';
		// axios.defaults.baseURL = 'http://www.zhizhongkj.cn/api';
		// axios.defaults.baseURL = 'http://192.168.1.193:8087/api';
		// axios.defaults.baseURL = 'http://192.168.1.193:8087/api';
		break;
	default:
		axios.defaults.baseURL = '/api';
}
/*
 * 设置超时时间
 */
axios.defaults.timeout = 30000;
// 设置允许携带cookies
// 跨域访问需要发送cookie时一定要加axios.defaults.withCredentials = true;
axios.defaults.withCredentials = true;
// 设置请求的header
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data)
// 设置请求拦截器
axios.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	token && (config.headers.Authorization = token);
	return config
}, error => {
	return Promise.reject(error)
});

// 设置返回拦截器

axios.interceptors.response.use(response => {
	return response.data
}, error => {
	let { response } = error;
	if (response) {
		// 服务器返回的错误码
	} else {
		// 服务器连状态码都没返回
		if (!window.navigator.onLine) {
			// 断网了 => 可以跳转到断网页面
			switch (response.status) {
				case 401: // 权限未登陆
					// this.$Message()
					break;
				case 403: // 服务器拒绝访问 token 过期
					// this.$Message()
					break;
				case 404: // 找不到页面
					// this.$Message()
					break;
			}
			return
		} else {
			return Promise.reject(error)
		}
	}
})

export default axios