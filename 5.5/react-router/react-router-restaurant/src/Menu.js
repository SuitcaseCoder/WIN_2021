import React, { Component } from 'react';
 
import { 
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import Navbar from './Navbar';


// Menu component

class Menu extends Component {

    render(){
      return(
        <div>
          <h1>Menu</h1>
          <p>Check out our amazing 24/7 menu:</p>
            <ul>
              <li>Lazy Loading</li>
              <li>Dynamic Route Matching</li>
              <li>Location Transition Handling</li>
            </ul>
        </div>
      );
    }
  }

  export default Menu;