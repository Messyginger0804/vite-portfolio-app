import React from 'react'
import './About.css'
import photo from '../../assets/coding.jpg'
import { BsAward } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'

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
                            <BsAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about_card'>
                            <AiOutlineUsergroupAdd className='about_icon' />
                            <h5>Clients</h5>
                            <small>300 Worldwide</small>
                        </article>

                        <article className='about_card'>
                            <AiFillFolderOpen className='about_icon' />
                            <h5>Projects</h5>
                            <small>List of Projects</small>
                        </article>
                    </div>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aspernatur necessitatibus architecto iusto reprehenderit nam laboriosam, expedita ullam minus eaque. Dignissimos impedit nisi accusamus possimus qui adipisci ducimus molestias porro.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>

    )
}

export default About