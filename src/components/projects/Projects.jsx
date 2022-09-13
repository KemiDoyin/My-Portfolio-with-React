import React from 'react'
import './project.css'
import image1 from '../../assets/user-search.jpg'
import image2 from '../../assets/desktop-design-completed.jpg'
import image3 from '../../assets/desktop-design.jpg'
import image4 from '../../assets/dice-game.jpg'
import image5 from '../../assets/advice-gen.jpg'
import image6 from '../../assets/rate-comp.jpg'
import 'animate.css'
import TrackVisibility  from 'react-on-screen'

const Projects = () => {
  //Function to map through the project
  const data = [
    {
      id: 1,
      image: image1,
      title: 'A Github User Search App',
      github: 'https://github.com/KemiDoyin/Github-User-Search',
      liveDemo: 'https://github-usernames-search.netlify.app/'
    },
    {
      id: 2,
      image: image2,
      title: 'A bill-tip calculator',
      github: 'https://github.com/KemiDoyin/Tip-Calculator',
      liveDemo: 'https://billtip-calculator.netlify.app/'
    },
    {
      id: 3,
      image: image3,
      title: 'A chart component with local JSON file',
      github: 'https://github.com/KemiDoyin/chart-component',
      liveDemo: ''
    },
    {
      id: 4,
      image: image4,
      title: 'A pig dice game for desktops',
      github: 'https://github.com/KemiDoyin/Pig-dice-game',
      liveDemo: 'https://pigdicegame-bykemi.netlify.app/'
    },
    {
      id: 5,
      image: image5,
      title: 'An advice generator app',
      github: 'https://github.com/KemiDoyin/Advice-Generator-App',
      liveDemo: 'https://advicesgeneratorapp.netlify.app/'
    },
    {
      id: 6,
      image: image6,
      title: 'An interactive rating component',
      github: 'https://github.com/KemiDoyin/Interactive-rating-component',
      liveDemo: 'https://interactive-rating-component-card.netlify.app/'
    }
  ];
  return (
    <section id='project'>
      <TrackVisibility>
        {({ isVisible}) => 
        <div className= {isVisible ? 'animate__animated animate__bounce' : ''}>
      <h2>My portfolio</h2>
      <p>Here are a few projects I have done</p>
      </div>
        }
        </TrackVisibility>
      <div className="container project__container">
        {
          data.map(({id, image, title, github, liveDemo}) => {
            return (
              <div key={id} className="projects">
          <div className="project__image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="button">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={liveDemo} className='btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects