import React, {Component} from 'react';
import IncrButton from './IncButton';
import ShowCount from './ShowCount';

class ParentCount extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }

  render(){
    return(
      <div>
        <ShowCount count={this.state.count} />
        <IncrButton handleIncrButton={this.handleIncrButton} />
      </div>
    )
  }
}



export default ParentCount;