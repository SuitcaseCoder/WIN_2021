// // COUNTER WITH REDUX (compare with statecounter.js)
import React from 'react';

// // import connect - keyword in react-redux
import { connect } from 'react-redux';



// // create our class component
class ReduxCounter extends React.Component {

    // // notice we removed state from here

    // // we will still have increment and decrement functions 
    increment = () => {
        // // we don't use setState to change state anymore, because state will be in our redux store
        this.props.dispatch({ type: 'INCREMENT' });
      }
    
      decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
      }

      render() {
        return (
          <div>
            <h2>Counter</h2>
            <div>
              <button onClick={this.decrement}>-</button>
              {/* count value will be passed in as a prop with redux */}
              <span>{this.props.count}</span>
              <button onClick={this.increment}>+</button>
            </div>
          </div>
        )
      }
    }

/// // mapStateToProps : it's the middle man between redux store and the component trying to access the state
// // it's going to accept the state as an argument
// // return the most current/updated version of state
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

// Replace 'export default Counter' with this:
// // connect (which was imported into this file) is going what's going to connect our mapStateToProps method with our Counter component
export default connect(mapStateToProps)(ReduxCounter);