import React , {useContext, useState} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

import Icofont from 'react-icofont';

function Blogs() {

  const { pageTheme } = useContext(AppContext);
  const [inputValue, setInputValue]= useState('')
  
  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }

  return (
        <div >
        <Header />
        <section className='justify-content-center d-flex flex-column' style={{padding: '2rem 10rem'}}>
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
              fontFamily: 'cursive',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',

            }}
          />
          <Icofont icon="search" className='p-3' style={{ display: 'flex', fontSize: '1.5rem', color: 'black',   textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', }} />
        </div>
      </section>
    </div>
  )
}

export default Blogs;