import { extend } from "umi-request";
import { message } from 'antd';
const request = extend({
  prefix: "http://155.94.151.5:7001",
  timeout: 1000,
  headers: {
    "Content-Type": "multipart/form-data"
  },
  params: {
    // token: "xxx" // 所有请求默认带上 token 参数
  },
  errorHandler: function(error) {
    /* 异常处理 */
     message.error(error);
  }
});


export { request }
