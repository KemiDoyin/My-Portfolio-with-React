import React from 'react'
import './home.css'
import Image from '../../assets/girly2-removebg-preview.png'
import CTA from './CTA'
import Socialicons from './Socialicons'

const Home = () => {
  return (
    <header>
      <div className="home__container">
        <div className="hocontainer">
        <div className="home__con">
        <span>Welcome to my portfolio</span>
        <h1>Im kemi</h1>
        <p>a front-end developer with enthusiasm and great passion in learning as the world eveolves</p>
        <h2>let's connect<CTA/></h2>
        <Socialicons/>
        </div>
        <div className="images">
        <img src={Image} alt="banner image" />
        </div>
        </div>
        </div>
    </header>
  )
}

export default Home