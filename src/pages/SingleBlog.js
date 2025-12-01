import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AppContext } from "../AppContext";

import Header from "./Header";
import Footer from "./Footer";

import { IoIosArrowBack } from "react-icons/io";

function SingleBlog() {
  const navigate= useNavigate();

  const { id, title } = useParams();

  const { allBlogs, isSmallScreen, contrastColor } = useContext(AppContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = allBlogs.find((item) => item.key === parseInt(id));
    setBlog(found);
  }, [id]);
  
  // Scroll to top when blog opens
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [id]);
  
  return (
    <>
      {!blog?
      <div className="d-flex align-items-center justify-content-center" style={{height: '60vh'}}>Loading...</div>
    :
    <div style={{  minHeight: '100vh' , gridTemplateColumns: '1fr 300px',}} className=" d-flex flex-column responsive-margin">
     <div className="d-flex gap-2">
      <div onClick={() => navigate('/blogs')} className="d-flex py-2 align-items-start " style={{fontSize: '2rem', color: contrastColor}}>
      <IoIosArrowBack  />
      </div>
     <h1 style={{color: contrastColor , textDecoration: 'underline'}}>{blog.title}</h1>

     </div>
        
        <div className="gap-4 d-flex">
          <div className="flex-grow-1 blog-text" style={{ textAlign: "start" , lineHeight: '2rem' }}
          dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>
          {blog.imageUrl &&
          <img
          src={blog.imageUrl}
          alt=""
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            objectFit: "cover",
            width: "100%",
            height: "300px",
            display: isSmallScreen ? 'none' : 'flex',
          }}
        />
        }
          
        </div>
      </div>
    }
      
     <Footer/>
    </>
  );
}

export default SingleBlog;
