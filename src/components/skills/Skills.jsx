import React from 'react'
import './skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Html from '../../assets/html5.webp'
import Node from '../../assets/node.png'
import JS from '../../assets/javaScript.webp'
import CSS from '../../assets/css3.png'
import ReactIcon from '../../assets/react.webp'
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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti laboriosam placeat pariatur maxime aliquam consectetur error maiores cupiditate illo vitae? At temporibus nisi exercitationem dolorem porro accusamus dolor eaque sunt!</p>
        <Carousel responsive={responsive} infinite={true} className='skill__slider'>
          <div className="skill_content">
            <img src={Html} alt="" />
            <h3>HTML5</h3>
          </div>
          <div className="skill_content">
            <img src={CSS} alt="" />
            <h3>CSS3</h3>
          </div>
          <div className="skill_content">
            <img src={JS} alt="" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill_content">
            <img src={Node} alt="" />
            <h3>Node JS</h3>
          </div>
          <div className="skill_content">
            <img src={ReactIcon} alt="" />
            <h3>React</h3>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Skills