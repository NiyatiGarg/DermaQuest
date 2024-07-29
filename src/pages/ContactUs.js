import React, { useContext } from 'react';

import { AppContext } from '../AppContext';
import Header from './Header';
import { FaLinkedin, FaQuora, FaBlogger, } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function ContactUs() {

  const { pageTheme } = useContext(AppContext);

  return (
    <div >
      <Header />
      <div className='d-flex justify-content-center flex-column ' style={{ padding: '2% 10%' }}>
        <h1 className='my-4'>
          Contact Us
        </h1>
        <h5 style={{ fontSize: '15px' }}>
          We'd love to hear from you! <br />Whether you have questions, feedback, or need personalized skincare advice, the DermaQuest team is here to help.
        </h5>
        {/* form */}
        <div className='my-4'>
          <h5 style={{ fontWeight: 'bold ', color: pageTheme }}>Please fill out the form below, and we will get back to you as soon as possible.</h5>
          <form action="mailto:niyatigarg2002@gmail.com" method="post" enctype="text/plain">
            <label for="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" required/>
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required
            /><br />

            <label for="subject">Subject:</label>
            <br />
            <input type="text" id="subject" name="subject" required /><br />

            <label for="message">Message:</label><br />
            <textarea id="message" name="message" rows="4" required></textarea><br />

            <input type="submit" value="Submit" />
          </form>
        </div>
        <hr />
        <h1 style={{ fontSize: '20px' }} className='mt-4'> If you just want to say hi why not <b className='px-2'>GET IN TOUCH</b> through our social media channels.</h1>
        <div className='d-flex gap-5 py-4 '>
          <a href="https://www.linkedin.com/in/niyati-garg-59b385211/" target="_blank" rel="my linkedin profile">
            <FaLinkedin size={40} style={{ color: pageTheme }} />
          </a>
          <a href="https://www.quora.com/profile/Niyati-Garg-9" target="_blank" rel="my quora profile">
            <FaQuora size={40} style={{ color: pageTheme }} />
          </a>
          <a href="https://evergreen-blogs.blogspot.com/" target="_blank" rel="my blogger profile">
            <FaBlogger size={40} style={{ color: pageTheme }} />
          </a>
          <a href="https://x.com/garg4_niyati" target="_blank" rel="my twitter profile">
            <FaXTwitter size={40} style={{ color: pageTheme }} />
          </a>
        </div>
        <hr />
        <h6 style={{ fontWeight: 'bold' }} className='my-4'>We’re Here to Help !</h6>
        <p>At DermaQuest, your satisfaction is our priority. Don’t hesitate to reach out with any questions or concerns. We look forward to assisting
          you on your journey to healthy, radiant skin!</p>
      </div>
    </div>
  )
}

export default ContactUs;