import React from 'react'
import './home.css'
import CTA from './CTA'
import 'animate.css'
import TrackVisibility  from 'react-on-screen'

const Home = () => {
  return (
    <header>
      <div className="home__container">
        <div className="home__container2">
        <div className="home__info">
        <TrackVisibility>
        {({ isVisible}) => 
        <div className= {isVisible ? 'animate__animated animate__fadeInUp' : ''}>
        <span>Welcome to my portfolio</span>
        <h1>Hello, I'm Kemi</h1>
        <p><q>Every great developer you know got there by solving problems they were unqualified to solve until they actually did it
          <small>---Patrick McKenzie</small>
          </q>
          </p>
        <h2>Let's Connect<CTA/></h2>
        </div>
        }
        </TrackVisibility>
        </div>
        <div className="home__image">
        <img src='https://cdn.dribbble.com/users/916023/screenshots/17349654/media/ad178fd8a3b8fd28ca02eade078fc7c0.png?compress=1&resize=768x576&vertical=top' alt="banner image" />
        </div>
        </div>
        </div>
    </header>
  )
}

export default Home