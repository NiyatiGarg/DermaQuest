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
        <div className="gap-4 d-flex">
          <div className="flex-grow-1" style={{ textAlign: "start" , lineHeight: '2rem' }}
          dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>
          <img
            src={blog.imageUrl}
            alt=""
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              objectFit: "cover",
              width: "300px",
              height: "300px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
