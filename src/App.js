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
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import DateObject from "react-date-object";
import NotFound from "./Blogpost/NotFound";

function App() {
  const navigate = useNavigate();
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Exploring the Enchanted Forest",
      datetime: "July 05, 2021 11:17:36 AM",
      body: "Embark on a magical journey through the enchanted forest, where ancient trees whisper secrets and mystical creatures roam freely. Discover hidden wonders and uncover the mysteries that lie beneath the emerald canopy.",
    },
    {
      id: 2,
      title: "Journey to the Galactic Nebula",
      datetime: "August 01, 2021 11:17:36 AM",
      body: "Venture into the depths of space and witness the breathtaking beauty of a galactic nebula. Gaze upon the swirling colors and cosmic wonders that paint the celestial canvas, as stars dance in harmony and galaxies collide.",
    },
    {
      id: 3,
      title: "The Art of Zen Gardening",
      datetime: "September 10, 2021 11:17:36 AM",
      body: "Immerse yourself in the serene world of Zen gardening, where each carefully placed rock and delicately raked pattern tells a story of balance and tranquility. Find peace in the simplicity of nature's beauty.",
    },
    {
      id: 4,
      title: "Epicurean Adventures: Culinary Delights",
      datetime: "July 15, 2011 09:17:36 AM",
      body: "Embark on a culinary journey filled with mouthwatering delights and exotic flavors. From the sizzling streets of Bangkok to the charming cafes of Paris, explore the diverse world of gastronomy and indulge in delectable creations.",
    },
    {
      id: 5,
      title: "Unveiling the Mysteries of Ancient Ruins",
      datetime: "January 30, 2020 10:17:36 PM",
      body: "Step back in time and unravel the secrets of ancient ruins that echo the tales of civilizations long gone. Roam through crumbling structures, decipher forgotten scripts, and marvel at the architectural wonders of bygone eras.",
    },{
    id: 6,
    title: "Chasing Waterfalls: Nature's Spectacle",
    datetime: "October 20, 2022 02:30:45 PM",
    body: "Embark on an adventurous journey to explore the mesmerizing beauty of waterfalls. Feel the mist on your face and hear the soothing sounds of cascading water as you discover nature's spectacular creations.",
  },
  {
    id: 7,
    title: "Sunset Serenity: Horizon of Colors",
    datetime: "March 12, 2023 06:45:00 PM",
    body: "Witness the breathtaking beauty of a sunset as the sky transforms into a canvas of vibrant colors. Experience the serenity of the golden hour and marvel at the artistry painted across the horizon.",
  },
  {
    id: 8,
    title: "Astral Adventures: Exploring the Cosmos",
    datetime: "June 25, 2023 09:00:12 AM",
    body: "Embark on a celestial journey through the vast cosmos. Discover distant galaxies, witness stellar phenomena, and contemplate the mysteries of the universe as you traverse the cosmic expanse.",
  },
  {
    id: 9,
    title: "Sculpting Dreams: Artistry in Ice and Snow",
    datetime: "December 05, 2022 03:15:30 PM",
    body: "Explore the magical world of ice and snow sculptures, where artists carve intricate masterpieces from frozen landscapes. Marvel at the ephemeral beauty of these frozen creations that come to life in winter's embrace.",
  },
  {
    id: 10,
    title: "Whispers of the Ocean: Seaside Symphony",
    datetime: "April 18, 2023 11:45:20 AM",
    body: "Listen to the gentle whispers of the ocean as waves dance along the shoreline. Feel the sandy embrace beneath your feet and immerse yourself in the symphony of seagulls, surf, and the eternal rhythm of the sea.",
  },
  ]);

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
    setShowposts(posts);
  }, [posts]);

  const handleDelete = (id) => {
    // const result=window.confirm('You really want to Delete?');
    // if(result){

    // }
    const postlists = posts.filter((post) => post.id !== id);
    setPosts(postlists);
    navigate("/");
  };

  const [FormData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleEdit=(id)=>{
    const post=posts.find((post)=>(post.id)===id)
    console.log(post);
    setFormData(post);
    navigate(`/editpost/${id}`)
    
  }
  const handleFormsave = (e) => {
    e.preventDefault();
    if(FormData.id){
      const id=Number(FormData.id)
      const datetime = new DateObject().format("MMMM D YYYY hh:mm:ss A").toString();
      // const newposts={id,title:FormData.title, datetime,body:FormData.body }
      const allposts=posts.map((post)=>
        post.id===id? ({...post,title:FormData.title,datetime,body:FormData.body}):post
      )
      
      setPosts(allposts)
      
      navigate(`/post/${id}`)
      setFormData({
        title:'',
        body:''
      })
    }
    else{
      if (FormData.title && FormData.body) {
        const id = posts.length?(posts[posts.length - 1].id + 1):1;
        const datetime = new DateObject().format("MMMM dd YYYY hh:mm:ss A").toString();
        console.log(id,datetime);
        const newpost={  id , title:FormData.title, datetime,body:FormData.body }
        const allposts = [...posts, newpost];
        setPosts(allposts);
        console.log(allposts);
        console.log(posts[0]);
        navigate(`/post/${id}`)
        setFormData({
          title:'',
          body:''
        })
      }
    }
  };


  return (
    <div className="App">
      <Header />
      <Nav setsearch={setsearch} search={search} handlesearch={handlesearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={posts}
              Showposts={Showposts}
              handleshowall={handleshowall}
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
            />
          }
        />
        <Route
          path="/post/:id"
          element={<Postpage posts={posts} handleDelete={handleDelete} handleEdit={handleEdit}/>}
        />
        <Route path='/editpost/:id' 
        element={<NewPost 
        FormData={FormData}
        handleFormsave={handleFormsave}
        setFormData={setFormData}/>}
        />
        <Route path="/mylist" element={<Content />} />
        <Route path='*'element={<NotFound/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
