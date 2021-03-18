import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Count from './Count';
import reportWebVitals from './reportWebVitals';
import CountUseEffect from './CountUseEffect';
import JSXEventListener from './JSXEventListeners';

ReactDOM.render(
  <React.StrictMode>
    <Count />
    <CountUseEffect />
    <JSXEventListener />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
