import React, {Component} from 'react';

class Form1 extends React.Component{
  constructor(){
    super();
    this.state={
        petList:[],
        petName:""
    }
  }

  handleNameInput=(event)=>{
    this.setState({petName:event.target.value});
  }


  handleClick=()=>{
    let petObj = {petName:this.state.petName};
    this.setState({petList: [...this.state.petList, petObj], petName:""});
  }

  render(){
    let petElementArr = this.state.petList.map((animal, index)=>{
      return(
        <div key={index}>
          <div>Name: {animal.petName}</div>
        </div>
      )
    })
    return(
      <div>
        <h4>Pet Store Animal List</h4>

        <input value={this.state.petName} onChange={this.handleNameInput} placeholder="Pet Name"/>
        <button onClick={this.handleClick}>Add Animal</button>
        {petElementArr}
      </div>
    )
}
}

export default Form1;