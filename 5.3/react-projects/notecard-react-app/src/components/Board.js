// // you will always need to import React from react
// // import {Component} when building a class component
import React, {Component} from 'react';
// // importing our CSS file from src>css
import '../css/Board.css';

class Board extends Component {
    // // constructor method available to us in class components
  constructor() {
    super();
  }

  // // render method - render what is returned (JSX) onto the browser
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

export default Board;