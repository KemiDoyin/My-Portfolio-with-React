import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'

const Socialicons = () => {
  return (
    <div className="header__icons">
        <a href="https://github.com" target= "_blank">
            <BsGithub/>
        </a>
        <a href="https://linkedin.com" target= "_blank">
            <BsLinkedin/>
        </a>
        <a href="https://pinterest.com" target= "_blank">
            <BsPinterest/>
        </a>
    </div>
  )
}

export default Socialicons