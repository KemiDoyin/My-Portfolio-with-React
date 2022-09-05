import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/aboutme/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contactMe/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Home />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App