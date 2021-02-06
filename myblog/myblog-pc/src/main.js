import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入npm下载的axios 和 vue-axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// 自己封装的axios
import http from './utils/http'

Vue.config.productionTip = false

//axios vue-axios
// Vue.use(VueAxios, axios)

// 规范 Vue下面加个什么东西 加个$符号
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
