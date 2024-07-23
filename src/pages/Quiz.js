import React , {useContext} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

function Quiz() {

  const { bgColor } = useContext(AppContext);

  return (
    <div style={{ backgroundColor: bgColor }}>
        <Header />
        <hr/>
        <div className='d-flex justify-content-center'>
          <h1>
            Start Quiz
          </h1>
        </div>
    </div>
  )
}

export default Quiz;