import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import './Home.css';
import { FaSearch, FaRobot, FaChevronDown, FaChevronUp } from "react-icons/fa";
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
      setShouldShowButton(lineCount > 15);
    }
  }, [aiResponse]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const renderShowMoreButton = () => {
    const lineCount = aiResponse ? aiResponse.split('\n').length : 0;
    const hiddenLines = lineCount - 15;

    return (
      <button 
        className={`show-more-button ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpansion}
        aria-label={isExpanded ? "Show less" : "Show more"}
      >
        <span className="button-text">
          {isExpanded ? "Show Less" : "Show More"}
        </span>
        <span className="button-icon">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        {!isExpanded && (
          <span className="button-lines-count">
            ({hiddenLines} more lines)
          </span>
        )}
      </button>
    );
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
                <div className="ai-answer-container">
                  <div className="ai-answer-header">
                    <FaRobot className="ai-answer-bot-icon" />
                    <span>AI Skincare Expert</span>
         </div>
                  <div 
                    className={`ai-answer-content ${!isExpanded ? 'ai-answer-collapsed' : 'ai-answer-expanded'}`}
                  >
                    <div className="ai-answer-inner">
          <ReactMarkdown
          components={{
                          p: ({ children }) => (
                            <p className="ai-answer-paragraph">{children}</p>
                          ),
                          strong: ({ children }) => (
                            <strong className="ai-answer-bold">{children}</strong>
                          ),
                          em: ({ children }) => (
                            <em className="ai-answer-italic">{children}</em>
                          ),
                          code: ({ children }) => (
                            <code className="ai-answer-code">{children}</code>
                          ),
          }}
        >
          {aiResponse}
        </ReactMarkdown> 
                    </div>
                    {shouldShowButton && !isExpanded && (
                      <div className="ai-answer-fade-overlay">
                        <div className="ai-answer-fade-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    )}
                  </div>
                  {shouldShowButton && (
                    <button 
                      className={`ai-answer-show-more ${isExpanded ? 'ai-answer-expanded' : ''}`}
                      onClick={toggleExpansion}
                      aria-label={isExpanded ? "Show less" : "Show more"}
                    >
                      <span className="ai-answer-button-text">
                        {isExpanded ? "Show Less" : "Show More"}
                      </span>
                      <span className="ai-answer-button-icon">
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                      
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