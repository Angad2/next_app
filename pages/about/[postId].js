import React from 'react';
import { useRouter } from 'next/router';
import CustomLayout from '../../components/Layout/layout';

const Post = ({posts}) =>{

    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

//    console.log(posts)
    return (
        <CustomLayout style={{padding:'20px 20px',marginTop:'30px'}}>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
        </CustomLayout>
    )
}

// export async function getServerSideProps({query}){
//     const {postId} = query;

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const posts = await res.json();

//     return{
//         props:{
//             posts,
//         },
//     }
// }

export async function getStaticPaths() {
    const paths = ["/about/1","/about/2","/about/3"];


    return { paths, fallback: true }
  }

export async function getStaticProps({query,params}){
    const {postId} = query || params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const posts = await res.json();

    return{
        props:{
            posts,
        },
    }
}

export default Post
