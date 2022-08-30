import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">  
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h5>shubhamdholu@gmail.com</h5>
            <a href="mailto:shubhamdholu@gmail.com" target='_blank'>Send an e-mail</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h5>Ping Me</h5>
            <a href="https://m.me/shubham.dholu.75" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp />
            <h5>What up?</h5>
            <a href="https://api.whatsapp.com/send?phone=15197026801&text='Hi" target='_blank'>Whatsapp Me</a>
          </article>
        </div >
        < form actions="" >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='your email' required />
          <textarea name='message' placeholder='your message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form >
      </div >
    </section >
  )
}

export default Contact