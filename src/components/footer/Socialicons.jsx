import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Socialicons = () => {
  return (
    <div className="footer__icons">
        <a href="https://github.com" target= "_blank">
            <BsGithub/>
        </a>
        <a href="https://linkedin.com" target= "_blank">
            <BsLinkedin/>
        </a>
        <a href="https://pinterest.com" target= "_blank">
            <BsPinterest/>
        </a>
        <a href="https://pinterest.com" target= "_blank">
            <BsTwitter/>
        </a>
    </div>
  )
}

export default Socialicons