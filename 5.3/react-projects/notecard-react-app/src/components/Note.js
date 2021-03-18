import React, {Component} from 'react';
// import PropTypes from 'prop-types'; 
import PropTypes from 'prop-types';
import '../css/Note.css';
 


class Note extends Component {
    // // ignore constructor method for now
  constructor(props) {
    super(props);
    	
    this.titleContent = React.createRef();
    this.bodyContent = React.createRef();
    
    this.state = {
      title: this.props.title,
      body: this.props.body,
      editMode: false
    }
  }

  handleEdit() {
    // // setState triggers the component to re-render
    // // re-assigning editMode to true
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      body: this.bodyContent.current.value,
      editMode: false
    });
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }


//   // render method return JSX
  render() {
    // // creating three variables, they're empty
    let titleElement, bodyElement, buttonArea; 
    // // creating an if statement
    // // IF this.state.editMode is TRUE
    if (this.state.editMode){
      // // THEN assign variables to JSX elements
      // // ref= is tying this specific element and assigning it as the value of our titleContent in CreateRef() in our constructor
      titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
      bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
      // // button is listening for a click event and if clicked it will trigger the handleSave function
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    }
    // // IF editMode is FALSE
    else{
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>; 
      buttonArea = <div>
        <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
        <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
      </div>;
    }
    return (
        <div className='col-sm-6'>
        <div className="card card-view">
          <div className="card-body">
                {titleElement}
                {bodyElement}
                {buttonArea}
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


// before the render with the if/else statements: 
// return (
//   <div className="col-sm-6">
//     <div className="card card-view">
//       <div className="card-body">
//         <h5 className="card-title">{this.props.title}</h5>
//         <p>{this.props.body}</p>
//         <p>{this.props.description}</p>
//         <p>static information - will always show</p>
//         <button className="btn btn-info">Edit</button>
//         <button className="btn btn-danger">Delete</button>
//       </div>
//     </div>
//   </div>
// );