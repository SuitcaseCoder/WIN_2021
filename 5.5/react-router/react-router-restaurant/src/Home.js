import React, { Component } from 'react';
 
import { 
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import Navbar from './Navbar';

// Home component

class Home extends Component {
    render(){
      return(
        <div>
          <h1>React Router Restaurant</h1>
          <h4>Serving up URLs like Momma used to make!</h4>
          <img src="https://i0.wp.com/68.media.tumblr.com/159d31bca61108d5bd1a8dedf5c14dfe/tumblr_otlasg917I1ql7xb0o6_1280.gif?" />
        </div>
      );
    }
}

  export default Home;