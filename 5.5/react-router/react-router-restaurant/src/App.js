import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import Routes from './Routes';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Routes />
    {/* <Navbar /> */}
    </div>
  );
}

export default App;
