import React from 'react'
import './navbar.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {TbBooks} from 'react-icons/tb'
import {VscMultipleWindows} from 'react-icons/vsc'
import {FiMessageCircle} from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav>
      <a href="#"><BiHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#skills"><TbBooks/></a>
      <a href="#project"><VscMultipleWindows/></a>
      <a href="#contact"><FiMessageCircle/></a>
    </nav>
  )
}

export default Navbar