// 入口文件
import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 导入路由
import router from './router'
// 导入饿了吗组件
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 通过axios拦截器添加token验证
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须return config固定写法
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
// 实例vue，并把APP根组件渲染到页面
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
