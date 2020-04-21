import { extend } from 'umi-request';
import { message } from 'antd';
import router from 'umi/router';

const request = extend({
  prefix:
    process.env.NODE_ENV === 'production' ? 'http://155.94.151.5:7001' : 'http://127.0.0.1:7001',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    // token: "xxx" // 所有请求默认带上 token 参数
  },
  errorHandler: function(error: any) {
    /* 异常处理 */
    const { response } = error;
    if (response.status === 401) {
      message.error('登录已过期，请重新登录');
      setTimeout(() => {
        router.push('/login');
      }, 500);
    }
    return;
  },
});
request.interceptors.request.use((url, options) => {
  console.log('当前token, ', localStorage.getItem('token'));
  return {
    options: {
      ...options,
      headers: Object.assign(
        { Authorization: `Bearer ${localStorage.getItem('token')}` },
        options.headers,
      ),
    },
  };
});

export { request };
