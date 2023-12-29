import React from 'react'
import './Postcard.css'
import { Link } from 'react-router-dom'



export default function Postcard({post}) {
  const formattedDate = new Date(post.datetime).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  
  return (
    <div className="post-card">
      <Link to={`/post/${post.id}`}  style={{textDecoration:'none',color:'initial',paddingTop:'0.5em'}}>
      
      <h2 className="title">{post.title}</h2>
      <p className="datetime">{formattedDate}</p>
      <p className="description">{post.body.slice(0,75)+ (post.body.length>75? '...':'.')}</p>
    </Link>
    </div>
  )
}
