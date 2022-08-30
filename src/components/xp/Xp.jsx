import React from 'react'
import './xp.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Xp = () => {
  return (
    <section id='xp'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Vue</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

             <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Mongo db</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Unity3D</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>C#</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Xp