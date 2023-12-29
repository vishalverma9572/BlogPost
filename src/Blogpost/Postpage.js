import React from 'react'
import './PostPage.css';
import { useParams,Link } from 'react-router-dom';
import Spinner from '../Shopping-list/Spinner';


export default function Postpage({posts,handleDelete,handleEdit,apierror,postloading}) {
  const {id}= useParams()
  
  const post=posts.find((post)=> (post.id).toString()==id);
  
  return (
    <>
    {apierror !== 'fetch_post_error' ? (
      <React.Fragment key="postpage_error">
    {(post? (<div className="post-page">
    <h2>&#x21aa;&nbsp;{post.title}</h2>
    <p>{post.datetime}</p>
    <div className="post-content">
      
      <p>{post.body}</p>
    </div>

    <div>
      <button onClick={()=>handleDelete(post.id)} >Delete</button>
      
      <button onClick={()=>{
        handleEdit(post.id)
      }} >&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp; 

      </button>
      
    </div>
  </div>):<>
  {!postloading &&<>
  <Link to={'/'}  style={{display:'flex', margin:'10px auto', justifyContent:'center',textDecoration:'none'}}><span style={{padding:'0.8em', border:'1.5px solid black', cursor:'pointer',borderRadius:'5px',color:'#ff7878',fontSize:'1.1rem',fontWeight:'500',textDecoration:'none'}}>Show All Posts</span></Link>
  <p className='error-banner'>Post Not Found</p></>
  }
  {postloading && <Spinner/>}
  </>)}
  </React.Fragment>
    ) : (
      <p key="fetch_post_error" className='error-banner'>
        FetchPost error. Please Reload
      </p>
    )}</>
  )
}
