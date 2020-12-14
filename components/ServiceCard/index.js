import React from 'react';
import {Row,Col} from 'antd';
import styles from './serviceCard.module.css'

const ServiceCard = () =>{
    return (
        <div className={styles.container}>
            <Row justify="center" align="middle">
                <Col span={10}>
                    <div>
                        <h1 className={styles.headerText}>Welcome To Bright University</h1>
                        <p className={styles.pText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Imran</p>
                    </div>
                    <div style={{marginTop:'50px'}}>
                        <Row>
                            <Col span={12}>
                            <div className={styles.findExperts}>
                                <div className={styles.findImage}>
                                    <img src="/images/d4.png" alt="hire-expert" className={styles.imgFl} />
                                </div>
                                <div className={styles.textContainer}>
                                    <h2>Skilled Professors</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.findExperts}>
                                <div className={styles.findImage}>
                                    <img src="/images/d5.png" alt="hire-expert" className={styles.imgFl} />
                                </div>
                                <div className={styles.textContainer}>
                                    <h2>Well Equipped Labs</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae.
                                    </p>
                                </div>
                            </div>
                            </Col>
                            <Col span={12}>
                            <div className={styles.findExperts}>
                                <div className={styles.findImage}>
                                    <img src="/images/d6.png" alt="hire-expert" className={styles.imgFl}/>
                                </div>
                                <div className={styles.textContainer}>
                                    <h2>Best Infrastructure</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.findExperts}>
                                <div className={styles.findImage}>
                                    <img src="/images/d3.png" alt="hire-expert" className={styles.imgFl} />
                                </div>
                                <div className={styles.textContainer}>
                                    <h2>Big Library</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quaerat beatae.
                                    </p>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={1}></Col>
                <Col span={9}>
                    <div className={styles.serviceImgDiv}>
                    <img src="/images/s4.jpg" alt="find-expert" className={styles.cardImg}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ServiceCard;
