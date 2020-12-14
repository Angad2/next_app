import React from 'react';
import { Layout as AntLayout , Divider, Col, Row } from 'antd';
const { Content } = AntLayout;
import Header from '../Header';
import Footer from '../Footer';
import styles from './layout.module.css';
import Link from 'next/link'

const Layout = (props) => {
    return (
        <AntLayout className={styles.fontfamily}>
            <Header />
            <Content>
                {props.children}
            </Content>
            <Divider className={styles.divi} style={{ borderColor: '#d9d9d9', marginBottom: '10px',margin: '0px'  }}/>
            <Footer />
            <Divider  className={styles.divi} style={{ borderColor: '#d9d9d9',backgroundColor:"#fff", margin: '0px'  }}/>
            <Row justify="center" style={{background:'#061a2d',paddingTop:'10px'}}>
                <Col span={18} className={styles.footerText}>
                    <AntLayout.Footer>© Bright Tech. All rights reserved 2020</AntLayout.Footer>

                    <div className={styles.socialImg}>
                        <ul>
                            <Link href="#"><a><li><img src="/images/facebook.png" alt="" /></li></a></Link>
                            <li><img src="/images/indeed.png" alt="" /></li>
                            <li><img src="/images/twitter.png" alt="" /></li>
                            <li><img src="/images/gPlus.png" alt="" /></li>
                            <li><img src="/images/youtube.png" alt="" /></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </AntLayout>
    )
}

export default Layout
