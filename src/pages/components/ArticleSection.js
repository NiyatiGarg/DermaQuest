import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";

function ArticleSection() {
  const { pageTheme, mustReadBlogs } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section
      className="d-flex flex-column "
      style={{ padding: "2vh 10vw 5vh 10vh", background: pageTheme }}
    >
      <h1
        className="justify-content-center my-5 text-center p-0"
        style={{ fontFamily: "cursive" }}
      >
        Must Read
      </h1>
      <div className="d-flex gap-4 overflow-scroll">
        {mustReadBlogs.map((blog) => (
          <div
            class=" card mb-3 d-flex flex-column p-3 gap-1"
            style={{ background: pageTheme, minWidth: '300px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}
          >
              <div class="">
                <img
                  src={blog.imageUrl}
                  class="img-fluid rounded-start"
                  alt="img"
                />
              </div>
              <div class="">
                <div class="">
                <h5 class="card-title fw-bold">{blog.title}</h5>
                <p className="card-text text-truncate" style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {blog.description}
                </p>
                <a 
                className="d-flex"
                style={{bottom: 0}}
                onClick={() => navigate(`/blog/${blog.key}`)}
                >
                Read More
                </a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticleSection;
