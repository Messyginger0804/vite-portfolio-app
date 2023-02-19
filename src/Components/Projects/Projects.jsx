import React from 'react';
import './Projects.css'
import img1 from '../../assets/port.jpg'
import img2 from '../../assets/Tic_tac_toe.svg.png'
import img3 from '../../assets/catco-logo.jpg'

const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className='portfolio_container'>

                <article className='portfolio_items'>
                    <div className='portfolio_item-image'>
                        <h3>Catco.com</h3>
                        <small>Full-Stack e-comerce website</small>
                        <img src={img3} alt='project1' />
                    </div>

                    <div className="portfolio_item-cta">
                        <a href='https://github.com/Messyginger0804/catco2.0.git' className='btn' target='_blank'>Github</a>
                        <a href='http://github.com' className='not-ready' target='_blank'>Live Demo</a>
                    </div>
                    <p>This project is in progress</p>
                </article>

                <article className='portfolio_items'>
                    <h3>jcashleyportfolio.netlify.com</h3>
                    <small>Portfolio site created with React</small>
                    <div className='portfolio_item-image'>
                        <img src={img1} alt='project1' />
                    </div>

                    <div className="portfolio_item-cta">
                        <a href='https://github.com/Messyginger0804/vite-portfolio-app.git' className='btn' target='_blank'>Github</a>
                        {/* <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a> */}
                    </div>
                </article>

                <article className='portfolio_items'>
                    <div className='portfolio_item-image'>
                        <h3>TIC-TAC-TOE</h3>
                        <small>TIC-TAC-TOE game created using DOM manipulation</small>
                        <img src={img2} alt='project1' />
                    </div>

                    <div className="portfolio_item-cta">
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Projects