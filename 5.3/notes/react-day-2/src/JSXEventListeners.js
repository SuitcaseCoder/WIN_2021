import React from 'react';

const JSXEventListener=()=>{
    const handleClick=(event)=>{
      console.log("Handle Click", event.target);
    }

    const handleInput=(event)=>{
      console.log("Handle Input", event.target.value);
    }

    const handleSecond=(event)=>{
      console.log("Handle Second", event);
    }

    return(
      <div>
        <div onClick={handleClick}>Clickable Div</div>
        <input onInput={handleInput}></input>
        <div onClick={handleSecond}>LISTEN FOR CLICKS</div>
      </div>
    )
  }

  export default JSXEventListener;