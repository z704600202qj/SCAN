import axios from 'axios'; // 引入axios
import Qs from 'qs'; // 引入qs模块，用来序列化post类型的数据
import { history } from 'umi';
import { checkStatus } from './utils'; // 处理函数
import { message } from 'antd';

// 创建axios实例
const instance = axios.create({
    // baseURL: process.env.BASE_URL,
    timeout: 30000, // 请求超时时间
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return JSON.parse(data);
    }]
})
// 实例添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做处理...
    let str: any = localStorage.getItem('tokens')
    config.headers = Object.assign(config.method === 'get' ? {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
    } : {
            'Content-Type': 'application/json; charset=UTF-8'
        }, config.headers);

    if (config.method === 'post') {
        const contentType = config.headers['Content-Type'];
        // 根据Content-Type转换data格式
        if (contentType) {
            if (contentType.includes('multipart')) { // 类型 'multipart/form-data;'
                // config.data = data;
            } else if (contentType.includes('json')) { // 类型 'application/json;'
                config.data = JSON.stringify({ ...config.data });
            } else { // 类型 'application/x-www-form-urlencoded;'
                // 服务器收到的raw body(原始数据) name=nowThen&age=18
                config.data = Qs.stringify({ ...config.data });
            }
        }
    }
    config.headers.common["Authorization"] = "Basic " + str
    return Promise.resolve(config);
}, function (error) {
    // 对请求错误做处理...
    return Promise.reject(error);
});

// 实例添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做处理，以下根据实际数据结构改动！！...
    return Promise.resolve(checkStatus(response));
}, function (error) {
    // 对响应错误做处理...
    if (error.response) {
        return Promise.reject(checkStatus(error.response));
    } else if (
        error.code == "ECONNABORTED" &&
        error.message.indexOf("timeout") != -1
    ) {
        return Promise.reject({ msg: "请求超时" });
    } else {
        return Promise.reject({});
    }
});

let baseUrl = ''; // 这里是一个默认的url，可以没有
// eslint-disable-next-line default-case
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = '/api'
        break
    case 'production':
        baseUrl = '/'
        break
}
//request.js
const request = async function (opt: any) {
    let options: any
    try {
        options = Object.assign({
            method: 'get',
            ifHandleError: true, // 是否统一处理接口失败(提示)
            ifHandleOk: false // 
        }, opt);
        // 匹配接口前缀 开发环境则通过proxy配置转发请求； 生产环境根据实际配置
        options.baseURL = baseUrl;

        const res: any = await instance(options);
        console.log(res)
     
        if (res.code !== 200 && options.ifHandleError) { // 自定义参数，是否允许全局提示错误信息
            message.error(res.msg || '请求处理失败！');
        }
        if (res.code === 200 && options.ifHandleOk) { // 自定义参数，是否允许全局提示错误信息
            message.success(res.msg || '操作成功');
        }
        return res;
    } catch (err) {
        if (options.ifHandleError) { // 自定义参数，是否允许全局提示错误信息
            // message.error(res.error || '请求处理失败！');
        }
        return err;
    }
}


export default request