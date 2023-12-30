import React,{useState,useEffect} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import './Nav.css'

const Nav = ({search, setsearch,handlesearch,FormData}) => {
  const navigate=useNavigate();
  const navStyle = {
    marginTop: '10px',
    backgroundColor: '#333', // Dark background color
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position:'sticky',
    top:'5px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    marginRight: '20px',
    paddingBottom:'5px'
  };

  const linkStyle = {
    color: '#fff', // White text color
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.25s',
    paddingBottom:'5px'
     // Smooth transition for color change
  };

  const formStyle = {
    marginTop: '10px',
    width:"35%",
  };

  const inputStyle = {
    padding: '6px',
    marginRight: '10px',
    width:'90%',
    borderRadius: '5px',
    position:'relative',
    top:'-4px',
    fontSize:'1.05rem',
    border: 'none',
  };

  

  const location=useLocation();
  //To Handle same page for Edit and create post
  const editpostregex=/^\/editpost\/.*$/;
  const postpageregex=/^\/post\/.*$/;

  // adding Border bottom to current page
  useEffect(() => {
    const allMenuItems = document.querySelectorAll('nav li a');
    allMenuItems.forEach((item) => {
      item.style.borderBottom = 'none';
      item.style.color = linkStyle.color; // Reset to default color
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if(location.pathname==='/'){
      document.title="Home | BlogPost"
      document.querySelector('.homeli').style.borderBottom = '2px solid #ff7878';
      document.querySelector('.homeli').style.color = '#ff7878';

    }
    else if(location.pathname==='/about'){
      document.title="About | BlogPost"
      document.querySelector('.aboutli').style.borderBottom = '2px solid #ff7878';
      document.querySelector('.aboutli').style.color = '#ff7878';
    }
    else if(location.pathname==='/newpost'){
      document.title="Create Post | BlogPost"
      document.querySelector('.newpostli').style.borderBottom = '2px solid #ff7878';
      document.querySelector('.newpostli').style.color = '#ff7878';
    }
    else if(location.pathname==='/mylist'){
      document.title="MyList | BlogPost"
      document.querySelector('.toDoli').style.borderBottom = '2px solid #ff7878';
      document.querySelector('.toDoli').style.color = '#ff7878';
    }
    else if(editpostregex.test(location.pathname)){
      document.title="EditPage | BlogPost"
      if(!(location.pathname.slice(10))){
          navigate('/')
      }
      else if((location.pathname.slice(10))&&(!FormData.title)){
        navigate(`/post/${location.pathname.slice(10)}`)
      }
      
    }
    else if(postpageregex.test(location.pathname)){
      document.title="PostPage | BlogPost"
      
    }
    
  }, [location.pathname])
  
  
  return (
    <nav style={navStyle}>

      <ul style={ulStyle}>
        <li style={liStyle}   ><Link to="/" className='homeli' style={linkStyle} >Home</Link></li>
        <li style={liStyle}  ><Link to="/newpost"  className='newpostli'  style={linkStyle} >NewPost</Link></li>
        <li style={liStyle}  ><Link to="/about" className='aboutli' style={linkStyle} >About</Link></li>
        <li style={liStyle}  ><Link to="/mylist" style={linkStyle} className='toDoli' >ToDoLists</Link></li>
      </ul>

      <form style={formStyle} onSubmit={handlesearch}>
        <input type="text" placeholder="Search" style={inputStyle} value={search} onChange={(e)=>setsearch(e.target.value)} />
        
      </form>
    </nav>
  );
};

export default Nav;
