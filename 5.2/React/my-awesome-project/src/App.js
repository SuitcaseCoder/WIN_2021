import logo from './logo.svg';
import './App.css';
import WelcomeFN from './WelcomeFN';
import WelcomeCL from './WelcomeCL';

function App() {
  return (
    <div className="App">
              <WelcomeFN />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>LAURA RUIZ-ROEHRS. THIS IS MY FIRST REACT APP. HOW EXCITING!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <WelcomeCL />
      </div>
    </div>
  );
}

export default App;
