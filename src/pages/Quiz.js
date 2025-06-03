import React, { useContext, useState } from "react";

import { AppContext } from "../AppContext";
import Header from "./Header";
import Footer from "./Footer";

import { FaRepeat } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";

import quizBg from "../assets/quiz.png";

const skincareQuestions = [
  {
    question: "What type of skin do you think you have?",
    options: [
      { label: "Oily", value: "I have oily skin" },
      { label: "Dry", value: "I have dry skin" },
      { label: "Both oily and dry", value: "I have combination skin" },
      { label: "Normal", value: "I have normal skin" },
      { label: "Sensitive", value: "I have sensitive skin" },
    ],
  },
  {
    question: "What is your biggest skin problem?",
    options: [
      { label: "Pimples", value: "My biggest skin problem is pimples" },
      { label: "Redness", value: "My biggest skin problem is redness" },
      { label: "Dry skin", value: "My biggest skin problem is dryness" },
      { label: "Wrinkles", value: "My biggest skin problem is wrinkles" },
      { label: "Dark spots", value: "My biggest skin problem is dark spots" },
    ],
  },
  {
    question: "How often do you get pimples?",
    options: [
      { label: "Very often", value: "I get pimples very often" },
      { label: "Sometimes", value: "I get pimples sometimes" },
      { label: "Rarely", value: "I rarely get pimples" },
      { label: "Never", value: "I never get pimples" },
    ],
  },
  {
    question: "Do you use sunscreen every day?",
    options: [
      { label: "Yes", value: "I use sunscreen on a regular basis" },
      { label: "No", value: "I do not use sunscreen regularly" },
    ],
  },
  {
    question: "How does your skin feel at the end of the day?",
    options: [
      { label: "Oily", value: "My skin feels oily at the end of the day" },
      { label: "Dry", value: "My skin feels dry at the end of the day" },
      { label: "Normal", value: "My skin feels normal at the end of the day" },
      { label: "Itchy", value: "My skin feels itchy at the end of the day" },
      { label: "Tight", value: "My skin feels tight at the end of the day" },
    ],
  },
  {
    question: "Does your skin react badly to new products?",
    options: [
      {
        label: "Yes, very easily",
        value: "My skin is very sensitive to new products",
      },
      { label: "Sometimes", value: "Sometimes my skin reacts to new products" },
      {
        label: "No, not really",
        value: "My skin usually does not react to new products",
      },
    ],
  },
  {
    question: "How often do you clean your face at night?",
    options: [
      { label: "Every night", value: "I clean my face every night" },
      { label: "Most nights", value: "I clean my face most nights" },
      { label: "Sometimes", value: "I sometimes clean my face at night" },
      { label: "Rarely", value: "I rarely clean my face at night" },
    ],
  },
  {
    question: "How much water do you drink every day?",
    options: [
      {
        label: "Less than 1 liter",
        value: "I drink less than 1 liter of water per day",
      },
      { label: "1–2 liters", value: "I drink 1–2 liters of water per day" },
      { label: "2–3 liters", value: "I drink 2–3 liters of water per day" },
      {
        label: "More than 3 liters",
        value: "I drink more than 3 liters of water per day",
      },
    ],
  },
  {
    question: "How many hours do you sleep each night?",
    options: [
      { label: "Less than 5", value: "I sleep less than 5 hours per night" },
      { label: "5–6", value: "I sleep 5 to 6 hours per night" },
      { label: "7–8", value: "I sleep 7 to 8 hours per night" },
      { label: "More than 8", value: "I sleep more than 8 hours per night" },
    ],
  },
  {
    question: "Do you live in a place with a lot of dust or pollution?",
    options: [
      {
        label: "Yes",
        value: "I live in an area with a lot of dust and pollution",
      },
      { label: "No", value: "I do not live in a polluted area" },
      {
        label: "Sometimes",
        value: "Sometimes I am exposed to dust and pollution",
      },
    ],
  },
  {
    question: "What is your age group?",
    options: [
      { label: "Under 18", value: "I am under 18 years old" },
      { label: "18–25", value: "I am between 18 and 25 years old" },
      { label: "26–35", value: "I am between 26 and 35 years old" },
      { label: "36–50", value: "I am between 36 and 50 years old" },
      { label: "Over 50", value: "I am over 50 years old" },
    ],
  },
  {
    question: "What do you want for your skin?",
    options: [
      { label: "Clear skin", value: "I want clear and acne-free skin" },
      { label: "Less dryness", value: "I want my skin to be more hydrated" },
      { label: "Look younger", value: "I want to reduce signs of aging" },
      {
        label: "More glow",
        value: "I want my skin to look more radiant and glowing",
      },
    ],
  },
];

function Quiz() {
  const {
    bgColor,
    pageTheme,
    contrastColor,
    askQuery,
    loading,
    setLoading,
    aiResponse,
    setAiResponse,
  } = useContext(AppContext); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const [quizStarted, setQuizStarted] = useState(false);

  const [answers, setAnswers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAnswer = async (option, index) => {
    setSelectedIndex(index);
    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentIndex + 2 < skincareQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedIndex(null);
    } else {
      setShowSubmitButton(true);
    }
  };
  //retrieving answer evaluation from Gemini API
  const evaluateAnswers = async () => {
    try {
      askQuery(
        answers +
          "Please evaluate my skin and tell me my skin type. Also explain the science behind it and suggest me a skin care routine or what kind of products should i use. Answer in short , precise."
      );
      // setResult(res.data);
    } catch (err) {
      console.error("Evaluation error:", err);
    }
  };

  const currentQuestion = skincareQuestions[currentIndex];
  return (
    <>
      <Header />
      <section
        className="justify-content-between d-flex flex-column"
        style={{ margin: "0vh 10vw", minHeight: "85vh" }}
      >
        <div className="d-flex justify-content-start align-items-center py-5">
          {!aiResponse ? (
            <h6 className="p-1">
              <b>Take a Quiz :</b> Let's figure out your skin type.{" "}
            </h6>
          ) : (
            <h5 className="p-1">
              <b>Heres your PERSONALIZED SKINCARE ALALYSIS</b>
            </h5>
          )}
        </div>
        <>
        {loading?
            <div style={{height: '50vh'}} className="d-flex justify-content-start align-items-center flex-column">
              <div className="spinner-border mb-3 " role="status" style={{color: contrastColor, }}>
    {/* <span className="visually-hidden">Loading...</span> */}
  </div>
              <p>Your results are almost ready. Thanks for your patience!</p>
            </div>
            :
            <div className="d-flex">
          {!aiResponse && (
            <img src={quizBg} alt="take a quiz" style={{ height: "500px" }} />
          )}

          {aiResponse ? (
            <div className="d-flex flex-column pb-5" style={{}}>
              <ReactMarkdown
                // className='default-scrollbar'
                style={{
                  paddingBottom: "2rem",
                  overflow: "scroll",

                  // zIndex: 2,
                  //  background: '#F8F9FA', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)', overflow:'scroll', maxHeight: '550px'
                }}
                components={{
                  p: ({ children }) => (
                    <p className="mb-2 text-body">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="fw-bold">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="fst-italic">{children}</em>
                  ),
                  code: ({ children }) => (
                    <code className="bg-light px-1 rounded">{children}</code>
                  ),
                }}
              >
                {aiResponse}
              </ReactMarkdown>
              <button
                className="px-3 py-2 mt-5 gap-4 d-flex align-items-center justify-content-center"
                style={{
                  width: "15%",
                  border: "none",
                  color: "white",
                  background: "#df880d",
                  borderRadius: "0.3vw",
                }}
                onClick={() => {
                  console.log("submit button clicked");
                  setAiResponse(null);
                  setQuizStarted(false);
                  setCurrentIndex(0);
                  setAnswers([]);
                  setShowSubmitButton(false);
                  setSelectedIndex(null);
                }}
              >

                <span>Retake Quiz</span>
                <FaRepeat />
              </button>
            </div>
          ) : (
           
            
            <>
           
              {quizStarted ? (
                <div className="d-flex flex-column gap-2">
                  {/* quiz questions  */}

                  <h2>{currentQuestion.question}</h2>
                  {currentQuestion.options.map((opt, idx) => {
                    const selected = selectedIndex === idx;

                    return (
                      <button
                        key={idx}
                        className="px-3 py-2 quiz-button"
                        style={{
                          width: "100%",
                          border: `1px solid ${contrastColor}`,
                          color: selected ? "white" : "black",
                          background: selected ? contrastColor : "transparent",
                          borderRadius: "0.3vw",
                        }}
                        onClick={() => handleAnswer(opt.value, idx)}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                  {showSubmitButton ? (
                    <button
                      className="px-3 py-2 mt-5"
                      style={{
                        width: "100%",
                        border: "none",
                        color: "white",
                        background: "#df880d",
                        borderRadius: "0.3vw",
                      }}
                      onClick={() => {
                        console.log("submit button clicked");
                        evaluateAnswers();
                        setLoading(true);
                      }}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className="px-3 py-2 mt-5"
                      style={{
                        width: "100%",
                        border: "none",
                        color: "white",
                        background: contrastColor,
                        borderRadius: "0.3vw",
                      }}
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Next
                    </button>
                  )}
                </div>
              ) : (
                <div >
                  <h6 className="bg-light p-4" style={{}}>
                    I'll ask you some questions. Be as honest as possible for
                    the most accurate results. <br />
                    <br />
                    <br />{" "}
                    <h5 style={{ color: contrastColor, fontWeight: "bold" }}>
                      Ready ?
                    </h5>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="align-items-center d-flex justify-content-center">
                      <button
                        style={{
                          width: "100%",
                          border: `2px solid ${contrastColor}`,
                          background: pageTheme,
                          borderRadius: "0.3vw",
                        }}
                        className="px-3 py-2 d-flex justify-content-center"
                        onClick={() => {
                          setQuizStarted(true);
                        }}
                      >
                        Start Quiz{" "}
                      </button>
                    </div>
                  </h6>
                </div>
              )}
            </>
            
           
            
          )}
        
        
        
        
            </div>

        }
        </>
        
      </section>

      <Footer />
    </>
  );
}

export default Quiz;
