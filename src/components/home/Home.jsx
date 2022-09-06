import React from 'react'
import './home.css'
// import Video from '../../assets/backgrd.webp' 
import Image from '../../assets/girly2-removebg-preview.png'
import num1 from '../../assets/num1.webp'
import CTA from './CTA'
import Socialicons from './Socialicons'

const Home = () => {
  return (
    <header>
      <div className="home__container">
        <div className="hocontainer">

          {/* <video autoplay muted loop id='video'>
            <source src={Video} type='video/mp4'/>
          </video> */}
        <div className="home__con">
        <span>Welcome to my portfolio</span>
        <h1>Im kemi</h1>
        <p>a front-end developer with enthusiasm and great passion in learning as the world eveolves</p>
        <h2>let's connect<CTA/></h2>
        <Socialicons/>
        </div>
        <div className="images">
        {/* <img src={num1} alt="banner image" /> */}
        {/* <img src={Image} alt="banner image" className='num2' /> */}
        {/* <img src={num1} alt="banner image" /> */}
        <img src='https://cdn.dribbble.com/users/916023/screenshots/17349654/media/ad178fd8a3b8fd28ca02eade078fc7c0.png?compress=1&resize=768x576&vertical=top' alt="banner image" />
        </div>
        </div>
        </div>
    </header>
  )
}

export default Home