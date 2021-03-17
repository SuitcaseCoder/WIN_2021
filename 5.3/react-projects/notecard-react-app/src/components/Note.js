import React, {Component} from 'react';
// import PropTypes from 'prop-types'; 
import PropTypes from 'prop-types';
import '../css/Note.css';
 


class Note extends Component {
    // // ignore constructor method for now
  constructor() {
    super();
  }

//   // render method return JSX
  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
            <p>static information - will always show</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

	
Note.defaultProps = {
    title: "A cool Title",
    body: "A cool body",
  };
   
  Note.propTypes = {
    title: PropTypes.string

  };

export default Note;