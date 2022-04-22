import React from 'react';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="main-content">
      <Contact />
      <MainPage />
        <About />
        <Project />
        <Footer />
    </div>
  );
}

export default App;
