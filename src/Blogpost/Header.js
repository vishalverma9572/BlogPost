import React from 'react'

export default function Header() {
  const headerStyle = {
    backgroundColor: '#333333', // Light grey background color
    padding: '10px', // Adjust padding as needed
    textAlign: 'center', 
    borderBottomLeftRadius: '5px', 
    borderBottomRightRadius: '5px',
    // margin:'auto',
    // width:'70%',
    
  };

  const logoStyle = {
    color: '#ff7878', // Dark grey text color
    fontSize: '24px', // Adjust font size as needed
  };
  return (
    <header style={headerStyle}>
      <h1 style={logoStyle}>BlogPost</h1>
    </header>
  )
}
