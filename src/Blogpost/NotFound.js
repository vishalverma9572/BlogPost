// NotFound.js

import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navigate=useNavigate()
  const notFoundStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '67vh',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#666',
  };

  return (
    <>
    <div style={notFoundStyle}>
      <h2 style={headingStyle}>404 Not Found</h2>
      <p style={paragraphStyle}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
    <div
            onClick={()=>{
              navigate('/')
            }}
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
              Go To Home
            </span>
          </div>
    </>
  );
};

export default NotFound;
