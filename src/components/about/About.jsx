import React from 'react'
import './about.css'
import ME from '../../assets/3_1.png'
import {TbMilitaryAward} from 'react-icons/tb'
import {VscOrganization} from 'react-icons/vsc'
import {RiCodeBoxFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbMilitaryAward className="about__icon"/>
              <h2>Experience</h2>
             <p> <small>4 years of Front End Development.</small></p>
              <p><small>365+ days of Game Development.</small></p>
            </article>

            <article className='about__card'>
              <VscOrganization className="about__icon"/>
              <h2>Companies</h2>
              <p><small><a href="https://zenithsoft.com/">Zenith Software</a></small></p>
              <p><small><a href="https://eka1.com/">Eka</a></small></p>
              <p><small><a href="https://moonfroglabs.com/">Moonfrog Labs</a></small></p>
              <p><small><a href="https://www.slksoftware.com/">SLK Software</a></small></p>
            </article>

            <article className='about__card'>
              <RiCodeBoxFill className="about__icon"/>
              <h2>Domains</h2>
              <p><small>BFSI</small></p>
              <p><small>Gaming</small></p>
              <p><small>Commodities-Trading</small></p>
              <p><small>Manufacturing</small></p>
            </article>
          </div>

          <p>I have reached to a 5th year of my Front-end web development & Game development odyssey, Along the way I have joined forces with 5+ clients to fight their tech-wars & now, I feel I want more!</p>
          <a href="#contact" className='btn btn-primary'>Lets Talk  </a>
        </div>
      </div> 
    </section>
  )
}

export default About