import React from 'react'
import './contact.css'
import contactimg from '../../assets/contact-img.svg'
import 'animate.css'
import TrackVisibility  from 'react-on-screen'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3x315xo', 'template_h6szxlq', form.current, 'ZY7gR4h_S4mkqwd_C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      
  };
  return (
    <section id='contact'>
      <TrackVisibility>
        {({ isVisible}) => 
        <div className= {isVisible ? 'animate__animated animate__slideInUp' : ''}>
      <div className="contact__container">
        <div className="contact__image">
          <img src={contactimg} alt="image" />
        </div>
        <div className="contact__section">
          <form ref={form} onSubmit={sendEmail} className='form'>
            <input type="text" id='firstname' name='firstname' placeholder='First name' required />
            <input type="text" id='lasttname' name='lastname' placeholder='Last name' required />
            <input type="email" id='email' name='email' placeholder='Email Address' required />
            <input type="text" id='number' name='number' placeholder='Phone Number' required />
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