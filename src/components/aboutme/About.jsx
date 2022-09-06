import React from 'react'
import './about.css'
import 'animate.css';
import Image from '../../assets/aboutme.png'
const About = () => {
  return (
    <section id='about'>
      
      <div className=" aboutme__container">
        <div className="about__container">
          <div className="aboutme__image">
            <img src={Image} alt="me" />
          </div>
          <div id='content'className="aboutme__content">
          <h3>About me</h3>
          <h4>Developer <p>and freelancer</p></h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque enim vitae saepe? Ut exercitationem enim expedita consectetur itaque, labore quia quae. Quaerat aliquid ullam odit atque debitis sit delectus excepturi?</p>
            <div className="button">
            <a href="#contact" className='btn'>Lets talk</a>
            <a href="" className='btn-primary'>download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About