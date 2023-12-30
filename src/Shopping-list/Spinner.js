import React from 'react';
import loading from './Spinner-1s-200px.gif';

export default function Spinner({ text = 'Loading ...' }) {
  return (
    <>
      <img
        src={loading}
        style={{
          display: 'block',
          width: '10%',
          margin: 'auto',
          marginTop: '20vh',
        }}
        alt="Loading spinner"
      />
      <p
        style={{
          fontSize: '1.1rem',
          marginTop: '-8px',
          marginBottom: '30vh',
        }}
      >
        {text}
      </p>
    </>
  );
}
