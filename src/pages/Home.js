import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import './Home.css';
import { FaSearch, FaRobot, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from './Header';
import Myths from './components/MythSection';
import ArticleSection from './components/ArticleSection';
import ReactMarkdown from "react-markdown";
import Footer from './Footer';
import { RxMagicWand } from "react-icons/rx";
import { LuTestTubeDiagonal } from "react-icons/lu";
import { WiStars } from "react-icons/wi";
import { IoMdHand } from "react-icons/io";

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
  const { 
    pageTheme, 
    askQuery, 
    aiResponse, 
    loading, 
    setLoading, 
    contrastColor 
  } = useContext(AppContext);
  
  const [question, setQuestion] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  const handleInputChange = (e) => setQuestion(e.target.value);

  const handleSearch = () => {
    if (question.trim()) {
      askQuery(question);
      setLoading(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % examples.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (aiResponse) {
      setIsExpanded(false);
      const lineCount = aiResponse.split('\n').length;
      setShouldShowButton(lineCount > 15);
    }
  }, [aiResponse]);

  const toggleExpansion = () => setIsExpanded(!isExpanded);
// scroll to top when Home loads
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}, []);

  return (
    <div className="app-container" style={{ color: contrastColor }}>

      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">
          <h1 className="hero-title fw-bold">
            Welcome to <span className="brand-highlight">DERMA QUEST!</span>
          </h1>
          <p className="hero-description mx-auto mt-3">
            At DermaQuest, we believe that understanding your skin is the first step 
            to achieving a healthy and radiant complexion. Explore our resources, 
            tips, and expert advice to find out what your skin truly needs.
          </p>
          <div className="welcome-badge mb-2 mt-4">
              <span className="badge-text">AI Skincare Assistant</span>
            </div>
        </div>
      </section>

      {/* AI Consultation Section */}
      <section className="consultation-section py-4 align-items-center d-flex justify-content-center">
        <div className="container py-5 mx-2" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>

          {/* Intro Section */}
          <div className="text-center mb-5">
            

            <h2 className="welcome-title d-flex flex-column align-items-center">
              <div className='d-flex'>
              <span className="wave-emoji"><IoMdHand /></span>
              Hello! I'm Your Personal

              </div>
             
              <span className="">Skincare Guide</span>
            </h2>

            <div className="welcome-features d-flex justify-content-center flex-wrap gap-3 mt-3">
              <div className="feature-item d-flex align-items-center gap-2">
                <span className="feature-icon"><RxMagicWand /></span> Expert Skincare Advice
              </div>
              <div className="feature-item d-flex align-items-center gap-2">
                <span className="feature-icon"><LuTestTubeDiagonal /></span> Ingredient Analysis
              </div>
              <div className="feature-item d-flex align-items-center gap-2">
                <span className="feature-icon"><WiStars /></span> Personalized Routines
              </div>
            </div>

            <p className="welcome-text mt-3 mx-auto" style={{ maxWidth: "650px" }}>
              Ask me anything about skin health, ingredients, or routines — I'm here to help you achieve your best skin ever!
            </p>
          </div>

          {/* Search Bar */}
          <div className="search-container text-center mb-4">
            <div className=" d-flex justify-content-center gap-2">
              
              <input
                type="text"
                className="form-control p-3"
                style={{ maxWidth: "500px" , flex:1}}
                value={question}
                onChange={handleInputChange}
                placeholder={examples[currentIndex]}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />

              <button 
                className="btn btn-secondary px-4 py-3"
                onClick={handleSearch}
                style={{ backgroundColor: contrastColor, color: 'white', flex:0 }}
              >
                <FaSearch />
              </button>
             
            </div>

            <div className="example-text mt-2">
              Try asking: "{examples[currentIndex]}"
            </div>
          </div>

          {/* Chat Response */}
          <div className="chat-container">
            {loading ? (
              <div className="d-flex flex-column align-items-center py-5">
                <div className="spinner-border text-primary mb-3"></div>
                <span className="fw-semibold">Getting your skincare advice...</span>
              </div>
            ) : (
              aiResponse && (
                <div className="ai-answer-container mx-auto border rounded p-3 shadow-sm" style={{ maxWidth: "800px" }}>
                  
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <FaRobot className="fs-4" />
                    <span className="fw-bold">AI Skincare Expert</span>
                  </div>

                  <div className={`ai-answer-content ${!isExpanded ? 'ai-answer-collapsed' : ''}`}>
                    <ReactMarkdown>
                      {aiResponse}
                    </ReactMarkdown>
                  </div>

                  {shouldShowButton && (
                    <button 
                      className="btn btn-outline-primary w-100 mt-3"
                      onClick={toggleExpansion}
                    >
                      {isExpanded ? "Show Less" : "Show More"}{" "}
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  )}
                </div>
              )
            )}
          </div>

        </div>
      </section>

      <Myths />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default Home;
