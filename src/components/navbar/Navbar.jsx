import React from 'react'
import './navbar.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {TbBooks} from 'react-icons/tb'
import {VscMultipleWindows} from 'react-icons/vsc'
import {FiMessageCircle} from 'react-icons/fi'
import { useState } from 'react'
const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNavbar('#')} className={activeNavbar === '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNavbar('#about')} className={activeNavbar === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#skills" onClick={() => setActiveNavbar('#skills')} className={activeNavbar === '#skills' ? 'active' : ''}><TbBooks/></a>
      <a href="#project" onClick={() => setActiveNavbar('#project')} className={activeNavbar === '#project' ? 'active' : ''}><VscMultipleWindows/></a>
      <a href="#contact" onClick={() => setActiveNavbar('#contact')} className={activeNavbar === '#contact' ? 'active' : ''}><FiMessageCircle/></a>
    </nav>
  )
}

export default Navbar