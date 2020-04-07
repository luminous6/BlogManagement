import { HomeOutlined } from '@ant-design/icons';

const layoutsData = [
  {
    title: '首页',
    path: '/index',
    key: '1',
    noSubmenu: true,
    icon: HomeOutlined,
  },
  {
    title: '博客管理',
    noSubmenu: false,
    key: '2',
    subMenu: [
      {
        title: '添加博客',
        path: '/addBlog',
        key: '3',
      },
      {
        title: '查看博客',
        key: '4',
        path: '/queryBlog',
      },
    ],
  },
  {
    title: '每日一句',
    key: '5',
    noSubmenu: false,
    subMenu: [
      {
        title: '新增句子',
        key: '6',
        path: '/addSentence',
      },
      {
        title: '查看句子',
        key: '7',
        path: '/querySentence',
      },
    ],
  },
];

export default layoutsData;
