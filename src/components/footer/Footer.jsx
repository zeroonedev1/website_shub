import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Shubham Dholu</a>
      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#abour">About</a></li>
        <li><a href="#xp">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="footer__note">
      <small>&copy; use everything form here, I really dont mind.</small>
      </div>
    </footer>
  )
}

export default Footer