

import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '50px',
    
    width: '96% !important ',
   
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 BlogPost. All rights reserved.</p>
      <p>Designed with ❤️ by Vishal</p>
    </footer>
  );
};

export default Footer;
