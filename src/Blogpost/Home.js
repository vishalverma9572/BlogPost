import React,{useState} from 'react'
import Postcard from './Postcard'
import './Home.css'
import { Link } from 'react-router-dom';

export default function Home({posts,Showposts,handleshowall}) {
  
  // setShowposts(posts)
  // setShowposts(posts.filter((post) => post.title.toLowerCase().includes(Findme.trim().toLowerCase())));
  
  return (
    <>
    {Showposts!=posts && <div onClick={handleshowall} style={{display:'flex', margin:'10px auto', justifyContent:'center'}}><span style={{padding:'0.5em', border:'1.5px solid black', cursor:'pointer',borderRadius:'5px',color:'#ff7878',fontSize:'1.1rem',fontWeight:'500'}}>Clear Search</span></div>}
    <main>
      
      {Showposts.length>0 ?
      <>{Showposts.map((post)=>(
        <Postcard key={post.id} post={post}/>
      ))}</>
      :<p className='error-banner'>No Matching posts to Display</p>}
    </main>
    </>
  )
}
