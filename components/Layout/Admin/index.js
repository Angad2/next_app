import React, { useEffect, useState } from 'react'
import { Layout, Menu, Dropdown, Row, Col, Card } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UsergroupAddOutlined,
  TableOutlined,
  ReadOutlined,
  FundOutlined,
  UserOutlined
} from '@ant-design/icons';
import styles from './admin.module.css';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const handleLogout = () => {
  Cookies.remove('userrole')
  Cookies.remove('jwt')
  Cookies.remove('username')

  localStorage.clear()
  Router.push('/login')
}

const userMenu = (
  <Menu>
    <Menu.Item>{Cookies.get('userrole')}</Menu.Item>
    <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
  </Menu>
)

const AdminLayout = (props) => {

  const [selectedKey, setSelectedKey] = useState('/dashboard')
  const [collapsed, setCollapsed] = useState(false)

//   useEffect(() => {
//     if(window.location.pathname){
//       setSelectedKey(window.location.pathname)
//     }
//   }, [window.location.pathname])


  return (
    <Layout className={styles.layout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles.sider}
        width={250}
      >

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          selectedKeys={[selectedKey]}
          className={styles.menu}
        >
          <div className={styles.logo} >
            <Link href={"/"}>
              <a><img src="/images/bright-logo.png" alt="logo" width="140" /></a>
            </Link>
          </div>
          <Menu.Item
            key="/dashboard" 
            onClick={() => Router.push("/dashboard")}
            icon={<FundOutlined />}
            className={styles.menuItem}
          >
            Dashboard
          </Menu.Item>

          <Menu.Item
            key='/students'
            icon={<UsergroupAddOutlined />}
            className={styles.menuItem}
            onClick={() => Router.push('/students')}
          >
            Students
          </Menu.Item>

          <Menu.Item
            key='/teachers'
            icon={<UsergroupAddOutlined />}
            className={styles.menuItem}
            onClick={() => Router.push('/teachers')}
          >
            Teachers
          </Menu.Item>

          <SubMenu
            key="/Attendence"
            title="Attendence"
            icon={<ReadOutlined />}
            className={[styles.menuItem, styles.subMenu].join(" ")}
          >
            <Menu.Item
              key="/Teachers Attendence"
              className={[
                styles.subMenuItem,
                collapsed ? styles.paddingLeft30 : styles.paddingLeft80,
              ].join(" ")}
              icon={<TableOutlined />}
            >
              Teachers Attendence
              </Menu.Item>
            <Menu.Item
              key="/Students Attendence"
              className={[
                styles.subMenuItem,
                collapsed ? styles.paddingLeft30 : styles.paddingLeft80,
              ].join(" ")}
              icon={<TableOutlined />}
            >
              Students Attendence
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 250 }}>
        <Header
          className={styles.layoutHeader}
          style={{
            width: collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: styles.triggerIcon,
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className={styles.userPanel}>
            <Dropdown overlay={userMenu}>
              <div className={styles.user}>
                <p>Hi, {Cookies.get("username")}</p>
                <UserOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content className={styles.content}>
          <div>
            {props.children}
          </div>
        </Content>
        <div className={styles.footer}>
          <p>©2020 School Management System </p>
        </div>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
