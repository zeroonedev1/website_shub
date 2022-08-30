import React from 'react'
// import './cta.css'
import CV from '../../assets/CV.docx'

const Cta = () => {
  return ( 
    <div className="cta">
      <a href={CV} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>LEts Talk</a>
    </div>
  )
}

export default Cta