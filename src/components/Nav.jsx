import React from 'react'
import NavLogo from '../assets/BlueCaveMedia.svg'
import { FaAdjust } from 'react-icons/fa';

const Nav = () => {

    return (

        <div className='nav'>

            <div className="nav__left">
                <img id="personal-logo" src={NavLogo} alt="" />
            </div>

            <div className="nav__right">
                <ul className="nav__link--list">
                    <li className="nav__link">
                        <a href="#ideology" className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Ideology</a>
                    </li>
                    <li className="nav__link">
                        <a href="#Services" className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Services</a>
                    </li>
                    <li className="nav__link">
                        <a href="#Team" className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Team</a>
                    </li>

                    <li className="nav__link icon click" /*onClick={toggleContrast()}*/>
                        <a href="#">
                            <FaAdjust />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}


export default Nav;
