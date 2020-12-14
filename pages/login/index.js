import React, { useState } from 'react';
import CustomLayout from '../../components/Layout/layout';
import { Row, Col, Form, Input, Button, Checkbox, Breadcrumb, message } from 'antd';
import { UserOutlined, LockOutlined, MailFilled, LockFilled } from '@ant-design/icons';
import styles from './login.module.css';
import Link from 'next/link';
import { login } from '../../services/login';
import Router from "next/router";
import Cookies from "js-cookie";
const expires = 7; // cookie expires in 7 days

const Login = () => {

    if(Cookies.get('jwt')){ // checking user logged in or not if logged in pushed to home page
        Router.push('/')
    }

    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [remember, setRemember] = useState(false);
    // const dispatch = useDispatchDetails();

    const setMail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const setPassword = (e) => {
        const password = e.target.value;
        setPassWord(password);
    };

    async function onSubmit(e) {
        try {
            const resp = await login({
                identifier: email,
                password: password,
            });
            const { jwt, user } = resp;
            console.log('resp', resp)
            if(user.role){
                Cookies.set("userrole", user.role.name, remember ? { expires } : {});
                Cookies.set("jwt", jwt, remember ? { expires } : {});
                Cookies.set("username", user.username, remember ? { expires } : {});
                localStorage.setItem("userData", JSON.stringify(user));
                // setCountlyUserInfo(user)
                Router.push("/dashboard");
            }else{
                //
            }
        } catch (err) {
            console.log(err);
            message.error("Please enter valid User name or password");
        }
    }

    return (
        <CustomLayout>
            <div style={{ fontFamily: 'Trebuchet MS", Helvetica, sans-serif' }}>
                <Row>
                    <Col span={24}>
                        <div>
                            <img src="/images/expartLove.jpg" alt="Banner" className={styles.imgBanner} />
                            <div className={styles.center}>
                                <h2>Sign In</h2>
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
                                onSubmit={onSubmit}
                                className={styles.formDiv}
                            >
                                <Form.Item
                                name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your username!',
                                        },
                                    ]}
                                >
                                    <Input
                                        onChange={(e) => setMail(e)}
                                        name="email"
                                        id="exampleEmail"
                                        prefix={<MailFilled className={styles.signinicon} />}
                                        placeholder="Email/User name"
                                        maxLength={80}
                                        className={styles.formInput}
                                    />
                                </Form.Item>

                                <Form.Item
                                name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your Password!',
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        onChange={(e) => setPassword(e)}
                                        name="password"
                                        prefix={<LockFilled className={styles.signinicon} />}
                                        placeholder="Password"
                                        maxLength={20}
                                        className={styles.formInput}
                                    />
                                </Form.Item>

                                <div className={styles.signbtn}>
                                    <Form.Item>
                                        <Checkbox
                                            checked={remember}
                                            onChange={(e) => setRemember(e.target.checked)}
                                            className={styles.checkbox}
                                        >
                                            Remember me
                                        </Checkbox>
                                    </Form.Item>

                                    <Form.Item>
                                        <div className={styles.signbtn}>
                                            <Button
                                                htmlType="submit"
                                                shape={"round"}
                                                onClick={onSubmit}
                                            >
                                                Login
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </CustomLayout>
    )
}

export default Login
