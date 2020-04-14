import { extend } from "umi-request";
import { message } from 'antd';
const request = extend({
  prefix: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    // token: "xxx" // 所有请求默认带上 token 参数
  },
  errorHandler: function(error) {
    /* 异常处理 */
    console.log(error);

    message.error('网络异常');
  },
});


export { request }
