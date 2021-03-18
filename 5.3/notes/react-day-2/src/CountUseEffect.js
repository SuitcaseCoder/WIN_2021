import React from 'react';

const CountUseEffect=()=>{
    let [count, setCount] = React.useState(0);

    const handleClick=()=>{
      setCount(count+2);
    }

    // // react hook using useEffect
    React.useEffect(()=>{
      console.log("Component did mount");
    },[])


    React.useEffect(()=>{
      console.log("Component did update");
    })


    console.log("Render");
    return(
      <div>
        <div>{count}</div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
    )
  }

  export default CountUseEffect;