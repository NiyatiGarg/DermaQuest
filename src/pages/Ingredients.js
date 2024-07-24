import React , {useContext} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

function Ingredients() {

  const { bgColor } = useContext(AppContext);

  return (
        <div >
        <Header />
        <div className='d-flex justify-content-center'>
          <h1>
           Know the science behind the ingredients
          </h1>
        </div>
    </div>
  )
}

export default Ingredients;