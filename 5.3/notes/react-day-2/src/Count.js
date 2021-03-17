import React from 'react' 
import './App.css';

// functional component
const Count=()=>{
  // // react hook example. 
  // // count is setting a new key/value pair in our 'state' 
  // // setCount can be called on anytime we need to update the state
  // // we're setting it to 0 as a starting point
  let [count, setCount] = React.useState(0);

  const handleClick=()=>{
    setCount(count+1);
  }

  return(
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default Count;