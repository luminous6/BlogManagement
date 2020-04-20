import { extend } from "umi-request";
import { message } from 'antd';
const request = extend({
  prefix:
    process.env.NODE_ENV === 'production' ? 'http://155.94.151.5:7001' : 'http://127.0.0.1:7001',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',

    // 'Content-Type': 'application/json',
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
