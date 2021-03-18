// // you will always need to import React from react
// // import {Component} when building a class component
import React, { Component } from "react";

import Note from "./Note";

// // importing our CSS file from src>css
import "../css/Board.css";

class Board extends Component {
  // // constructor method available to us in class components
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Class Notes",
          body: "Always use constructors when extending another class",
        },
        {
          title: "My New Address",
          body: "2001 N Lonhill Phoenix, AZ 81234",
        },
        {
          title: "React Notes",
          body: "Everything in React is a component",
        },
      ],
    };
  }

  // // re-assigning values like we would on normal js objects, wouldn't trigger a re-render of the component
  // // notes[0].title = "new title";

  // Board.js Board Component Class Function

  // addNote() {
  //   //  // saving the data for notes from or state inside of our function, just for ease
  //   let notes = this.state.notes;

  //   // // push a static object containing more data for a new note (title, body) to the end of the array of notes in the state
  //   notes.push({
  //     title: "New Note Title",
  //     body: "New Note body",
  //   });

  //   // // calling this.setState on this component and passing in the most updated version of the notes (notes in our state that now contain the newest note added)
  //   // by calling setState, we are triggering a re-render of this component to display the newest note added on our browser
  //   this.setState({
  //     notes,
  //   });
  // }

  addNote() {
    let notes = this.state.notes;
    notes.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }

  // // passing in the id of the notecard from which the 'delete button' was clicked
  deleteNote(id){
    // // creating a new var that holds current notes
    let newNoteArr = this.state.notes;
    // // mapping through array of all notes that's saved in our state, passing in the current note along with the index of that current note
    newNoteArr.map((note, index) => {
      // at ever note (from the array in our state) we check to see if the id passed in matches the id of the note we're currently on
      if (id === note.id) {
        // // if it matches we're removing just one item from that array
        newNoteArr.splice(index,1);
      }
    });
    // // our array now has the same elements minus the one we just deleted
    // // update our state to show that new array which will trigger a re-render
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }

  // // render method - render what is returned (JSX) onto the browser
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
          {
            this.state.notes.map(item => {
                return <Note title={item.title} body={item.body} key={item.id} id={item.id} deleteHandler={this.deleteNote.bind(this)}/>
            })
          }
 

         
          
            {/* <Note title="Class Notes" body="Always use constructors when extending another class"/>
            <Note title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234"/>
            <Note title="React Notes" body="Everything in React is a component"/>
            <Note description={this.state.anySentence}/> */}

          </div>
        </div>
        <div>

          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
