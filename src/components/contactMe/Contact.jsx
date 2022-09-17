import React, { useRef } from 'react'
import './contact.css'
import contactimg from '../../assets/contact-img.svg'
import 'animate.css'
import TrackVisibility  from 'react-on-screen'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'

const Contact = () => {
  const handleClick = () => {
    let firstName = document.querySelector("#firstname")
    let lastName = document.querySelector("#lastname")
    let email = document.querySelector("#email")
    let number = document.querySelector("#number")
    let message = document.querySelector('#message')

    let fName = firstName.value
    let lName = lastName.value
    let eMail = email.value
    let num = number.value
    let msg = message.value

    if (fName === '' || lName === '' || eMail === '' || num === '' || msg === '') {
      swal({
        title: "Error",
        text: "Please fill in the missing field",
        icon: "warning",
        buttons: {cancel: true}
      })
    } else {
      swal({
        title: `Hi ${fName}`,
        text: "your message has been successfully submitted",
        icon: "success",
        button: "Ok",
      });
    }

  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_n26uo5t',
     'template_37x267m', 
     form.current, 
     'Opkdu35seEunIuopi')

     .then((result) => {
      console.log(result.text);
      e.target.reset()
      console.log("message sent")
  }, (error) => {
      console.log(error.text);
  });

      e.target.reset()
      
  };
  
  return (
    <section id='contact'>
      <TrackVisibility>
        {({ isVisible}) => 
        <div className= {isVisible ? 'animate__animated animate__slideInUp animate__slow' : ''}>
      <div className="contact__container">
        <div className="contact__image">
          <img src={contactimg} alt="image"/>
        </div>
        <div className="contact__section">
          <form ref={form} onSubmit={sendEmail} className='form'>
            <input type="text" id='firstname' name='firstname' placeholder='First name' required />
            <input type="text" id='lastname' name='lastname' placeholder='Last name' required />
            <input type="email" id='email' name='email' placeholder='Email Address' required />
            <input type="text" id='number' name='number' placeholder='Phone Number' required />
            <textarea name="message" id="message" placeholder='Your Message' required></textarea>
            <button type="submit" onClick={handleClick} value='send' className='btn btn-primary'>Submit</button>
          </form>
          
        </div>
        
      </div>
      </div>
}
</TrackVisibility>
    </section>
  )
}

export default Contact