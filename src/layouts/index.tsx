import React, { useState } from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { GithubOutlined, DownOutlined } from '@ant-design/icons';
import router from 'umi/router';
import layoutsData from './data';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = props => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  // 渲染一级菜单
  const renderNav = (data: any) => (
    <Menu.Item key={data.path} onClick={handleClickItem}>
      <span>{data.title}</span>
    </Menu.Item>
  );
  // 渲染二级菜单
  const renderSubNav = (data: any) => (
    <SubMenu
      key={data.key}
      title={
        <span>
          <span>{data.title}</span>
        </span>
      }
    >
      {data.subMenu ? data.subMenu.map((item: any, index: number) => renderNav(item)) : ''}
    </SubMenu>
  );

  const renderLayouts = (layoutsData: any) =>
    layoutsData.map((item: any, index: number) => {
      return item.noSubmenu ? renderNav(item) : renderSubNav(item);
    });

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  const handleClickItem = (arg: any) => {
    router.push(arg.key);
  };
  return (
    <div className={styles.normal}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={collapsed} onCollapse={onCollapse}>
          <div className={styles.logo}></div>
          <Menu theme="dark" defaultSelectedKeys={['/index']} mode="inline">
            {renderLayouts(layoutsData)}
            {/* {renderNav(layoutsData[0])} */}
            {/* {renderSubNav(layoutsData[1])} */}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,background:'#fff' }} />
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
