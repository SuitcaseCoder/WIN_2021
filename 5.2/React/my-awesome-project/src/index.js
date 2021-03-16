import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import WelcomeFN from './WelcomeFN';
// import WelcomeCL from './WelcomeCL';


ReactDOM.render(
  <React.StrictMode>
    {/* component that has been imported into this specific file and is now being used  */}
    <App />
    {/* <WelcomeFN />
    <WelcomeCL /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
