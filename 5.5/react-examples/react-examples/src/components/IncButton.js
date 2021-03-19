import React from 'react';

const IncrButton=(props)=>{

    handleIncrButton=(props)=>{
        this.setState({count:this.props.count+1});
      }

    return(
      <button onClick={props.handleIncrButton}>Increase Count</button>
    )
  }