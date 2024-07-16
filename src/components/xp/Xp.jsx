import React from 'react'
import './xp.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Xp = () => {

  const languagesData = [
    {
      id: 1,
      skill: "Javascript",
      profeciency: 'Experienced',
    },
    {
      id: 2,
      skill: "Typescript",
      profeciency: 'Experienced',
    },
    {
      id: 3,
      skill: "React",
      profeciency: 'Experienced',
    },
    {
      id: 4,
      skill: "Angular",
      profeciency: 'Experienced',
    },
    {
      id: 5,
      skill: "Vue",
      profeciency: 'Experienced',
    },
    {
      id: 6,
      skill: "Node.js",
      profeciency: 'Experienced',
    },
    {
      id: 7,
      skill: "HTML5",
      profeciency: 'Experienced',
    },
    {
      id: 8,
      skill: "CSS3",
      profeciency: 'Experienced',
    },
    {
      id: 9,
      skill: "Mongodb",
      profeciency: 'Experienced',
    },
    {
      id: 10,
      skill: "SQL",
      profeciency: 'Experienced',
    },
    {
      id: 11,
      skill: "React-Native",
      profeciency: 'Experienced',
    },
    {
      id: 12,
      skill: "Flutter",
      profeciency: 'Intermediate',
    },
    {
      id: 13,
      skill: "Java",
      profeciency: 'Novice',
    },
    {
      id: 14,
      skill: "Redux",
      profeciency: 'Experienced',
    },
  ]

  const toolsPlatforms = [
    {
      id: 1,
      skill: "VS Code",
      profeciency: 'Experienced',
    },
    {
      id: 2,
      skill: "Git/Github",
      profeciency: 'Experienced',
    },
    {
      id: 3,
      skill: "Unity 3D",
      profeciency: 'Experienced',
    },
    {
      id: 4,
      skill: "Blender",
      profeciency: 'Intermediate',
    },
    {
      id: 5,
      skill: "Jira",
      profeciency: 'Experienced',
    },
    {
      id: 6,
      skill: "Postman",
      profeciency: 'Experienced',
    },
    {
      id: 7,
      skill: "Figma",
      profeciency: 'Experienced',
    },
    {
      id: 8,
      skill: "Jenkins",
      profeciency: 'Experienced',
    },
    {
      id: 9,
      skill: "Docker",
      profeciency: 'Experienced',
    },
    {
      id: 10,
      skill: "Redis",
      profeciency: 'Intermediate',
    },
    {
      id: 11,
      skill: "AWS",
      profeciency: 'Experienced',
    },
  ]

  return (
    <section id='xp'>
      <h5>My tools of Trade </h5>
      <h2>Tech Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Programmming Languages/Frameworks</h3>
          <div className="experience_content">
            {(languagesData.map((el) => (
              <article key={el.id} className='experience_details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{el.skill}</h4>
                  <small className='text-light'>{el.profeciency}</small>
                </div>
              </article>
            )))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Tools & Platforms</h3>
          <div className="experience_content">
            {(toolsPlatforms.map((el) => (
              <article className='experience_details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{el.skill}</h4>
                  <small className='text-light'>{el.profeciency}</small>
                </div>
              </article>
            )))}
          </div>
        </div>

      </div>
    </section >
  )
}

export default Xp