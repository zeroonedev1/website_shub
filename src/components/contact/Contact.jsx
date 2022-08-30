import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact_options">

          <article className="contact_option">

            <MdOutlineEmail />

            <h4>Email</h4>

            <h5>dummyegator@gmail.com</h5>

            <a href="mailto:dummyegator@gmail.com">Send a message</a>

          </article>

          <article className="contact_option">

            <MdOutlineEmail />

            <h4> Messenger</h4>

            <h5>egatortutorials</h5>

            <a href="https://m.me/ernest.achiever">Send a message</a>

          </article>

          <article className="contact_option">


            <MdOutlineEmail />

            <h4> Email</h4>

            <h5> dummyegator@gmail.com</h5>

            <a href="mailto:dummyegator@gmail.com">Send a message</a>

          </article>

        </div >


        < form actions="" ></form >

      </div >

    </section >
  )
}

export default Contact