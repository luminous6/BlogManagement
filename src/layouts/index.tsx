import React, { useState } from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import router from 'umi/router';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = props => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  const handleClickItem = (arg: any) => {
    router.push('/blog')
  };
  const handleClickIndex = () => {
    router.push('/index')
  }
  return (
    <div className={styles.normal}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" >logo</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={handleClickIndex}>
              <span>首页</span>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>博客管理</span>
                </span>
              }
            >
              <Menu.Item key="3" onClick={handleClickItem}>
                添加博客
              </Menu.Item>
              <Menu.Item key="4">查看博客</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {props.children}
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            <a href="https://github.com/luminous6" target="_blank">
              <GithubOutlined /> GitHub
            </a>{' '}
            ©2020 Created by LuminouszzZ
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
