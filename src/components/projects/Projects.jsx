import React from 'react'
import './projects.css'
import IMG1 from '../../assets/card.png'
import IMG2 from '../../assets/card.png'
import IMG3 from '../../assets/card.png'
import IMG4 from '../../assets/card.png'
import IMG5 from '../../assets/card.png'
import IMG6 from '../../assets/card.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
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
                  <a href={github} className = 'btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live
                    Demo</a>
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
