import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

import Icofont from 'react-icofont';

import Header from './Header';
import Myths from './components/MythSection';
import peach from '../assets/peach.png';

function Home() {

  const { pageTheme } = useContext(AppContext);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  // const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setQuestion(e.target.value)
  }

  function fetchAnswer(question) {
    // Implement your logic to fetch answer based on question
    // This is an example using a placeholder API
    fetch(`https://api.example.com/answer?question=${question}`)
      .then((response) => response.json())
      .then((data) => setAnswer(data.answer))
      .catch((error) => console.error(error));
  }

  return (
    <div className='d-flex flex-column App' style={{ overflow: 'hidden' }} >
      <Header />
      {/* Section1 */}
      <section className='justify-content-center d-flex flex-column align-items-center bg-light' style={{ padding: '2vh 10vw', height: '100%', background: '' }}>

        {/* headline */}
        <div className='d-flex flex-column align-items-center my-4 py-4' style={{}}>
          <h2 className='d-flex text-center justify-content-center fw-bold flex-column' style={{ fontSize: '3rem' }}>Welcome to  <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', paddingLeft: '15px', }}>DERMA QUEST !</span> </h2>
          <h2 className='d-flex pt-4 mt-4' style={{ fontSize: '1.5rem', textAlign: 'justify', lineHeight: '3rem' }}>At DermaQuest, we believe that understanding your skin is the first step to achieving a healthy and radiant complexion.
            Our mission is to educate and empower you with the knowledge and tools you need to take the best care of your skin.
            Explore our resources, tips, and expert advice to find out what your skin truly needs.
          </h2>
        </div>
      </section>
      {/* Section2 */}
      <section className='mb-4' style={{ padding: '2vh 10vw' }} >
        {/* searchbar */}
        <div
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: pageTheme,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            // borderRadius: 

          }} className='d-flex mt-4'>
          <input
            autofocus={false}
            type="text"
            value={question}
            onChange={e => handleInputChange(e)}
            placeholder="Ask about ingredients, routines, and more..."
            className="form-control placeholder"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              paddingRight: '30px',
              color: 'black',
              fontSize: '1.2rem',
              fontFamily: 'cursive',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',

            }}
          />
          <Icofont icon="search" className='p-3'
            onClick={() => {
              setQuestion(question.trim()); // Trim extra spaces
              fetchAnswer(question);
            }}
            style={{ display: 'flex', fontSize: '1.5rem', color: 'black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', }} />
        </div>
        <div className='mt-5' style={{ height: '500px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', position: 'relative' }}>
          <img src={peach} alt='' style={{ height: '100%', width: '100%', zIndex: 1 }} />
          {question ? <p className=' p-4 fw-bold '
            style={{ zIndex: 3, width: '95%', background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: '12%', left: '50%', transform: 'translate(-50%, -50%)' }}
          > {question}</p> : null}
        </div>
      </section>
      {/* section3 - Myths */}
      <Myths />
    </div>
  )
}

export default Home;