import React , {useContext} from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';

function ContactUs() {

  const { bgColor } = useContext(AppContext);

  return (
        <div style={{ backgroundColor: bgColor }}>
        <Header />
        <div className='d-flex justify-content-center'>
          <h1>
           Contact Us
          </h1>
        </div>
    </div>
  )
}

export default ContactUs;