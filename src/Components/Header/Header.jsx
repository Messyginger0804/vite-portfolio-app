import React from 'react';
import CTA from './CTA';
import me from '../../assets/jc-as-a-sentare.jpg'
import HeaderSocials from './HeaderSocials';

import './Header.css';


const Header = () => {
    return (
        <header >
            <div className='conatiner header_container'>
                <h5>Hello I'm</h5>
                <h1>Jeremy "JC" Ashley</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={me} alt='me' />
                </div>

                <a href='#contact' className='scroll_down'>
                    Scroll Down</a>

            </div>

        </header>
    )
}

export default Header