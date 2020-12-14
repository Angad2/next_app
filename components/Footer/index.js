import React from 'react';
import { Layout, Col, Row, Typography, Divider } from 'antd';
import Link from 'next/link';
import styles from './footer.module.css';

const { Title } = Typography;

const footerData = [
  {
    title: 'Compnany info',
    links: [
      ['About', '/about'],
      ['Careers', '/careers'],
      ['Press', '/press'],
      ['Blog', '/blog'],
    ],
  },
  {
    title: 'Customers',
    links: [
      ['How to use Bright Tech', '/howtouse'],
      ['Sign Up', '/register'],
      ['Get the app', '/get/the/app'],
      ['Services near me', '/nearme'],
      ['Cost Estimates', '/Estimates'],
      ["Project how to's", '/howto'],
      ['Project guides', '/guides'],
      ['Questios and answers', '/qanda'],
    ],
  },
  {
    title: 'Expert',
    links: [
      ['Bright Tech for expert', '/expert'],
      ['Sign up as an expert', '/expert'],
      ['Community', '/community'],
      ['Success stories', '/stories'],
      ['Pro reviews', '/reviews'],
      ['iPhone app for experts', '/iphone'],
      ['Android app for experts', '/android'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['Help', '/help'],
      ['Safety', '/safety'],
      ['Terms of Use', '/tos'],
      ['Privacy Policy', '/privacy'],
      ['Do Not Sell My Info', '/dnd'],
    ],
  },
];

const Footer = (props) => {
  const links = (data) => (
    <>
      {data.map((sec, index) => (
        <Col span={4} className={styles.footerLink} key={index}>
          <Title level={3} style={{color:'#fff'}}>{sec.title}</Title>
          {sec.links.map((el,i) => (
            <Link href={el[1]} key={i}>
              <a>{el[0]}</a>
            </Link>
          ))}
        </Col>
      ))}
    </>
  );

  return (
    <div className={styles.footLead}>
      <Layout.Footer>
        {/* <br />   */}
        <Row justify="center">{links(footerData)}</Row>
      </Layout.Footer>
    </div>
  );
};

export default Footer;
