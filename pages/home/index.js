import React from 'react'
import Contact from '../contact';
import Link from 'next/link';
import { Button,Divider,Carousel  } from 'antd';
import CustomLayout from '../../components/Layout/layout';
import styles from './home.module.css';
import ServiceCard from '../../components/ServiceCard';
import FacultyMemberList from '../../components/FacultyMemberList';

function Home() {
    return (
        <CustomLayout>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" dots={true}>
                <div className={styles.imgContainer}>
                <img src="/images/homeHeader.jpg" />
                <div className={styles.center}>
                    <h2>EXCELLENT AND FRIENDLY FACULTY MEMBERS</h2>
                    <Button type="primary" shape="round" className={styles.centerBtn}><Link href="/about" ><a>About Us</a></Link></Button>
                </div>
                </div>
                <div className={styles.imgContainer}>
                <img src="/images/s2.jpg" />
                <div className={styles.center}>
                    <h2>EXCELLENT AND FRIENDLY FACULTY MEMBERS</h2>
                    <Button type="primary" shape="round" className={styles.centerBtn}><Link href="/about" ><a>About Us</a></Link></Button>
                </div>
                </div>
                <div className={styles.imgContainer}>
                <img src="/images/s3.jpg" />
                <div className={styles.center}>
                    <h2>EXCELLENT AND FRIENDLY FACULTY MEMBERS</h2>
                    <Button type="primary" shape="round" className={styles.centerBtn}><Link href="/about" ><a>About Us</a></Link></Button>
                </div>
                </div>
                <div className={styles.imgContainer}>
                <img src="/images/s4.jpg" />
                <div className={styles.center}>
                    <h2>EXCELLENT AND FRIENDLY FACULTY MEMBERS</h2>
                    <Button type="primary" shape="round" className={styles.centerBtn} ><Link href="/about" ><a>About Us</a></Link></Button>
                </div>
                </div>
                <div className={styles.imgContainer}>
                <img src="/images/s6.jpg" />
                <div className={styles.center}>
                    <h2>EXCELLENT AND FRIENDLY FACULTY MEMBERS</h2>
                    <Button type="primary" shape="round" className={styles.centerBtn}><Link href="/about" ><a>About Us</a></Link></Button>
                </div>
                </div>
          </Carousel>
            <div className={styles.ServiceCard}>
                <ServiceCard />
            </div>
            <Divider style={{margin:'0'}}></Divider>
            <div className={styles.ServiceCard}>
                <FacultyMemberList />
            </div>
          
            
            
        </CustomLayout>
    )
}

export default Home
