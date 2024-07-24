import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

import Header from './Header';

function Home() {

  const { setPageTheme } = useContext(AppContext);

  return (
    <div >
      <Header />
      <div className='justify-content-center d-flex'>
        <h1>This is the Home page </h1>
      </div>
    </div>
  )
}

export default Home;