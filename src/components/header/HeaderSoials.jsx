import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSoials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/shubham-dholu-a164348b/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/zeroonedev1" target='_blank' rel="noreferrer"><FaGithub/></a>
      {/* <a href="https://dribble.com" target='_blank'></a> */}
    </div>
  )
}

export default HeaderSoials