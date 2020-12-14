import React from 'react';
import { Row, Col, List, Typography, Divider, Card, Menu, Dropdown, Button } from 'antd';
import { DownOutlined ,UserOutlined} from '@ant-design/icons';
import Link from 'next/link'
import styles from './header.module.css';
import Router from 'next/router';
import Cookies from "js-cookie";

// const Links = [
//     ['Home', '/home'],
//     ['Contact', '/contact'],
//     ['Course', '/course'],
//     ['Events', '/events'],
//     ['Gallery', '/gallery'],
// ];
const { SubMenu } = Menu;
const menu1 = (
    <Menu style={{ width: '120px' }}>
        <Menu.Item className={styles.menuI} onClick={() => Router.push('/react')}>React js</Menu.Item>
        <Menu.Item className={styles.menuI} onClick={() => Router.push('/node')}>Node js</Menu.Item>
        <SubMenu title="Syllabus">
            <Menu.Item className={styles.menuI} onClick={() => Router.push('/reactsyllabus')}>Reactjs Syllabus</Menu.Item>
            <Menu.Item className={styles.menuI} onClick={() => Router.push('/nodesyllabus')}>Nodejs Syllabus</Menu.Item>
        </SubMenu>
    </Menu>
);
const events = (
    <Menu style={{ width: '120px' }}>
        <Menu.Item className={styles.menuI} onClick={() => Router.push('/quize')}>Quize</Menu.Item>
        <Menu.Item className={styles.menuI} onClick={() => Router.push('/video')}>Videos</Menu.Item>
    </Menu>
);
const gallery = (
    <Menu style={{ width: '120px' }}>
        <Menu.Item className={styles.menuI} onClick={() => Router.push('/photo')}>Photos</Menu.Item>
        <Menu.Item className={styles.menuI} onClick={() => Router.push('/video')}>Videos</Menu.Item>
    </Menu>
);

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

const Header = () => {
    const username = Cookies.get('username');

    return (
        <div className={styles.headerDiv}>
            {/* <header><title>Bright</title></header> */}
            <Row justify="center">
                <Col span={11}>
                    <div className={styles.imageContainer}>
                        <Link href={"/"}>
                            <a><img src="/images/bright-logo.png" alt="logo" /></a>
                        </Link>
                    </div>
                </Col>
                <Col span={7}>
                    <div className={styles.menuItem}>
                        {/* {
                        Links.map((item,i)=>(
                            <div className={styles.items} key={i}>
                                <Link href={item[1]} ><a>{item[0]}</a></Link>
                            </div>
                        ))
                       } */}
                        {/* <Dropdown overlay={menu} placement="bottomCenter" arrow >
                            <Button>bottomCenter</Button>
                        </Dropdown> */}
                        <div className={styles.items}>
                            <Link href={"/"} ><a>Home</a></Link>
                        </div>
                        <div className={styles.items}>
                            <Link href={"/contact"} ><a>Contact</a></Link>
                        </div>
                        <Dropdown overlay={menu1} className={styles.items}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Course <DownOutlined />
                            </a>
                        </Dropdown>
                        <Dropdown overlay={events} className={styles.items}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Events <DownOutlined />
                            </a>
                        </Dropdown>
                        <Dropdown overlay={gallery} className={styles.items}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Gallery <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                </Col>
                <Col span={3}>
                    <div className={styles.actionbtnWrapper}>
                        {
                            username ?
                                <Dropdown overlay={userMenu}>
                                    <div className={[styles.user, "profileClass"].join(" ")}>
                                        <p>Hi {Cookies.get("username")} <UserOutlined style={{marginLeft:'3px'}} /></p>
                                        
                                    </div>
                                </Dropdown>
                                :
                                <div>
                                    <Link href="/login"><a>Log In</a></Link>
                                    <span className={styles.actionDevider}>|</span>
                                    <Link href="/signup"><a>Sign Up</a></Link>
                                </div>}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;
