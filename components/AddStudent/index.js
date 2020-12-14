import React, { useState } from 'react';
import { Modal, Button, Form ,Input,DatePicker, message} from 'antd';
import { LockFilled ,MailFilled} from '@ant-design/icons';
import styles from './style.module.css';
import Cookies from 'js-cookie';
import {userClientQuery} from '../../services/apollo';
import { createStudent } from '../../services/createStudent';
import gql from 'graphql-tag';
import axios from 'axios';
import {BASE_URL} from '../../services/config'

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 5,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

const AddStudent = ({ showModal, loading, onCancel,fetchStudents }) => {
    const [fullname, setFullname] = useState();
    // const [lastname, setLastname] = useState();
    const [age, setAge] = useState();
    const [dob, setDob] = useState();
    const [std, setStd] = useState();
    const [city, setCity] = useState();
    const [form] = Form.useForm();
  

    // const onSubmit = () => {
    //     const jwt = Cookies.get('jwt');
    //     const userClient = userClientQuery(jwt)
    //     const createStudents = createStudent();
        // const createStudents = gql`
        // mutation createStudents($firstname : String!, $lastname : String!, $age:Int!, $dob:Date!, $std:String!, $city:String!){
        //     createStudent(input: {data: { firstname: ${firstname}, lastname: ${lastname}, age: ${age}, dob: ${dob}, std: ${std},city: ${city}}}){
        //       student{
        //         id
        //         firstname
        //         lastname
        //       }
        //     }
        //   }
        // `;

    //     const getData = userClient.mutate({
    //         mutation: createStudents,
    //         fetchPolicy: 'no-cache',
    //         variables:{
    //             input:{
    //                 firstname,
    //                 lastname,
    //                 age,
    //                 dob,
    //                 std,
    //                 city
    //             }
    //         }
    //     }).then(res=>{
    //         console.log(res)
    //     })
    //     console.log('dob',dob)
    //     form.resetFields();
    //     onCancel()
    // }

    const onSubmit = () =>{
        axios.post(`${BASE_URL}/students`,{
            fullname,
            age,
            dob,
            std,
            city
        }).then(res=>{
            if(res.status == 200){
                message.success('Student details added successfully,!!')
            }else{
                message.error('Something went wrong, Please check ')
            }
        })
        form.resetFields();
        onCancel();
        fetchStudents();
    }

    return (
        <Modal
            title="Add Students"
            width="600px"
            visible={showModal}
            onCancel={onCancel}
            footer={[
                <Button onClick={onCancel} shape="round">Cancel</Button>,
                <Button
                    loading={loading}
                    onClick={onSubmit}
                    type="primary"
                    shape="round"
                    style={{
                        background: '#FF4F57',
                        color: '#fff',
                        border: 'none'
                    }}
                >
                    Save
                    </Button>
            ]}
        >
            <Form
                // onSubmit={onSubmit}
                className={styles.formDiv}
                {...formItemLayout}
                form={form}
            >
                <Form.Item
                    name="fullname"
                    label="Full Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your name !',
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => setFullname(e.target.value)}
                        name="fullname"
                        prefix={<MailFilled className={styles.signinicon} />}
                        placeholder="Full Name"
                        maxLength={80}
                        className={styles.formInput}
                    />
                </Form.Item>

                {/* <Form.Item
                    name="lastname"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your lastname!',
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => setLastname(e.target.value)}
                        name="lastname"
                        prefix={<LockFilled className={styles.signinicon} />}
                        placeholder="Last Name"
                        maxLength={20}
                        className={styles.formInput}
                    />
                </Form.Item> */}
                <Form.Item
                    name="age"
                    label="Age"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your age!',
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => setAge(e.target.value)}
                        name="age"
                        prefix={<LockFilled className={styles.signinicon} />}
                        placeholder="Age"
                        // maxLength={20}
                        className={styles.formInput}
                    />
                </Form.Item>

                <Form.Item
                    name="dob"
                    label="Date of birth"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your dob!',
                        },
                    ]}
                >
                    {/* <Input
                        onChange={(e) => setDob(e.target.value)}
                        name="dob"
                        prefix={<LockFilled className={styles.signinicon} />}
                        placeholder="Date of birth"
                        maxLength={20}
                        className={styles.formInput}
                    /> */}
                    <DatePicker className={styles.formInput} onChange={(date, dateString) => setDob( dateString)} />
                </Form.Item>
                <Form.Item
                    name="std"
                    label="Class"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your class!',
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => setStd(e.target.value)}
                        name="std"
                        prefix={<LockFilled className={styles.signinicon} />}
                        placeholder="Class Name"
                        // maxLength={20}
                        className={styles.formInput}
                    />
                </Form.Item>

                <Form.Item
                    name="city"
                    label="City"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your city!',
                        },
                    ]}
                >
                    <Input
                        onChange={(e) => setCity(e.target.value)}
                        name="city"
                        prefix={<LockFilled className={styles.signinicon} />}
                        placeholder="City"
                        maxLength={20}
                        className={styles.formInput}
                    />
                </Form.Item>

                {/* <div className={styles.signbtn}>
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
                </div> */}
            </Form>

        </Modal>
    )
}

export default AddStudent
