import React,{useEffect, useState} from 'react';
import Link from 'next/link';
import { Button,Divider, Row ,Col,Spin} from 'antd';
import CustomLayout from '../../components/Layout/layout';
import styles from './about.module.css';

const About = ({posts}) =>{
    const [loader,setLoader] = useState(false);

    const onClickTitle = () =>{
        setLoader(true);
    }
    // console.log(posts)
    return (
        <CustomLayout>
            <Spin spinning={loader} className={styles.loaderSpin} size="large">
            <div>
                <Row justify="center">
                    <Col>
                        {/* <h1>About Page</h1> */}
                        <img src="/images/homeHeader.jpg" height="450" width="100%"/>
                    </Col>
                </Row>
                {/* <Divider></Divider> */}
            </div>
            <div style={{background:'#fff'}}>
                <Row justify="center">
                    <Col>
                        <div style={{textAlign:'center',margin:'30px 0'}}>
                            <h2>Bright was established in 2009</h2>
                            <p>Headquartered in Utah, USA, we have development centers in Sweden & India</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{background:'#fff'}}>
                <Row justify="center">
                    <Col>
                        <img src="/images/map_img.jpg" height="450" width="100%"/>
                    </Col>
                </Row>
            </div>
            <div style={{paddingLeft:'50px',marginTop:'30px',fontFamily:'"Comic Sans MS", cursive, sans-serif'}}>
                {
                    posts.map((item)=>(
                        <div key={item.id}>
                           <h2 style={{textTransform:'capitalize'}}><Link href="/about/[postId]" as={`/about/${item.id}`}>
                               <a onClick={onClickTitle}>{item.title}</a></Link></h2> 
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
            </Spin>
        </CustomLayout>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return{
        props:{
            posts,
        },
    }
}

// export async function getServerSideProps(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json();

//     return{
//         props:{
//             posts,
//         },
//     }
// }
export default About
