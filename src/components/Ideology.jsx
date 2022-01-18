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


function Ideology() {
    return (
        <div id="ideology" onMouseMove={moveBackground}>
            <div className="ideology__container">
                <div className="ideology__content">
                    <h1 className='blue__title'>OUR IDEOLOGY</h1>
                    <p className='para'>At Blue Cave Media we understand that finding the
                        right audience can be a bit tedious, that’s where we can
                        come to help. This is done by creating a scope for our
                        clients to help see the bridge between them and their
                        customers. Once we have located the bridge we are the
                        vehicle that takes the business to the customers.</p>
                </div>
                    <img src={NavLogo} className='ideology__img' />
            </div>

            <a href="#Services" className="scroll2">
                <div className="scroll__icon click"></div>
            </a>


        </div>
    )
}

export default Ideology
