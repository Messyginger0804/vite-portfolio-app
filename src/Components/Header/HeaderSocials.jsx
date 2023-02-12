import React from 'react'
import { GrLinkedinOption } from 'react-icons/gr'
import { VscGithubInverted } from 'react-icons/vsc'
import { BsTwitter } from 'react-icons/bs'


const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/' target={''}><GrLinkedinOption /></a>
            <a href='https://github.com/Messyginger0804' target={''}><VscGithubInverted /></a>
            <a href='https://twitter.com/Messyginger0804' target={''}><BsTwitter /></a>
        </div>
    )
}

export default HeaderSocials