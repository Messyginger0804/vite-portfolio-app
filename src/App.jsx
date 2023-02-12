// import { useState } from 'react'
import './App.css';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contacts from './Components/Contacts/Contact';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';


function App() {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
