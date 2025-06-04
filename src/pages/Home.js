import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import './Home.css';
import { FaSearch, FaRobot } from "react-icons/fa";
import { BsQuestionLg } from "react-icons/bs";
import Header from './Header';
import Myths from './components/MythSection';
import ArticleSection from './components/ArticleSection';
import ReactMarkdown from "react-markdown";
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

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSearch = () => {
    if (question.trim()) {
      askQuery(question);
      setLoading(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examples.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [examples.length]);

  // Reset expansion state when new response comes in
  useEffect(() => {
    if (aiResponse) {
      setIsExpanded(false);
      // Check if response is long enough to need the show more button
      const lineCount = aiResponse.split('\n').length;
      setShouldShowButton(lineCount > 30);
    }
  }, [aiResponse]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="app-container" style={{ color: contrastColor }}>
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-highlight">DERMA QUEST!</span>
          </h1>
          <p className="hero-description">
            At DermaQuest, we believe that understanding your skin is the first step to achieving a healthy and radiant complexion.
            Our mission is to educate and empower you with the knowledge and tools you need to take the best care of your skin.
            Explore our resources, tips, and expert advice to find out what your skin truly needs.
          </p>
        </div>
      </section>

      {/* AI Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-container">
          {/* Question Mark Decoration */}
          <div className="question-mark-decoration">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M45,70 L45,65 C45,55 55,52.5 55,42.5 C55,35 50,30 42.5,30 C35,30 30,35 30,42.5 M42.5,80 L42.5,85" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
          </div>

          {/* AI Assistant Introduction */}
          <div className="assistant-intro">
            <div className="welcome-container">
              <div className="welcome-badge">
                <span className="badge-text">AI Skincare Assistant</span>
              </div>
              <h2 className="welcome-title">
                <span className="wave-emoji">👋</span> 
                Hello! I'm Your Personal
                <span className="highlight-text"> Skincare Guide</span>
              </h2>
              <div className="welcome-features">
                <div className="feature-item">
                  <span className="feature-icon">💫</span>
                  <span className="feature-text">Expert Skincare Advice</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🧪</span>
                  <span className="feature-text">Ingredient Analysis</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span className="feature-text">Personalized Routines</span>
                </div>
              </div>
              <p className="welcome-text">
                Ready to discover your perfect skincare routine? Ask me anything about skin health, 
                ingredients, or routines — I'm here to help you achieve your best skin ever!
              </p>
            </div>
          </div>

          {/* Search Input */}
          <div className="search-container">
            <div className="search-wrapper">
          <input
            type="text"
            value={question}
                onChange={handleInputChange}
            placeholder={examples[currentIndex]}
                className="search-input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                    handleSearch();
              }
            }}
          />
              <button 
                className="search-button"
                onClick={handleSearch}
                aria-label="Ask question"
              >
                <FaSearch />
              </button>
            </div>
            <div className="example-text">
              Try asking about: "{examples[currentIndex]}"
            </div>
        </div>
       
          {/* Chat Response Area */}
          <div className="chat-container">
            {loading ? (
              <div className="loader-container">
                <div className="loader">
                  <div className="loader-dot"></div>
                  <div className="loader-dot"></div>
                  <div className="loader-dot"></div>
                  <span className="loader-text">Getting your skincare advice...</span>
                </div>
              </div>
            ) : (
              aiResponse && (
                <div className="chat-response">
                  <div className="response-header">
                    <FaRobot className="bot-icon" />
                    <span>AI Skincare Expert</span>
                  </div>
                  <div className={`response-content ${!isExpanded ? 'collapsed' : ''}`}>
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="response-paragraph">{children}</p>
                        ),
                        strong: ({ children }) => (
                          <strong className="response-bold">{children}</strong>
                        ),
                        em: ({ children }) => (
                          <em className="response-italic">{children}</em>
                        ),
                        code: ({ children }) => (
                          <code className="response-code">{children}</code>
                        ),
                      }}
                    >
                      {aiResponse}
                    </ReactMarkdown>
                  </div>
                  {shouldShowButton && (
                    <button 
                      className="show-more-button"
                      onClick={toggleExpansion}
                      aria-label={isExpanded ? "Show less" : "Show more"}
                    >
                      {isExpanded ? "Show Less" : "Show More"}
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