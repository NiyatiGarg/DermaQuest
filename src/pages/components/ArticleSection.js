import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import './ArticleSection.css';

function ArticleSection() {
  const { pageTheme, mustReadBlogs } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section className="articles-section">
      <div className="articles-container">
        <div className="section-header">
          <FaBookOpen className="section-icon" />
          <h2 className="section-title">Popular Articles</h2>
          <p className="section-subtitle">
            Discover expert insights and tips for your skincare journey
          </p>
        </div>

        <div className="articles-grid">
          {mustReadBlogs.map((blog) => (
            <article 
              className="article-card"
              onClick={() => navigate(`/blog/${blog.key}/${blog.title}`)}
              style={{
                '--hover-color': pageTheme
              }}
            >
              <div className="article-image-wrapper">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="article-image"
                />
                <div className="image-overlay">
                  <FaArrowRight className="read-more-icon" />
                </div>
              </div>

              <div className="article-content">
                <h3 className="article-title" title={blog.title}>
                  {blog.title}
                </h3>
                
                <div 
                  className="article-preview"
                  dangerouslySetInnerHTML={{
                    __html: blog.description.match(/<p[^>]*>(.*?)<\/p>/),
                  }}
                />

                <div className="article-footer">
                  <span className="read-more-text">Read Full Article</span>
                  <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
