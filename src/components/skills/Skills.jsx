import React from 'react'
import './skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Html from '../../assets/html5.webp'
import Node from '../../assets/download-removebg-preview.png'
import JS from '../../assets/javaScript.webp'
import CSS from '../../assets/css3.png'
import ReactIcon from '../../assets/react.webp'
import Bootstrap from '../../assets/bootstrap-removebg-preview.png'
import GitIcon from '../../assets/Git-Icon-1788C.png'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section id='skills'>
      <div className="skill__container">
        <h2>Skillls</h2>
        <p>Here are the key languages that I'm experienced with</p>
        <Carousel responsive={responsive} infinite={true} className='skill__slider'>
          <div className="skill_content">
            <img src={Html} alt="html logo" />
            <h3>HTML5</h3>
          </div>
          <div className="skill_content">
            <img src={CSS} alt="css logo" />
            <h3>CSS3</h3>
          </div>
          <div className="skill_content">
            <img src={JS} alt="javascript logo" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill_content">
            <img src={Node}  alt="node logo" />
            <h3>Node JS</h3>
          </div>
          <div className="skill_content">
            <img src={ReactIcon} alt="react logo" />
            <h3>React</h3>
          </div>
          <div className="skill_content">
            <img src={Bootstrap} alt="bootstrap logo" />
            <h3>Bootstrap</h3>
          </div>
          <div className="skill_content">
            <img src={GitIcon} alt="git icon" />
            <h3>git</h3>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Skills