import React from 'react';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blogs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<div className="main-content">
          <Contact />
          <MainPage />
          <Project />
          <Footer />
        </div>} />
        <Route path="/about" element={<div><About /></div>} />
        <Route path="/blogs" element={<div className="main-content"><Blog /></div>} />
      </Routes>
    </Router>
  </React.Fragment>
  );
}

export default App;
