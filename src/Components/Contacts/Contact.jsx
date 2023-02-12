import React from 'react'
import './Contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yykgw9e', 'template_s2t184g', form.current, '_0eJeVE_0upDw61qU')

    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='contact_container'>
                <div className='contact_option'>
                    <article className='contact_option'>
                        <AiOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>j.c.ashley4363@gmail.com</h5>
                        <a href='mailto:j.c.ashley4363@gmail.com' target='_blank'>Send A Message</a>
                    </article>
                    <article className='contact_option'>
                        <AiOutlineWhatsApp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>Shoot Me a Message</h5>
                        <a href='https://api.whatsapp.com/send?phone=12149493126' target='_blank'>Send A Message</a>
                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='full name' required />
                    <input type='email' name='email' placeholder='youremail@email.com' required />
                    <textarea name='message' rows='7' placeholder='your message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact