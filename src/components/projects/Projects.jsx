import React from 'react'
import './projects.css'
import IMG1 from '../../assets/p6.png'
import IMG2 from '../../assets/p1.png'
import IMG3 from '../../assets/p7.png'

const data = [
  {
    id: 1,
    image: IMG3,
    title: 'shadePlace - A Place where people can share underated places to explore in a city.',
    github: "https://github.com/zeroonedev1/shadePlace",
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stacct - Project Management for C executives suite.',
    github: "https://github.com/zeroonedev1/PMA_FE",
    demo: 'https://github.com'
  }
  ,
  {
    id: 3,
    image: IMG1,
    title: 'Employee Speech Support BOT - inprogress',
    github: "https://github.com/zeroonedev1/voice-recognization-ai",
    demo: 'https://github.com'
  }
]


const Projects = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className = 'btn' target='_blank' rel="noreferrer">Github</a>
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
