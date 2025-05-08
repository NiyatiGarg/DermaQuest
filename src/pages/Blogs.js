import React , {useContext, useState, useEffect} from 'react';

import { AppContext } from '../AppContext';
import { useNavigate } from "react-router-dom";
import Header from './Header';

// import Icofont from 'react-icofont';
import { FaSearch } from "react-icons/fa";
import Footer from './Footer';


function Blogs() {

  const { pageTheme, allBlogs, contrastColor} = useContext(AppContext);
  const [inputValue, setInputValue]= useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

  const navigate = useNavigate();
  
  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }

  useEffect(() => {
    const lowercasedInput = inputValue.toLowerCase();
    const filtered = allBlogs.filter(blog =>
      blog.title.toLowerCase().includes(lowercasedInput) ||
      blog.description.toLowerCase().includes(lowercasedInput)
    );
    setFilteredBlogs(filtered);
  }, [inputValue, allBlogs]);

  return (
        <div >
        <Header />
        <section className='justify-content-center d-flex flex-column gap-5 responsive-margin' >
        <h4 className='pt-4'>Understand Your Skin Better</h4>
          <p>Skincare isn't just about products—it's about understanding your skin and the science behind what truly works. <br/><br/>In this section, you'll find articles that explore the why behind skincare: from the layers of your skin and how they function, to the role of natural remedies like Multani Mitti and Phitkari. We also dive into how herbal and traditional ingredients can complement modern skincare, and why maintaining your skin’s health is essential—not just for beauty, but for overall wellness.
          <br/><br/>
Whether you're just starting your skincare journey or looking to deepen your knowledge, these blogs are designed to educate, inform, and inspire a more conscious approach to skincare.</p>
        
          
          <div
          style={{
            width: '50%',
            height: '50px',
            // backgroundColor: pageTheme,
            border: '1px solid black',
            // boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            // borderRadius: 

          }} className='d-flex mt-4 align-items-center p-2'>
            <input
            autofocus={false}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="self-care sundays..."
            // className="form-control placeholder"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              paddingRight: '30px',
              color: 'black',
              width: '100%',
              fontSize: '1.2rem',
              fontFamily: 'dm-sans',
              outline: 'none',
              // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',

            }}
            className='p-2 m-0'
          />
          <FaSearch className='' style={{ display: 'flex', fontSize: '1.5rem', color: 'grey', }} />
        </div>
       
      
      <div className="d-flex gap-4 flex-wrap">
      {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
          <div
            class=" card mb-3 d-flex flex-column p-3 gap-1 blog-cards"
            style={{
              background: pageTheme,
              border: 'none',
              // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="d-flex">
              <img
                src={blog.imageUrl}
                style={{ height: "200px", width: "100%" }}
                className="d-flex"
                alt="img"
              />
            </div>
            <div class="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                <h5 class="card-title fw-bold two-line-text text-black" style={{cursor: 'pointer'}} title={blog.title} >{blog.title}</h5>
              <div class="">

                <p
                  className="card-text three-line-text text-black"
                  dangerouslySetInnerHTML={{
                    __html: blog.description.match(/<p[^>]*>(.*?)<\/p>/),
                  }}
                ></p>

                <a
                  className="d-flex justify-content-end "
                  style={{ bottom: 0 , color: contrastColor}}
                  onClick={() => navigate(`/blog/${blog.key}/${blog.title}`)}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs found matching your search.</p>
      )}
    </div>
  </section>
        
     
       <Footer/>  
    </div>
  )
}

export default Blogs;