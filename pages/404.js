import React from 'react'
import Head from 'next/head'
import { Result, Button } from 'antd';
import Router from 'next/router';

const custom404 = () => (
    <div>
        <Result
            status="404"
            title="Coming Soon"
            subTitle="Sorry, the page you visited does not exist. Work is in progress ..."
            extra={<Button type="primary" onClick={()=>Router.push('/')} style={{background:'#FF4F57',border:'none'}} shape="round" >Back Home</Button>}
        />
        <Head>
            <title>Coming Soon</title>
        </Head>
    </div>
)

export default custom404
