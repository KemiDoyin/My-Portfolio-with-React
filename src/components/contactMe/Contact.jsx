import React from 'react'
import './contact.css'
import contactimg from '../../assets/contact-img.svg'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact__container">
        <div className="contact__image">
          <img src={contactimg} alt="image" />
        </div>
        <div className="contact__section">
          <form action="">
            <input type="text" name='firstname' placeholder='First name' required />
            <input type="text" name='lastname' placeholder='Last name' required />
            <input type="email" name='email' placeholder='Email Address' required />
            <input type="text" name='number' placeholder='Phone Number' required />
            <textarea name="message" id="message" cols="50" rows="10" placeholder='Your Message'></textarea>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact