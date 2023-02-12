import React from 'react';
import './Experience.css';
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { DiJavascript, DiCss3 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiPostgresql, SiExpress } from 'react-icons/si';



const Experience = () => {
    return (
        <section id='experience'>
            <h5>The Tools I Use</h5>
            <h2>My Current Tech Stack</h2>

            <div className='conatiner experience_container'>
                <div className='frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <h4> <AiFillHtml5 />HTML</h4>
                        </article>
                        <article className='experience_details'>
                            <h4> <DiCss3 />CSS</h4>
                        </article>
                        <article className='experience_details'>
                            <h4><DiJavascript />JAVASCRIPT</h4>
                        </article>
                        <article className='experience_details'>
                            <h4> <FaBootstrap />BOOTSTRAP</h4>
                        </article>
                        <article className='experience_details'>
                            <h4> <FaReact />REACT</h4>
                        </article>
                    </div>
                </div>
                <div className='backend'>
                    <h3>Backend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <h4> <FaNodeJs />NODE.JS</h4>
                        </article>
                        <article className='experience_details'>
                            <h4> <SiPostgresql />POSTGRESQL</h4>
                        </article>
                        <article className='experience_details'>
                            <h4> <SiExpress />EXPRESS</h4>
                        </article>
                    </div>

                </div>
            </div>




        </section >
    )
}

export default Experience