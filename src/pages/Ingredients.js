import React , {useContext, useState, useEffect} from 'react';

import { AppContext } from '../AppContext';
import { useNavigate } from "react-router-dom";
import Header from './Header';

// import Icofont from 'react-icofont';
import { FaSearch } from "react-icons/fa";
import Footer from './Footer';


function Ingredients() {

  const { pageTheme, ingredientBlogs, contrastColor} = useContext(AppContext);
  const [inputValue, setInputValue]= useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(ingredientBlogs);

  const navigate = useNavigate();
  
  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }

  useEffect(() => {
    const lowercasedInput = inputValue.toLowerCase();
    const filtered = ingredientBlogs.filter(blog =>
      blog.title.toLowerCase().includes(lowercasedInput) ||
      blog.description.toLowerCase().includes(lowercasedInput)
    );
    setFilteredBlogs(filtered);
  }, [inputValue, ingredientBlogs]);

  return (
        <div >
        <section className='justify-content-center d-flex flex-column gap-2 responsive-margin' >
        <h1 className="my-4 text-md-start fw-bold">Ingredients</h1>
        <h4 className=''>Know What You're Putting on Your Skin</h4>
          <p>Behind every effective skincare product is an ingredient doing the hard work. This section breaks down popular skincare ingredients—both modern and natural—so you know exactly what you're applying to your skin and why. <br/><br/>
          From powerhouse actives like Hyaluronic Acid and Vitamin C to exfoliants like Salicylic Acid, we explain how these components work, their benefits, who they’re best for, and how to use them safely. Our goal is to help you make informed choices and build a routine that supports your unique skin needs.
          <br/><br/>Discover the science, the benefits, and the best practices—one ingredient at a time.</p>
        
          
        <div
          className="d-flex mt-4 align-items-center p-2 w-100"
          style={{
            border: "1px solid black",
          }}
        >
          <input
            autofocus={false}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Know the science behind the ingredients..."
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
       
      
      <div className="d-flex flex-wrap pt-4 gap-4">
      {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
          <div
            class=" d-flex flex-column p-3 gap-1 col-md-3 col-12"
            style={{
              background: pageTheme,
              border: 'none',
            }}
          >
            
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

export default Ingredients;