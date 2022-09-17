import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Socialicons = () => {
  return (
    <div className="footer__icons">
        <a href="https://github.com/KemiDoyin" target= "_blank">
            <BsGithub/>
        </a>
        <a href="https://www.linkedin.com/in/oluwakemihelen/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BoQDfs36NRSyXKz40Rok5lA%3D%3D" target= "_blank">
            <BsLinkedin/>
        </a>
        <a href="https://pinterest.com" target= "_blank">
            <BsPinterest/>
        </a>
        <a href="https://twitter.com/KemiAdedoyin_" target= "_blank">
            <BsTwitter/>
        </a>
    </div>
  )
}

export default Socialicons