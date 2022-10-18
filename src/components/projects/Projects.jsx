import React from 'react'
import './projects.css'
import IMG1 from '../../assets/p6.png'
import IMG2 from '../../assets/p1.png'
import IMG3 from '../../assets/p7.png'
import IMG4 from '../../assets/p8.png'
import IMG5 from '../../assets/g2.png'

const data = [
  {
    id: 1,
    image: IMG3,
    title: 'shadePlace - A Place where people can share underated places to explore in a city.',
    github: "https://github.com/zeroonedev1/shadePlace",
    linkText:'Github'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stacct - Project Management for C executives suite.',
    github: "https://github.com/zeroonedev1/PMA_FE",
    linkText:'Github'
  }
  ,
  {
    id: 3,
    image: IMG1,
    title: 'Employee Speech Support BOT - inprogress',
    github: "https://github.com/zeroonedev1/voice-recognization-ai",
    linkText:'Github'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Mad Mechs -Mad Mechs is a twin-stick top down action shooter in the theme of “Out of Control” and inspired by games like Alien Shooter and Alien Swarm. ',
    github: "https://xsoodx.github.io/projects/madMechs",
    linkText:'Demo'
  },
  {
    id: 5,
    image: IMG5,
    title: 'RoBro - You are an old dismantled robot stashed away in a secret lab. You must solve puzzles and reassemble your self piece by piece and find a way out of the lab. Each part of yourself you recover will enable a new functionality. ',
    github: "https://xsoodx.github.io/projects/roBro",
    linkText:'Demo'
  }
]


const Projects = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github,linkText }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className = 'btn' target='_blank' rel="noreferrer">{linkText}</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live
                    Demo</a> */}
                </div>
              </article>
            )
          })
        }

      </div>
    </section >
  )
}

export default Projects
