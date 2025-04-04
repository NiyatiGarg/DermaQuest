import React , {useContext} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

function Quiz() {

  const { bgColor } = useContext(AppContext);

  return (
    <>
        <Header />
        <div className='d-flex justify-content-center align-items-center' >
          <h1 className='p-5'>
            Coming Soon
          </h1>
        </div>
    </>
  )
}

export default Quiz;