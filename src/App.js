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
import SingleBlog from './pages/SingleBlog';
import AppContextProvider from './AppContextProvider';
import './App.css';

function App() {

  return (
    <AppContextProvider >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id/:title" element={<SingleBlog />} />
      </Routes>
    </Router>
 
    </AppContextProvider>
  );   
}

export default App;
