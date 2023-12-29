import "./App.css";
import React, { useState, useEffect } from "react";
import Content from "./Shopping-list/Content";
import Header from "./Blogpost/Header";
import Nav from "./Blogpost/Nav";
import Home from "./Blogpost/Home";
import Footer from "./Blogpost/Footer";
import NewPost from "./Blogpost/NewPost";
import Postpage from "./Blogpost/Postpage";
import About from "./Blogpost/About";
import { Route, Routes, useNavigate } from "react-router-dom";
import DateObject from "react-date-object";
import NotFound from "./Blogpost/NotFound";
import api from './api/Postsrequest'

function App() {
  const navigate = useNavigate();
  const [apierror, setapierror] = useState(null)
  const [postloading, setpostloading] = useState(true)
  
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchposts= async()=>{
      try{
        const response= await api.get('/posts')
        // console.log(response.data)
        // console.log(response);
        // you can handle and throw error but axios do it by own so
        // if(response.statusText==='OK') setPosts(response.data);
        setPosts(response.data);
        setpostloading(false);
        
      }catch(err){
        setpostloading(false);
        setapierror('fetch_post_error')
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
        
      }
    }

    setTimeout(fetchposts,2000)
  },[])

  const [search, setsearch] = useState("");
  
  const handleshowall = () => {
    setShowposts(posts);
  };
  const handlesearch = (e) => {
    e.preventDefault();
    if (search != "")
      setShowposts(
        posts.filter((post) =>
          post.body.toLowerCase().includes(search.trim().toLowerCase())||post.title.toLowerCase().includes(search.trim().toLowerCase())
        )
      );
      navigate('/')
    setsearch("");
  };
  const [Showposts, setShowposts] = useState(posts);
  useEffect(() => {
    // console.log(posts)
    setShowposts(posts);
  }, [posts]);

  const handleDelete = async (id) => {
    try {
      const postlists = posts.filter((post) => post.id !== id);
      const response= await api.delete(`/posts/${id}`)
      if(apierror==='Delete_error') setapierror(null)
      setPosts(postlists);
      navigate("/");
      
    } catch (error) {
      setapierror('Delete_error')
    }
  };

  const [FormData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleEdit=(id)=>{
    const post=posts.find((post)=>(post.id)===id)
    
    setFormData(post);
    navigate(`/editpost/${id}`)
    
  }
  const handleFormsave = async(e) => {
    e.preventDefault();
    if((FormData.id) && (FormData.title) && (FormData.body)){
      const id=Number(FormData.id)
      const datetime = new DateObject().format("MMMM D YYYY hh:mm:ss A").toString();
      // const newposts={id,title:FormData.title, datetime,body:FormData.body }
      const allposts=posts.map((post)=>
        post.id===id? ({...post,title:FormData.title,datetime,body:FormData.body}):post
      )
      try{
        const updatedpost={id,title:FormData.title,datetime,body:FormData.body}
        const response= await api.put(`/posts/${id}`,updatedpost);
        if(apierror==='edit_error') setapierror(null)
        setPosts(allposts)
        
        navigate(`/post/${id}`)
        setFormData({
          title:'',
          body:''
        })
      }catch{
        setapierror('edit_error');
      }
    }
    else{
      if (FormData.title && FormData.body) {
        const id = posts.length?(posts[posts.length - 1].id + 1):1;
        const datetime = new DateObject().format("MMMM D YYYY hh:mm:ss A").toString();
        
        const newpost={  id , title:FormData.title, datetime,body:FormData.body }
        try{
          const response= await api.post('/posts',newpost)
          const allposts = [...posts, response.data];
          if(apierror==='newpost_error') setapierror(null)
          setPosts(allposts);
          navigate(`/post/${id}`)
          setFormData({
            title:'',
            body:''
          })
        }catch(error){
          setapierror('newpost_error')
        }
        
        
        
      }
    }
  };


  return (
    <div className="App">
      <Header />
      <Nav setsearch={setsearch} search={search} handlesearch={handlesearch} FormData={FormData}/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={posts}
              Showposts={Showposts}
              handleshowall={handleshowall}
              apierror={apierror}
              postloading={postloading}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/newpost"
          element={
            <NewPost
              FormData={FormData}
              handleFormsave={handleFormsave}
              setFormData={setFormData}
              apierror={apierror}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<Postpage posts={posts} postloading={postloading} handleDelete={handleDelete} apierror={apierror} handleEdit={handleEdit}/>}
        />
        <Route path='/editpost/:id' 
        element={<NewPost 
        FormData={FormData}
        handleFormsave={handleFormsave}
        setFormData={setFormData} apierror={apierror}/>}
        />
        <Route path="/mylist" element={<Content />} />
        <Route path='*'element={<NotFound/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
