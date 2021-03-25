import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// // provider provides the data 
import { Provider } from 'react-redux';

// // this will allow us to actually create that store using redux
import { createStore } from 'redux';


// import StateCounter from "./components/StateCounter";
import ReduxCounter from './components/ReduxCounter';


// // our initialState is going to initialize state and give the state variables an initial value 
const initialState = {
  count: 0
};

	// // reducer function will accept two arguments 
  // // the first will be assigning what the state is, so for the first time we want to set it to the initial state to have a foundational starting point
  // // second argument will be an action 
function reducer(state = initialState, action) {
  // // reducer function will return the most updated and current version of state
  
  // // switch/case is just a fancy if/else statement
  // // switch statement is going to check for the action.type (which is passed in as an argument to the reducer function)
  switch(action.type) {
    // // if the action.type == 'INCREMENT'
    case 'INCREMENT':
      // // then return the current state of count and add 1 to it
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}


	// // creating the store and passing in the reducer function as an argument
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* wrap our redux comopnent with provider. provider is available to us via react-redux so we have to import it */}
    <Provider store1={store}>
      {/* <StateCounter /> */}
      <ReduxCounter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
