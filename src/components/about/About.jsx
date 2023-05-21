import React from 'react'
import './about.css'
import ME from '../../assets/3_1.png'
import { TbMilitaryAward } from 'react-icons/tb'
import { VscOrganization } from 'react-icons/vsc'
import { RiCodeBoxFill } from 'react-icons/ri'

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
              <TbMilitaryAward className="about__icon" />
              <h2>Experience</h2>
              <p><strong>5+</strong><br></br> years of Web/Front End Development.</p>
              <p><strong>365+</strong><br></br> days of Game Development.</p>
            </article>

            <article className='about__card'>
              <VscOrganization className="about__icon" />
              <h2>Companies</h2>
              <div className='companies_parent'>
                <p><a href="https://ottpay.com/">OTT Pay</a></p>
                <p><a href="https://tamwood.com/">Tamwood Careers</a></p>
                <p><a href="https://zenithsoft.com/">Zenith Software</a></p>
                <p><a href="https://eka1.com/">Eka Software</a></p>
                <p><a href="https://moonfroglabs.com/">Moonfrog Labs</a></p>
                <p><a href="https://www.slksoftware.com/">SLK Software</a></p>
              </div>
            </article>

            <article className='about__card'>
              <RiCodeBoxFill className="about__icon" />
              <h2>Domains</h2>
              <p>BFSI</p>
              <p>Gaming</p>
              <p>Commodities/Trading</p>
              <p>Manufacturing</p>
              <p>Educational</p>
            </article>
          </div>

          <p className='about_intro'>I have reached to a 5th year of my Web development & Game development odyssey,
            Along the way I have joined forces with 5+ clients to fight their tech-wars & now, I feel I want more!</p>
          <a href="#contact" className='btn btn-primary'>Lets Talk  </a>
        </div>
      </div>
    </section>
  )
}

export default About