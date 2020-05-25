import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Projects';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Project></Project>
      <About></About>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
