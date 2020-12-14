import React, { useState } from 'react';
import CustomLayout from '../../components/Layout/layout';
import {Row,Col ,Form, Input, Button, Checkbox ,Breadcrumb} from 'antd';
import { UserOutlined, LockOutlined,MessageOutlined,PhoneOutlined } from '@ant-design/icons';
import styles from './Signup.module.css';
import Link from 'next/link';

const Signup = () => {

    const [rememberCheck,setRememberCheck] = useState(false);

    const onFinish = (value) =>{
        console.log(value)
    }

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      }
    return (
        <CustomLayout>
            <div style={{fontFamily:'Trebuchet MS", Helvetica, sans-serif'}}>
                <Row>
                    <Col span={24}>
                        <div>
                            <img src="/images/expartLove.jpg" alt="Banner" className={styles.imgBanner}/>
                            <div className={styles.center}>
                                <h2>Sign Up</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{background:'#fff'}}>
                <Row justify="center">
                    <Col span={12} offset={2} className={styles.mainDiv}>
                        <div className={styles.loginDiv}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            className={styles.formDiv}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            >
                            <Form.Item
                                name="firstname"
                                validateStatus="error"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname!',
                                },
                                ]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    className={styles.formInput} 
                                    placeholder="Enter your firstname" 
                                />
                            </Form.Item>
                            <Form.Item
                                name="lastname"
                                validateStatus="error"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Last Name!',
                                },
                                ]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    className={styles.formInput} 
                                    placeholder="Enter your lastname" 
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                validateStatus="error"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                ]}
                            >
                                <Input 
                                    prefix={<MessageOutlined className="site-form-item-icon" />} 
                                    className={styles.formInput} 
                                    placeholder="Enter your email" 
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                validateStatus="error"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    className={styles.formInput}
                                />
                            </Form.Item>
                            <Form.Item
                                name="cpassword"
                                validateStatus="error"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Confirm Password!',
                                },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Please enter your confirm password"
                                    className={styles.formInput}
                                />
                            </Form.Item>
                            <Form.Item
                                name="phonenumber"
                                validateStatus="error"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone Number!',
                                },
                                ]}
                            >
                                <Input
                                    prefix={<PhoneOutlined className="site-form-item-icon" />}
                                    type="number"
                                    placeholder="Please enter your Phone Number"
                                    className={styles.formInput}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                                    Sign Up
                                </Button>

                                <Button type="primary" className={styles.loginBtn}>
                                    <Link href="/login"><a>Sign In</a></Link>
                                </Button>
                            </Form.Item>
                        </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </CustomLayout>
    )
}

export default Signup
