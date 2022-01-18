import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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


const Landing = ({ toggleModal }) => {
    return (

        <div className='Landing' onMouseMove={moveBackground}>

            <div className="header">
                <div className="header__content">
                    <h1 className="title">Introducing</h1>
                    <h1 className="title blue__title">Blue Cave Media</h1>
                    <p className="header__para">We Help <span className='text__color'>Supercharge</span> Brands Through <span className='text__color'>Paid Advertising</span></p>
                </div>
            </div>

            <a href="#ideology" className="scroll">
                <div className="scroll__icon click"></div>
            </a>

            <a href="#">
                <button className="mail__btn click" onClick={() => toggleModal()}>
                    <FontAwesomeIcon icon="envelope" />
                </button>
            </a>
            
        </div>


    )
}

export default Landing
