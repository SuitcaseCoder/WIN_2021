import React from 'react';

// // create a class component (because we're using state)
class StateCounter extends React.Component {
    // //initializing state / creating state
    // // saving one data/state to it : count 0
  state = { 
      count: 0 
    }


// // functions that handle the incrementation and decrementation
  increment = () => {
    //   // access the state in this component
    // // and update it 
    this.setState({
        // // take current count that's living inside of the state and add 1 to it, 
        // // now our most updated state is whatever count was + 1
      count: this.state.count + 1
    });
  }

//   // opposite of increment
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }


//   // render method - what will be renered on the react dom
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
            {/* when the - button is clicked, the decrement function will be triggered */}
          <button onClick={this.decrement}>-</button>
          {/* display the current value of count (from the state) */}
          <span>{this.state.count}</span>
           {/* when the + button is clicked, the increment function will be triggered */}
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}
 
export default StateCounter;