import React,{useState} from 'react'
import Postcard from './Postcard'
import './Home.css'
import { Link } from 'react-router-dom';
import Spinner from '../Shopping-list/Spinner';

export default function Home({posts,Showposts,handleshowall,apierror,postloading}) {
  
  // setShowposts(posts)
  // setShowposts(posts.filter((post) => post.title.toLowerCase().includes(Findme.trim().toLowerCase())));
  
  return (
    <>
    {apierror !== 'fetch_post_error' ? (
      <React.Fragment key="fetch_post_error">
        {postloading && <Spinner/>}
        {Showposts !== posts && (
          <div
            onClick={handleshowall}
            style={{
              display: 'flex',
              margin: '10px auto',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                padding: '0.5em',
                border: '1.5px solid black',
                cursor: 'pointer',
                borderRadius: '5px',
                color: '#ff7878',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}
            >
              Clear Search
            </span>
          </div>
        )}
  
        <main>
          {Showposts.length > 0 ? (
            <>
              {Showposts.map((post) => (
                <Postcard key={post.id} post={post} />
              ))}
            </>
          ) : (
            <>
            {!postloading && <p className='error-banner'>No Matching posts to Display</p>}
            
            </>
          )}
        </main>
      </React.Fragment>
    ) : (
      <p key="fetch_post_error" className='error-banner'>
        FetchPost error. Please Reload
      </p>
    )}</>
  );
  
}
