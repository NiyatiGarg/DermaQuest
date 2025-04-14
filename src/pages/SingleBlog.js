import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../AppContext";

import Header from "./Header";

function SingleBlog() {
  const { id, title } = useParams();

  const { mustReadBlogs } = useContext(AppContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = mustReadBlogs.find((item) => item.key === parseInt(id));
    setBlog(found);
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div style={{ margin: "10vh 10vw", minHeight: '100vh' , gridTemplateColumns: '1fr 300px',}} className="gap-5 d-flex flex-column">
        <h1>{blog.title}</h1>
        <div className="d-flex gap-4">
          <p className=" d-flex flex-grow-1" style={{ textAlign: "justify" , lineHeight: '2rem' }}>
            {blog.description}
          </p>
          <img
            src={blog.imageUrl}
            alt=""
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              objectFit: "cover",
              width: "300px",
              height: "300px",
              display:'block',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
