import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { TbH2 } from "react-icons/tb";

function ArticleSection() {
  const { pageTheme, mustReadBlogs } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section
      className="d-flex flex-column responsive-margin"
      style={{ background: 'white' }}
    >
      <h2
        className="justify-content-center my-5 text-start, p-0"
        style={{  borderBottom: "1px solid black" }}
      >
        Frequently Asked Topics
      </h2>
      <div className="d-flex gap-4 overflow-scroll default-scrollbar">
        {mustReadBlogs.map((blog) => (
          <div
            className="card mb-3 d-flex flex-column p-3 gap-1 blog-cards"
            style={{
              background: pageTheme,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="d-flex">
              <img
                src={blog.imageUrl}
                className="d-flex card-img"
                alt="img"
              />
            </div>
            <div className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                <h5 className="card-title fw-bold two-line-text" style={{cursor: 'pointer'}} title={blog.title} >{blog.title}</h5>
              <div className="">
                <p
                  className="card-text three-line-text"
                  dangerouslySetInnerHTML={{
                    __html: blog.description.match(/<p[^>]*>(.*?)<\/p>/),
                  }}
                ></p>

                <a
                  className="d-flex justify-content-end"
                  style={{ bottom: 0 }}
                  onClick={() => navigate(`/blog/${blog.key}/${blog.title}`)}
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
