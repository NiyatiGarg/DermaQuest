// App.js

import React, {useContext}from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Ingredients from './pages/Ingredients';
import Blogs from './pages/Blogs';

import AppContextProvider from './AppContextProvider';
import './App.css';

function App() {

  return (
    <AppContextProvider>
    <Router>
     
        {/* <div className="container mt-4"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        {/* </div>
      </div> */}
    </Router>
 
    </AppContextProvider>
  );   
}

export default App;
