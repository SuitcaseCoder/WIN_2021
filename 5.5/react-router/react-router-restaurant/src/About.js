// Home component
import React, { Component } from 'react';
 
import { 
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import Navbar from './Navbar';


// About component

class About extends Component {
    render(){
      return(
        <div>
          <h1>About Us</h1>
          <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
          <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
        </div>
      );
    }
  }

  export default About;