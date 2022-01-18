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

function Services() {
    return (


        <div id="Services" onMouseMove={moveBackground}>

            <div className="service__container">

                <img src={NavLogo} className='service__img' />

                <div className="service__content">
                    <h1 className='blue__title'>SERVICES</h1>
                    <p className='service__para para'>We use social media to create ads
                        business’s behalf to bring more customers to you so
                        that you can stay focused on other important business
                        activities.
                        <br />
                        <br />
                        We do this by targeting your specific
                        audience to bring quality leads. We create a bridge
                        between you and your customer using paid traffic to
                        connect the two of you via social media.
                    </p>
                </div>

            </div>

            <a href="#Services" className="scroll2">
                <div className="scroll__icon click"></div>
            </a>


        </div>
    )
}

export default Services
