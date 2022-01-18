import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faEnvelope, faAdjust, faUser } from '@fortawesome/free-solid-svg-icons'
import Shapes from './ui/Shapes';

library.add(faTimes, faEnvelope, faAdjust)


ReactDOM.render(
  <React.StrictMode>
    {/* <Shapes> */}
      <App />
    {/* </Shapes> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
