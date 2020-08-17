import React from 'react';
import logo from './logo.svg';
import './App.css';
import SmallImg from './smallImg.png';
import BigImg from './bigImg.jpg';

function App() {
  function onClick() {
    import('./data.json').then( ({default: data}) => {
      console.log({data});
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={BigImg} className="App-logo" alt="logo" />
        <img src={SmallImg} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터 콘솔 출력</button>
        <p>Hello!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
