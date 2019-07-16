import Axios from 'Axios'
import Router from '../router'

const root = process.env.API_ROOT

const service = Axios.create({
  baseURL: root,
  transformRequest: [function (data) {
    // return Qs.stringify(data)
    let newData = ''
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
      }
    }
    return newData
  }]
})

// axios 请求拦截器
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// axios 响应拦截器
service.interceptors.response.use(res => {
  if (res.data.ret === 500) {

  }
  // 判断用户登录是否失效
  if (res.data.ret === -5) {

  }
  return res
}, err => {
  return Promise.reject(err)
})

export default service