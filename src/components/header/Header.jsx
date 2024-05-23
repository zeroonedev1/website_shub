import React from 'react'
import './header.css'
import Cta from './Cta'
import pic from '../../assets/5_1.png'
import HeaderSoials from './HeaderSoials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hey I'm</h2>
        <h2>... .... ..- -... .... .- -- </h2>
        <h1>Shubham M Dholu</h1>
        <h5 className="">Web/Game Developer</h5>
        <Cta />
        <HeaderSoials />
        <div className="me">
          <img className='picture' src={pic} alt="profile" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header