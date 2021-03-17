import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; <-- you can also delete this since we're not using it
import Board from './components/Board';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> <-- delete this because we no longer need to display it */}
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
