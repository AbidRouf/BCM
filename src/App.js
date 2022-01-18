import React from 'react';
import './index.css';
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Ideology from './components/Ideology.jsx';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import Shapes from './ui/Shapes';
import Modal from './components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

let isModalOpen = false

function toggleModal() {
  if (isModalOpen) {
      isModalOpen = false
      return document.body.classList.remove("modal--open")
  }
  isModalOpen = true
  document.body.classList += " modal--open"
}


function App() {
  return (
    <div>

        <Shapes />
        <Nav />
        <Landing 
          onMouseMove={moveBackground} 
          toggleModal={toggleModal} />
        <Ideology 
          onMouseMove={moveBackground} />
        <Services />
        <Team />
        <Modal toggleModal={toggleModal} />
        <Footer />




    </div>

  );
}

export default App;
