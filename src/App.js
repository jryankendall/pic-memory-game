import React from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <div className="container">
      <div className="row">
        <div className="col s12">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              F
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
      </div>
    </div>
    </>
  );
}

export default App;
