import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Admin'
import { Tabs, Typography, Row, Col, Button, Modal,Table,Divider  } from 'antd';
import TeacherTable from '../../components/TeacherTable';
import AddStudent from '../../components/AddStudent';
import Cookies from 'js-cookie';
import {userClientQuery} from '../../services/apollo';
import { getStudents } from '../../services/createStudent';

const { TabPane } = Tabs;

const Teachers = () => {

    const [showModal, setShowModal] = useState(false);
    const [ loading , setloading ] = useState(false);
    const [studentsInfo, setStudentsInfo] = useState([]);

    function callback(key) {
        console.log(key);
    }

    const onModalShow = () => {
        setShowModal(true)
    }

    const onCancell = () =>{
        setShowModal(false)
    }

    const jwt = Cookies.get('jwt');
    const userClient = userClientQuery();
    const getStudent = getStudents();

    const fetchStudents = () =>{
        try {
            const responseData = userClient.query({
                query : getStudent,
                fetchPolicy: 'no-cache',
            }).then(res=>{
                setStudentsInfo(res.data.students)
            })
            
        } catch (error) {
            console.log(error)
        }
        return () => {
            //
        }
    }

    useEffect( () => {
        fetchStudents()
    }, [])

    return (
        <Layout>
            <div style={{ margin: '10px' }}>
                <Row justify="space-between">
                    <Col>
                        <div>
                            <Typography.Title level={2}>Teachers</Typography.Title>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ margin: '10px' }}>
                            <Button
                                onClick={onModalShow}
                                shape="round"
                                style={{ background: '#FF4F57',
                                    color: '#fff', 
                                    border: 'none' 
                                }}
                            >
                                Add Teacher
                        </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Students" key="1">
                    <TeacherTable studentsInfo={studentsInfo} />
                </TabPane>
                <TabPane tab="Maintenance" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>

            <AddStudent showModal={showModal} loading={loading} onCancel={onCancell} fetchStudents={fetchStudents}/>
        </Layout>
    )
}

export default Teachers;
