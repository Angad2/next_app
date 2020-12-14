import React from 'react';
import {Row,Col, Card } from 'antd';
import style from './facultyMemberList.module.css'

const FacultyMemberList = () => {
    const { Meta } = Card;
    return (
        <div>
            <h1 style={{fontWeight:'bolder',textAlign:'center',fontSize:'30px',paddingBottom:'20px'}}>FEATURED FACULTY MEMBERS</h1>
            <Row gutter={[0,20]} justify="center">
                <Col span={6}>
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="350" />}
            >
                <div><h1>Julia Benjama</h1></div>
                <div><h3>Math Teacher</h3></div>
                <div><p style={{justifyContent:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
                
            </Card>
            </Col>
            <Col span={6}>
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="350"/>}
            >
                <div><h1>Julia Benjama</h1></div>
                <div><h3>Math Teacher</h3></div>
                <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
                
            </Card>
            </Col>
            <Col span={6}>
            <Card
                className={style.card}
                hoverable
                style={{ width: 320 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="350"/>}
            >
                <div><h1>Julia Benjama</h1></div>
                <div><h3>Math Teacher</h3></div>
                <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
                
            </Card>
            </Col>
            </Row>
        </div>
    )
}

export default FacultyMemberList
