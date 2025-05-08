import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../AppContext";

import Header from "./Header";
import Footer from "./Footer";


function SingleBlog() {
  const { id, title } = useParams();

  const { allBlogs, isSmallScreen, contrastColor } = useContext(AppContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = allBlogs.find((item) => item.key === parseInt(id));
    setBlog(found);
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div style={{  minHeight: '100vh' , gridTemplateColumns: '1fr 300px',}} className=" d-flex flex-column responsive-margin">
        <h1 style={{color: contrastColor, paddingTop: '4rem' }}>{blog.title}</h1>
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
     <Footer/>
    </>
  );
}

export default SingleBlog;
