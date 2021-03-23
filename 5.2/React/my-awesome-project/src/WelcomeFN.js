import React from 'react';	
import './css/WelcomeFN.css';

// // FUNCTIONAL COMPONENT
// Defining a component using a Javascript function "Functional Component"
function WelcomeFN() {

    function doSomething(){
        console.log('hey there');
        // this.setState(user: this.user.currentValue)
    }

    return (
        <div className="orange">
            <input type="text"></input>
            <input type="text" />
            <button onClick={doSomething()}></button>
            <h1>Hello, {this.state.user}</h1>
            <p>it's nice to see you from the functional component.</p>
        </div>
    );
}

// // export is what allows it to be imported into other components
export default WelcomeFN;