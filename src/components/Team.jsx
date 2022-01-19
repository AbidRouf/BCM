import React from 'react'
import NavLogo from "../assets/BlueCaveMedia.svg"


const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px )`
    }
}


const Team = () => {
    return (

        <section id="Team" onMouseMove={moveBackground}>

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
