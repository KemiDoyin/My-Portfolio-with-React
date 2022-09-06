import React from 'react'
import './project.css'
import image1 from '../../assets/laptop.webp'
import image2 from '../../assets/BaseApprel.jpg'
import image3 from '../../assets/phone.jpeg'
import image4 from '../../assets/sunside.jpg'
import image5 from '../../assets/snipshot2.png'
import image6 from '../../assets/product2.jpg'
const Projects = () => {
  //Function to map through the project
  const data = [
    {
      id: 1,
      image: image1,
      title: '',
      github: '',
      liveDemo: ''
    },
    {
      id: 2,
      image: image2,
      title: '',
      github: '',
      liveDemo: ''
    },
    {
      id: 3,
      image: image3,
      title: '',
      github: '',
      liveDemo: ''
    },
    {
      id: 4,
      image: image4,
      title: '',
      github: '',
      liveDemo: ''
    },
    {
      id: 5,
      image: image5,
      title: '',
      github: '',
      liveDemo: ''
    },
    {
      id: 6,
      image: image6,
      title: '',
      github: '',
      liveDemo: ''
    }
  ];
  return (
    <section id='project'>
      <h3>My portfolio</h3>
      <div className="project__container">
        {
          data.map(({id, image, title, github, liveDemo}) => {
            return (
              <div key={id} className="projects">
          <div className="project__image">
            <img src={image} alt={title} />
          </div>
          <h2>{title}</h2>
          <div className="button">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={liveDemo} className='btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
            )
          })
        }
        {/* <div className="projects">
          <div className="project__image">
            <img src={image} alt="" />
          </div>
          <h2>this is an item</h2>
          <div className="button">
          <a href="https://github.com/" className='btn' target='_blank'>github</a>
          <a href="https://github.com/" className='btn-primary' target='_blank'>demo</a>
          </div>
        </div>
        <div className="projects">
          <div className="project__image">
            <img src={image} alt="" />
          </div>
          <h2>this is an item</h2>
          <div className="button">
          <a href="https://github.com/" className='btn' target='_blank'>github</a>
          <a href="https://github.com/" className='btn-primary' target='_blank'>demo</a>
          </div>
        </div>
        <div className="projects">
          <div className="project__image">
            <img src={image} alt="" />
          </div>
          <h2>this is an item</h2>
          <div className="button">
          <a href="https://github.com/" className='btn' target='_blank'>github</a>
          <a href="https://github.com/" className='btn-primary' target='_blank'>demo</a>
          </div>
        </div>
        <div className="projects">
          <div className="project__image">
            <img src={image} alt="" />
          </div>
          <h2>this is an item</h2>
          <div className="button">
          <a href="https://github.com/" className='btn' target='_blank'>github</a>
          <a href="https://github.com/" className='btn-primary' target='_blank'>demo</a>
          </div>
        </div>
        <div className="projects">
          <div className="project__image">
            <img src={image} alt="" />
          </div>
          <h2>this is an item</h2>
          <div className="button">
          <a href="https://github.com/" className='btn' target='_blank'>github</a>
          <a href="https://github.com/" className='btn-primary' target='_blank'>demo</a>
          </div>
        </div>
        <div className="projects">
          <div className="project__image">
            <img src={image} alt="" />
          </div>
          <h2>this is an item</h2>
          <div className="button">
          <a href="https://github.com/" className='btn' target='_blank'>github</a>
          <a href="https://github.com/" className='btn-primary' target='_blank'>demo</a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Projects