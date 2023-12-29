// NotFound.js

import React from 'react';

const NotFound = () => {
  
  const notFoundStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
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
    <div style={notFoundStyle}>
      <h2 style={headingStyle}>404 Not Found</h2>
      <p style={paragraphStyle}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
