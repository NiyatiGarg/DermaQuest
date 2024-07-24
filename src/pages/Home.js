import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

import Icofont from 'react-icofont';

import Header from './Header';

function Home() {

  const { pageTheme } = useContext(AppContext);
const [inputValue, setInputValue]= useState('')

const handleInputChange=(e)=>{
  setInputValue(e.target.value);
}

  return (
    <div >
      <Header />
      <section className='justify-content-center d-flex' style={{padding: '2vh 10vw'}}>
      <div
          style={{
            width: '100%',
            backgroundColor: pageTheme,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            // borderRadius: 

          }} className='d-flex mt-4'>
          <input
            autofocus={false}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ask about ingredients, routines, and more..."
            className="form-control "
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              paddingRight: '30px',
              color: 'black',
              
            }}
          />
          <Icofont icon="search" className='p-2' style={{ display: 'flex', fontSize: '2rem' }} />
        </div>
      </section>
    </div>
  )
}

export default Home;