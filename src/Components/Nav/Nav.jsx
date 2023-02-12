import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { MdComputer, MdMessage } from 'react-icons/md'
import { useState } from 'react';


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');


    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}  ><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><MdComputer /></a>
            <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''} ><AiTwotoneFolderOpen /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdMessage /></a>
        </nav >
    )
}

export default Nav