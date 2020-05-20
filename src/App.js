import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Projects';
import Navigation from './components/Navigation';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Project></Project>
      <About></About>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
