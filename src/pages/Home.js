import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import './Home.css';

// import Icofont from 'react-icofont';
import { FaSearch } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";

import Header from './Header';
import Myths from './components/MythSection';
import ArticleSection from './components/ArticleSection';
import peach from '../assets/peach.png';

import ReactMarkdown from "react-markdown";
import SideNav from './components/SideNav';
import Footer from './Footer';

const examples = [
  "What is salicylic acid and how does it work?",
  "Why do we need skincare?",
  "Is skincare important for men too?",
  "Serum vs Moisturizer – what's the difference?",
  "Best routine for oily skin?",
  "How to reduce acne marks naturally?",
  "Can I use vitamin C and niacinamide together?",
];

function Home() {

  const { pageTheme, askQuery, aiResponse, setAiResponse, loading, setLoading, isSmallScreen, openSideNav, setOpenSideNav, contrastColor } = useContext(AppContext);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  // const [inputValue, setInputValue] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleInputChange = (e) => {
    setQuestion(e.target.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examples.length);
    }, 5000); // Changes every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [examples.length]);

  return (
    <div className='d-flex flex-column App' style={{ overflow: 'hidden', color: contrastColor }} >
      <Header />

      {/* Section1 */}
      <section className='justify-content-center d-flex flex-column align-items-center bg-light' style={{ padding: '2vh 10vw', height: '100%', background: '' }}>
       
       
        

        {/* headline */}
        <div className='d-flex flex-column align-items-center my-4 py-4' >
          <h2 className='d-flex text-center justify-content-center fw-bold main-heading' style={{ fontSize: '2.5rem', color: contrastColor }}>Welcome to  <span style={{ paddingLeft: '15px', }}>DERMA QUEST !</span> </h2>
          <h2 className='d-flex pt-4 mt-4' style={{ fontSize: '1.2rem', textAlign: 'justify', lineHeight: '1.5rem' }}>At DermaQuest, we believe that understanding your skin is the first step to achieving a healthy and radiant complexion.
            Our mission is to educate and empower you with the knowledge and tools you need to take the best care of your skin.
            Explore our resources, tips, and expert advice to find out what your skin truly needs.
          </h2>
        </div>
      </section>
      {/* Section2 */}
      <section className='gap-4 d-flex flex-column' style={{ padding: '10vh 10vw' }} >
      <h5 className="card-title" style={{fontSize: '2rem'}}>👋 Hi, I'm your <span style={{fontSize: '2rem'}}>personal skin care guide! </span></h5>
        <p className="card-text">
          Ask me anything about skin health, ingredients, or routines —
          I'm here to help you glow! ✨
        </p>
        {/* searchbar */}
        <div
          style={{
            width: '100%',
            alignItems: 'center',
            color: 'lightGrey',
            border: '1px solid black',

          }} className='d-flex mt-4 '>
          <input
            autofocus={false}
            type="text"
            value={question}
            onChange={e => handleInputChange(e)}
            placeholder={examples[currentIndex]}
            className="px-4 py-2"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              paddingRight: '30px',
              color: 'black',
              fontSize: '1rem',
              width: '100%',
              heigth: '100%',
              outline: 'none',
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askQuery(question);
              setLoading(true);
              }
            }}
          />
         <FaSearch 
            onClick={() => {
              askQuery(question);
              setLoading(true);
            }}
            className='m-2'
            style={{ display: 'flex', fontSize: '1.5rem', color: 'grey', fontWeight: '20'}} />
        </div>
       
          {loading ?
           <div className="loader">
           <hr />
           <hr />
           <hr />
         </div>
         : 
         <>

          <ReactMarkdown
          style={{ 
            // zIndex: 2, 
          //  background: '#F8F9FA', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)', overflow:'scroll', maxHeight: '550px'
          }}
        
          components={{
            p: ({ children }) => <p className="mb-2 text-body">{children}</p>,
            strong: ({ children }) => <strong className="fw-bold">{children}</strong>,
            em: ({ children }) => <em className="fst-italic">{children}</em>,
            code: ({ children }) => <code className="bg-light px-1 rounded">{children}</code>,
          }}
        >
          {aiResponse}
        </ReactMarkdown> 
         </>}
        {/* </div> */}
      </section>
      {/* section3 - Myths */}
      <Myths />
      <ArticleSection/>
      <Footer/>
    </div>
  )
}

export default Home;