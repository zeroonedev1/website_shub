import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // from emailjs https://dashboard.emailjs.com/sign-in
    emailjs.sendForm('service_ndeedd6', 'template_2rq7aso', form.current, 'gkwppUQEYV7ynhRQJ');
    e.target.reset();
    alert("Thanks for reaching out, I look forward to talk to you.");
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h5>shubhamdholu@gmail.com</h5>
            <a href="mailto:shubhamdholu@gmail.com" target='_blank' rel="noreferrer">Send an e-mail</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h5>Ping Me</h5>
            <a href="https://m.me/shubham.dholu.75" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp />
            <h5>Whatsapp</h5>
            <a href="https://api.whatsapp.com/send?phone=15197026801&text='Hi" target='_blank' rel="noreferrer">DM Me</a>
          </article>
        </div >
        < form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='full name' required />
          <input type="email" name='email' placeholder='email' required />
          <textarea name='message' placeholder='message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form >
      </div >
    </section >
  )
}

export default Contact