import React, { useState } from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = props => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  return (
    <div className={styles.normal}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
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
              GitHub
            </a>{' '}
            ©2020 Created by LuminouszzZ
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
