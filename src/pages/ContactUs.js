import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { FaLinkedin, FaQuora, FaBlogger } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Footer from './Footer';

function ContactUs() {
  const { pageTheme, contrastColor } = useContext(AppContext);

  return (
    <div>
      <div className="container py-4">

        <h1 className="my-4 fw-bold text-md-start">Contact Us</h1>

        <h5 className="fw-normal" style={{ fontSize: '15px' }}>
          We'd love to hear from you! <br />
          Whether you have questions, feedback, or need personalized skincare advice, 
          the DermaQuest team is here to help.
        </h5>

        {/* FORM SECTION */}
        <div className="my-4">
          <h5 className="fw-bold" style={{ color: contrastColor }}>
            Please fill out the form below, and we will get back to you as soon as possible.
          </h5>

          <form
            action="mailto:niyatigarg2002@gmail.com"
            method="post"
            encType="text/plain"
            className="mt-4 bg-light p-4 rounded shadow-sm mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <label htmlFor="name" className="mb-1">Name:</label>
            <input type="text" id="name" name="name" required className="form-control mb-3" />

            <label htmlFor="email" className="mb-1">Email:</label>
            <input type="email" id="email" name="email" required className="form-control mb-3" />

            <label htmlFor="subject" className="mb-1">Subject:</label>
            <input type="text" id="subject" name="subject" required className="form-control mb-3" />

            <label htmlFor="message" className="mb-1">Message:</label>
            <textarea id="message" name="message" rows="4" required className="form-control mb-3"></textarea>

            <input
              type="submit"
              value="Submit"
              className="btn w-100 py-2"
              style={{ border: `2px solid ${contrastColor}`, color: contrastColor }}
            />
          </form>
        </div>

        <hr />

        {/* SOCIAL LINKS */}
        <h5 className="mt-4 text-center text-md-start" style={{ fontSize: "18px" }}>
          If you just want to say hi, why not  
          <b className="px-1">GET IN TOUCH</b>  
          through our social media channels.
        </h5>

        <div className="d-flex flex-wrap gap-4 py-4 justify-content-center justify-content-md-start">
          <a href="https://www.linkedin.com/in/niyati-garg-59b385211/" target="_blank">
            <FaLinkedin size={40} style={{ color: contrastColor }} />
          </a>
          <a href="https://www.quora.com/profile/Niyati-Garg-9" target="_blank">
            <FaQuora size={40} style={{ color: contrastColor }} />
          </a>
          <a href="https://evergreen-blogs.blogspot.com/" target="_blank">
            <FaBlogger size={40} style={{ color: contrastColor }} />
          </a>
          <a href="https://x.com/garg4_niyati" target="_blank">
            <FaXTwitter size={40} style={{ color: contrastColor }} />
          </a>
        </div>

        <hr />

        <h6 className="fw-bold my-3">We’re Here to Help!</h6>
        <p>
          At DermaQuest, your satisfaction is our priority. 
          Don’t hesitate to reach out with any questions or concerns. 
          We look forward to assisting you on your journey to healthy, radiant skin!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
