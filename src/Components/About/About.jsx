import React from 'react'
import './About.css'
import photo from '../../assets/coding.jpg'
import { BsAward } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { GiDiploma } from 'react-icons/gi'

const About = () => {
    return (
        <section id='about'>
            <h5 className='head'>Get To Know</h5>
            <h2 className='head'>About Me</h2>

            <div className='container aboout_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={photo} alt='about me image' />
                    </div>
                </div>

                <div className='about_content'>
                    <div className="about_cards">

                        <article className='about_card'>
                            <AiOutlineUsergroupAdd className='about_icon' />
                            <h5>Family Man</h5>
                            <small>Loving Husband & Father of 2</small>
                        </article>

                        <article className='about_card'>
                            <BsAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>15+ years Employee Management Experience</small>
                        </article>

                        <article className='about_card'>
                            <GiDiploma
                                className='about_icon' />
                            <h5>Fast & Studious Learner</h5>
                            <small>Ambitiously Learning New Tech & Sharpening My Skills</small>
                        </article>
                    </div>

                    <p>
                        I'm a trained Software Engineer that embraces values of dedication and commitment. I always fine ways to bring fun and buoyancy into stressful situations.

                        I aggressively and effectively seek out ways to improve both myself and those around me. My desire for consuming documentation and acquiring new skills is quenchless. Through my experience, the completed project doesn't bring nearly as much satisfaction as the process itself. I am eager to continue gaining knowledge and utilizing new skills in the tech field.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>

    )
}

export default About