import React from 'react';
import styles from './style.less';
import { Menu, Dropdown, Button, Avatar, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { removeLocalStorageItem } from '@/utils/util';
const { confirm } = Modal;
import router from 'umi/router';
const loginOut = () => {
  confirm({
    title: 'Are you sure you want to log out?',
    icon: <ExclamationCircleOutlined />,
    centered: true,
    onOk() {
      setTimeout(() => {
        removeLocalStorageItem('token');
        router.push('/login');
        message.success('退出登录成功')
      }, 500);
    },
    onCancel() {},
  });
};
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://github.com/luminous6" target="_blank">
        Github
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>个人中心</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" onClick={loginOut}>
      退出登录
    </Menu.Item>
  </Menu>
);
export default function index() {
  return (
    <div className={styles.header}>
      <div>
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <Avatar src={require('@/assets/yay.jpg')} />
        </Dropdown>
      </div>
    </div>
  );
}
