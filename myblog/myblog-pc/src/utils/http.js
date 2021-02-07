import axios from 'axios'
import store from '../store';
import app from '../main'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000
});

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        let token = localStorage.getItem('mytoken')
        config.headers['Authorization'] = 'Bearer ' + token;
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
// 第一个function 相当于then
// 第二个function 相当于catch

// 我把此处的axios修改为instance
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        // 此处数据应该是直接跳到catch中 
        return response;
    }, function (error) {
        // 对响应错误做点什么
        let {status} = error.response;
        if(status == 401){
            // 把token清空
            store.dispatch('logout');
            // history.pushState('/login');
            // location.href = '/login'

            // 这里直接使用app来引用vue实例
            app.$router.push('/login');
        }
        return Promise.reject(error);
    });

// 前端开发
export default instance;
