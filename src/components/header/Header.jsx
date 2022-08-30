import React from 'react'
import './header.css'
import Cta from './Cta'
import pic from '../../assets/pic.png'
import HeaderSoials from './HeaderSoials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey Im</h5>
        <h1>... .... ..- -... .... .- -- </h1>
        <h1>01010011 01101000 01110101 01100010 01101000 01100001 01101101</h1>
        <h5 className="text-light">Front_End & Game Developer</h5>
        <Cta />
        <HeaderSoials/>
        <div className="me">
          {/* <img className='picture' src={pic} alt="profile picture"/> */}
          <img  src={pic} alt="profile picture"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header