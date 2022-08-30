import React from 'react'
import './about.css'
import ME from '../../assets/pic.png'
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
              <small>5 years of Experience </small>
            </article>

            <article className='about__card'>
              <VscOrganization className="about__icon"/>
              <h2>Companies</h2>
              <small>4 Companies</small>
            </article>

            <article className='about__card'>
              <RiCodeBoxFill className="about__icon"/>
              <h2>Projects</h2>
              <small>Front End Web & Game DEvelopment Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis animi vel corrupti doloribus porro architecto eos, vitae debitis aspernatur atque sit dolores ipsa autem. Eos minus quia rem itaque.</p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div> 
    </section>
  )
}

export default About