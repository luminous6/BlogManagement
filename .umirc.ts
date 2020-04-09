import { IConfig } from 'umi-types';
// import { routes } from './router';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      title: '博客管理',
      routes: [
        {
          path: '/',
          component: '../pages/index',
          title: '博客首页',
        },
        {
          path: '/index',
          component: '../pages/index',
          title: '博客首页',
        },
        {
          title: '添加博客',
          path: '/addBlog',
          component: '../pages/addBlog/index',
        },
        {
          title: '查看博客',
          path: '/queryBlog',
          component: '../pages/viewBlog/index',
        },
        {
          title: '每日一句',
          path: '/dailySentence',
          component: '../pages/dailySentence/index',
        },
      ],
    },
    // ...routes,
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        title: 'umi',
        dll: false,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [/components\//],
        },
        chainWebpack(config) {
          config.module
            .rule('less-loader')
            .test(/\.less$/)
            .use('less-loader')
            .loader(require.resolve('less-loader'));
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
};

export default config;
