import React , {useContext} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

function Blogs() {

  const { bgColor } = useContext(AppContext);

  return (
        <div >
        <Header />
        <div className='d-flex justify-content-center'>
          <h1>
           Frequently asked topics
          </h1>
        </div>
    </div>
  )
}

export default Blogs;