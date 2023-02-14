import React from 'react';
import './Projects.css'
import img1 from '../../assets/braylee-and-me.jpg'
import img2 from '../../assets/goofybraylee.jpg'
import img3 from '../../assets/catco-logo.jpg'

const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className='portfolio_container'>

                <article className='portfolio_items'>
                    <div className='portfolio_item-image'>
                        <img src={img1} alt='project1' />
                    </div>
                    <h3>This is a Project Title</h3>

                    <div className="portfolio_item-cta">
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_items'>
                    <div className='portfolio_item-image'>
                        <img src={img2} alt='project1' />
                    </div>
                    <h3>This is a Project Title</h3>

                    <div className="portfolio_item-cta">
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_items'>
                    <div className='portfolio_item-image'>
                        <img src={img3} alt='project1' />
                    </div>
                    <h3>This is a Project Title</h3>

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