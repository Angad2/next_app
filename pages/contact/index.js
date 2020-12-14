import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import { Button, Divider, Card, Row, Col } from 'antd';
import CustomLayout from '../../components/Layout/layout';
import fetch from 'isomorphic-unfetch';
import { BASE_URL } from '../../services/config'
import { getMoviesQuery } from '../../services/getMoviesQuery'
import { userClientQuery } from '../../services/apollo'

const Contact = () => {

    const [movie, setMovie] = useState();

    const userClient = userClientQuery()
    const getMovies = getMoviesQuery()
    
    useEffect(() => {
        try {
            const responseData = userClient.query({
                query : getMovies
            }).then(res=>{
                console.log('ress',res.data)
                setMovie(res.data.movies)
            })
        } catch (error) {
            console.log(error)
        }
        return () => {
            //
        }
    }, [])
    console.log(movie)

    return (
        <CustomLayout>

            <div style={{ margin: '20px' }}>
                {
                    movie ? movie.map(el => (
                        <Card key={el.id} style={{width:'90%',margin:'auto',marginTop:'20px',borderRadius:'4px',boxShadow:'0px 0px 5px rgba(0,0,0,0.3);'}}>
                            <Row justify="space-between">
                                <Col span={11}>
                                    <div style={{textAlign:'justify'}}>
                                        <h3>{el.title}</h3>
                                        <p>{el.created}</p>
                                        <span>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                         Letraset sheets containing Lorem Ipsum passages, and more recently
                                         with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </span>
                                    </div>
                                </Col>
                                <Col span={11}>
                                    <div>
                                        {
                                            el.poster.map(each => (
                                                <img src={`${BASE_URL}${each.url}`} key={each.id} alt="image" height="250px" width="80%" />
                                            ))
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    )) : 
                    <div style={{textAlign:'center'}}>No Data Found</div>
                }
            </div>
        </CustomLayout>
    )
}

// export async function getServerSideProps() {

//     const res = await fetch(`${BASE_URL}/movies`)
//     const data = await res.json()

//     return {
//         props: {
//             movies: data
//         }
//     }
// }


export default Contact;
