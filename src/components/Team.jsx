import React from 'react'
import NavLogo from "../assets/BlueCaveMedia.svg"

const Team = () => {
    return (

        <section id="Team">

            <div className="team__description">

                <div className="team__left">
                    <h1 className="blue__title">
                        Meet The Team</h1>
                </div>

                <div className="team__right">
                    <div className="team">
                    <figure className="about-me__picture-mask">
                        <img src={NavLogo} className="about-me__picture"/>
                    </figure>
                    <h1 className='team__names'>Abid</h1>
                    </div>
                    <div className="team">
                    <figure className="about-me__picture-mask">
                        <img src={NavLogo} className="about-me__picture"/>
                    </figure>
                    <h1 className='team__names'>Omar</h1>
                    </div>
                    <div className="team">
                    <figure className="about-me__picture-mask">
                        <img src={NavLogo} className="about-me__picture"/>
                    </figure>
                    <h1 className='team__names'>Rahat</h1>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default Team;
