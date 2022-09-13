import React from 'react'
import './contact.css'
import contactimg from '../../assets/contact-img.svg'
import 'animate.css'
import TrackVisibility  from 'react-on-screen'

const Contact = () => {
  return (
    <section id='contact'>
      <TrackVisibility>
        {({ isVisible}) => 
        <div className= {isVisible ? 'animate__animated animate__fadeInUp' : ''}>
      <div className="contact__container">
        <div className="contact__image">
          <img src={contactimg} alt="image" />
        </div>
        <div className="contact__section">
          <form action="" className='form'>
            <input type="text" name='firstname' placeholder='First name' required />
            <input type="text" name='lastname' placeholder='Last name' required />
            <input type="email" name='email' placeholder='Email Address' required />
            <input type="text" name='number' placeholder='Phone Number' required />
            <textarea name="message" id="message" placeholder='Your Message' required></textarea>
          </form>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
        
      </div>
      </div>
}
</TrackVisibility>
    </section>
  )
}

export default Contact