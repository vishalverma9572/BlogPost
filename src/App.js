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
          post.body.toLowerCase().includes(search.trim().toLowerCase())
        )
      );
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
  const handleFormsave = (e) => {
    e.preventDefault();
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
          element={<Postpage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/mylist" element={<Content />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
