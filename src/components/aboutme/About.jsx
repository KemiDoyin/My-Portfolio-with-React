import React from 'react'
import './about.css'
import 'animate.css';
import Image from '../../assets/girly2-removebg-preview.png'
import 'animate.css'
import TrackVisibility  from 'react-on-screen'
import MyCV from '../../assets/My CV.docx'


const About = () => {
  return (
    <section id='about'>
      <TrackVisibility>
        {({ isVisible}) => 
        <div className= {isVisible ? 'animate__animated animate__slideInUp animate__slow' : ''}>
      <div className="aboutme__container">
        <div className="about__container">
          <div className="aboutme__image">
            <img src={Image} alt="me" />
          </div>
          <div id='content'className="aboutme__content">
          <h3>About me</h3>
          <h4>Developer <span className='freelancer'> & freelancer</span></h4>
            <p>I consider my self a "forever student", eager to build more on my foundation and to be current. I write clean code and create web applications for use. Being equipped with a diverse and promising skill-set, I enjoy the process of development from the concept and ideation to the final design and completion.</p>
            <div className="button">
            <a href="#contact" className='btn'>Lets talk</a>
            <a href={MyCV} className='btn-primary'>download CV</a>
            </div>
          </div>
        </div>
      </div>
      </div>
        }
        </TrackVisibility>
    </section>
  )
}

export default About