import React , {useContext, useState} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

import { FaSearch } from "react-icons/fa";
import Footer from './Footer';
// import Icofont from 'react-icofont';

function Blogs() {

  const { pageTheme } = useContext(AppContext);
  const [inputValue, setInputValue]= useState('')
  
  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }

  return (
        <div >
        <Header />
        <section className='justify-content-center d-flex flex-column responsive-margin' style={{minHeight: '70vh'}}>
        <h1 style={{fontFamily:'fantasy'}}>Frequently asked topics</h1>
 
        <div
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: pageTheme,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            // borderRadius: 

          }} className='d-flex mt-4'>
          <input
            autofocus={false}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ask about skincare routines and more..."
            className="form-control placeholder"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              paddingRight: '30px',
              color: 'black',
              fontSize: '1.2rem',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',

            }}
          />
          <FaSearch icon="search" className='p-3' style={{ display: 'flex', fontSize: '1.5rem', color: 'black',   textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', }} />
        </div>
       
       <section>
       <h5>This page is under construction...</h5>
       </section>
      </section>
      <Footer/>
    </div>
  )
}

export default Blogs;