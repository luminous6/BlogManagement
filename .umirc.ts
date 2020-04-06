import { IConfig } from 'umi-types';
import routes from './router';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/index', component: '../pages/index' },
        {
          path: '/blog',
          component: '../pages/blog/index',
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
};

export default config;
