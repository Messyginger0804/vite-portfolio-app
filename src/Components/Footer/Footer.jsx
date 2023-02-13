import React from 'react';
import './Footer.css';
import { GrLinkedinOption } from 'react-icons/gr'
import { VscGithubInverted } from 'react-icons/vsc'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer_logo'>JC Ashley</a>
            <h5>Fullstack Developer</h5>

            <ul className='permalinks'>
                <li> <a href='#'>Home</a> </li>
                <li> <a href='#about'>About</a> </li>
                <li> <a href='#experience'>Experience</a> </li>
                <li> <a href='#projects'>Projects</a> </li>
                <li> <a href='#contact'>Contact Me</a> </li>
            </ul>


            <div className="footer_socials">
                <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/'><GrLinkedinOption /></a>
                <a href='https://github.com/Messyginger0804'><VscGithubInverted /></a>
                <a href='https://twitter.com/Messyginger0804'><BsTwitter /></a>
            </div>

        </footer>
    )
}

export default Footer