import React from 'react'
import './footer.css'
import Socialicons from '../footer/Socialicons'

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <a href="#">KEMI</a>
      </div>
      <div className="social__icons">
      <Socialicons/>
      <small>&copy; KEMI. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer