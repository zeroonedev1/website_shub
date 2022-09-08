import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {SiVisualstudiocode} from 'react-icons/si'
import {SiGooglemessages} from 'react-icons/si'
import {BiCoinStack} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' :''}> <AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <SiAboutdotme/></a>
      <a href="#xp" onClick={() => setActiveNav('#xp')} className={activeNav === '#xp' ? 'active' : ''}> <BiCoinStack/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <SiVisualstudiocode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <SiGooglemessages/></a>
    </nav>
  )
}

export default Nav